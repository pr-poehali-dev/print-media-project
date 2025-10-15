import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Контакты</h2>
        
        <div className="max-w-5xl mx-auto mb-8">
          <Card className="overflow-hidden animate-fade-in">
            <iframe
              src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=87761014954"
              width="100%"
              height="450"
              frameBorder="0"
              title="Карта расположения FilmPrint"
              style={{ border: 0 }}
            ></iframe>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 animate-scale-in">
            <h3 className="text-2xl font-semibold mb-6 text-center">Свяжитесь с нами</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Icon name="Phone" className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-medium">Телефон</p>
                  <p className="text-muted-foreground">+7 (965) 354-82-82</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Mail" className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">zakaz@filmprint.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-medium">Адрес</p>
                  <p className="text-muted-foreground">г. Москва, ул. Краснобогатырская, д. 2 стр. 53</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Clock" className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-medium">Режим работы</p>
                  <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00</p>
                  <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Send" className="text-primary" size={24} />
                  <p className="font-semibold text-lg">Наш Telegram</p>
                </div>
                <a 
                  href="https://t.me/filmprintmsk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img 
                    src="https://cdn.poehali.dev/files/a2fad36d-a011-4b91-a47a-50e2f4433a98.png" 
                    alt="QR-код Telegram канала FilmPrint" 
                    className="w-64 h-auto object-contain rounded-lg"
                  />
                </a>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Отсканируйте QR-код или нажмите на него
                  </p>
                  <a 
                    href="https://t.me/filmprintmsk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    @filmprintmsk
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;