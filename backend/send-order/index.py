import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field, field_validator, ValidationError

class OrderRequest(BaseModel):
    """Модель заказа на печать"""
    name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)
    email: str = Field(..., min_length=5, max_length=100)
    service: str = Field(..., min_length=3, max_length=200)
    description: str = Field(default="", max_length=2000)
    
    @field_validator('phone')
    @classmethod
    def validate_phone(cls, v: str) -> str:
        if len(v) < 10:
            raise ValueError('Некорректный номер телефона')
        return v

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отправка заказа на email через SMTP
    Args: event с httpMethod, body (JSON с данными заказа)
          context с request_id
    Returns: HTTP response с результатом отправки
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Метод не поддерживается'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    try:
        order = OrderRequest(**body_data)
    except ValidationError as e:
        return {
            'statusCode': 422,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Неверные данные', 'details': str(e)}),
            'isBase64Encoded': False
        }
    
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    to_email = os.environ.get('SMTP_TO_EMAIL')
    
    if not all([smtp_host, smtp_user, smtp_password, to_email]):
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'SMTP не настроен'}),
            'isBase64Encoded': False
        }
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новый заказ от {order.name}'
    msg['From'] = smtp_user
    msg['To'] = to_email
    
    html_body = f'''
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #2563eb;">Новый заказ с сайта FilmPrint.ru</h2>
        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Имя:</strong> {order.name}</p>
          <p><strong>Телефон:</strong> {order.phone}</p>
          <p><strong>Email:</strong> {order.email}</p>
          <p><strong>Услуга:</strong> {order.service}</p>
          {f"<p><strong>Описание:</strong><br>{order.description}</p>" if order.description else ""}
        </div>
        <p style="color: #6b7280; font-size: 12px;">Это автоматическое письмо с сайта filmprint.ru</p>
      </body>
    </html>
    '''
    
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))
    
    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'message': 'Заказ успешно отправлен'
        }),
        'isBase64Encoded': False
    }