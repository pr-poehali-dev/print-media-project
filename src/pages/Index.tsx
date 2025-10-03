import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import funcUrls from '../../backend/func2url.json';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: ''
  });

  const services = [
    {
      icon: 'Scroll',
      title: 'Интерьерная печать',
      description: 'Высокое качество для ваших идей',
    },
    {
      icon: 'Printer',
      title: 'Широкоформатная печать',
      description: 'Большие форматы для масштабных идей',
    },
    {
      icon: 'MoveUpRight',
      title: 'Таблички и вывески',
      description: 'Информационные таблички и навигация для офисов и общественных мест',
    },
    {
      icon: 'Image',
      title: 'Картины на холстах',
      description: 'Художественная печать на холсте для интерьера и подарков',
    },
    {
      icon: 'Sun',
      title: 'Рулонная УФ печать',
      description: 'Печать на твердых материалах с мгновенной сушкой',
    },
    {
      icon: 'Hammer',
      title: 'Изготовление декораций',
      description: 'Создание декораций для мероприятий, театров и фотозон',
    },
  ];

  const portfolio = [
    {
      image: '/img/4beb82dd-99c2-47f7-9230-3753fdc56ed4.jpg',
      title: 'Наружная реклама',
      category: 'Широкоформатная печать',
    },
    {
      image: '/img/37d40b2c-578c-48e8-ac14-6f06ec45fd91.jpg',
      title: 'Баннер для выставки',
      category: 'Баннеры',
    },
    {
      image: '/img/5d7b6f97-c4cc-469f-a84e-d82698817f92.jpg',
      title: 'Офисные таблички',
      category: 'Таблички и вывески',
    },
    {
      image: '/img/48455afd-316a-4d38-a264-dc1b2a85f5c8.jpg',
      title: 'Интерьерная картина',
      category: 'Картины на холстах',
    },
    {
      image: '/img/199f2c53-2a9a-46f4-89ec-6e92c29ca472.jpg',
      title: 'Печать на пластике',
      category: 'Рулонная УФ печать',
    },
    {
      image: '/img/118461d0-a203-4a46-80f7-0901a00a0d25.jpg',
      title: 'Декорации для фотозоны',
      category: 'Изготовление декораций',
    },
  ];

  const priceList = [
    { service: 'Интерьерная на пленке с ламинацией (сольвент/уф)', price: '1 320 ₽/м²' },
    { service: 'Интерьерная печать с накаткой на пвх 3 мм', price: '2 750 ₽/м²' },
    { service: 'Интерьерная печать с накаткой на пвх 5 мм', price: '3 300 ₽/м²' },
    { service: 'Интерьерная печать с накаткой на пенокартон 5 мм', price: '2 550 ₽/м²' },
    { service: 'Интерьерная печать на постерной бумаге 150 гр/м', price: '920 ₽/м' },
    { service: 'Интерьерная печать на литом баннере', price: '850 ₽/м²' },
    { service: 'Широкоформатная печать на литом баннере', price: '720 ₽/м²' },
    { service: 'Интерьерная печать на натуральном холсте', price: '1 850 ₽/м²' },
    { service: 'Интерьерная печать на натуральном холсте с натяжкой на подрамник', price: '3 850 ₽/м²' },
    { service: 'Плоттерная резка виниловой пленки с нанесением монтажной пленки', price: '1 540 ₽/м²' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(funcUrls['send-order'], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderForm)
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Заказ отправлен!',
          description: 'Мы свяжемся с вами в ближайшее время.',
        });
        setOrderForm({
          name: '',
          phone: '',
          email: '',
          service: '',
          description: ''
        });
        setIsOrderDialogOpen(false);
      } else {
        toast({
          title: 'Ошибка',
          description: data.error || 'Не удалось отправить заказ',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Проблема с подключением к серверу',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-foreground">FilmPrint</div>
            
            <div className="hidden md:flex space-x-1">
              {['home', 'services', 'price', 'contacts', 'about'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeSection === section
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'about' && 'О нас'}
                  {section === 'price' && 'Прайс'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 animate-fade-in">
              {['home', 'services', 'price', 'contacts', 'about'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-colors ${
                    activeSection === section
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'about' && 'О нас'}
                  {section === 'price' && 'Прайс'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 text-foreground text-center">
              Профессиональная
              <span className="block">широкоформатная печать</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Высокое качество, быстрые сроки и доступные цены. Работаем с любыми материалами и форматами.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg">
                    Оформить заказ
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Оформить заказ</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleOrderSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        required
                        minLength={2}
                        value={orderForm.name}
                        onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                        placeholder="Иван Петров"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        minLength={10}
                        value={orderForm.phone}
                        onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                        placeholder="+7 (965) 354-82-82"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={orderForm.email}
                        onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                        placeholder="example@mail.ru"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Интересующая услуга *</Label>
                      <Input
                        id="service"
                        required
                        minLength={3}
                        value={orderForm.service}
                        onChange={(e) => setOrderForm({...orderForm, service: e.target.value})}
                        placeholder="Широкоформатная печать"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Описание заказа</Label>
                      <Textarea
                        id="description"
                        rows={4}
                        value={orderForm.description}
                        onChange={(e) => setOrderForm({...orderForm, description: e.target.value})}
                        placeholder="Опишите детали вашего заказа: размеры, материал, сроки..."
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Отправка...' : 'Отправить заказ'}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('services')}>
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр услуг широкоформатной печати для бизнеса и частных клиентов
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12">Ориентировочные цены на наши услуги</p>
          <div className="max-w-3xl mx-auto">
            <Card className="divide-y">
              {priceList.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 hover:bg-muted/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium">{item.service}</span>
                  <span className="text-primary font-semibold text-lg">{item.price}</span>
                </div>
              ))}
            </Card>
            <p className="text-sm text-muted-foreground text-center mt-6">
              * Точная стоимость рассчитывается индивидуально с учётом тиража, материалов и сложности макета
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12">Примеры наших работ</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm mb-1">{item.category}</p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Контакты</h2>
          
          <div className="max-w-5xl mx-auto mb-8">
            <Card className="overflow-hidden animate-fade-in">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.692968%2C55.812094&z=17&l=map&pt=37.692968,55.812094,pm2rdm"
                width="100%"
                height="450"
                frameBorder="0"
                title="Карта расположения FilmPrint - Краснобогатырская 2 стр 53"
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
                      src="/img/acfa81e4-84f0-4e87-9f6a-ac7baf882c56.jpg" 
                      alt="QR-код Telegram канала FilmPrint" 
                      className="w-40 h-40 object-contain border-2 border-border rounded-lg bg-white"
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

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">О нас</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 animate-fade-in">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Icon name="Building2" className="text-primary" size={28} />
                  О компании
                </h3>
                <p className="text-muted-foreground mb-6">
                  Типография FilmPrint работает на рынке широкоформатной печати более 10 лет. 
                  Мы используем современное европейское оборудование и качественные материалы от проверенных поставщиков.
                </p>
                <p className="text-muted-foreground">
                  Наша команда профессионалов выполнит любой заказ — от небольших табличек до масштабных рекламных конструкций. 
                  Гарантируем высокое качество и соблюдение сроков.
                </p>
              </Card>

              <Card className="p-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Icon name="FileText" className="text-primary" size={28} />
                  Реквизиты
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">Наименование организации:</p>
                    <p className="text-muted-foreground">ИП Якубов Айвар Дамирович</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">ИНН:</p>
                    <p className="text-muted-foreground">771475423846</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">ОГРН ИП:</p>
                    <p className="text-muted-foreground">311774623600930</p>
                    <p className="text-muted-foreground text-xs">выдан 24 августа 2011</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Юридический адрес:</p>
                    <p className="text-muted-foreground">143968, Россия, Московская область, город Реутов, улица Реутовских ополченцев, дом 14, кв 311</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="text-4xl font-bold text-primary mb-2">14+</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '350ms' }}>
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">проектов</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '450ms' }}>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">качество</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white text-black py-8 px-4 border-t border-gray-200">
        <div className="container mx-auto text-center">
          <p className="text-sm mb-3">© 2024 FilmPrint.ru. Все права защищены.</p>
          <div className="flex items-center justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-sm text-black/70 hover:text-black underline">
                  Договор оферты
                </button>
              </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl">Договор публичной оферты</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[60vh] pr-4">
                <div className="space-y-4 text-sm">
                  <section>
                    <h3 className="font-semibold text-lg mb-2">1. Общие положения</h3>
                    <p className="text-muted-foreground">
                      1.1. Настоящий документ является публичной офертой в соответствии со статьёй 437 Гражданского кодекса Российской Федерации.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      1.2. Исполнителем услуг по настоящему договору является ИП FilmPrint (далее — «Исполнитель»).
                    </p>
                    <p className="text-muted-foreground mt-2">
                      1.3. Заказчиком является физическое или юридическое лицо, принявшее условия настоящей оферты (далее — «Заказчик»).
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">2. Предмет договора</h3>
                    <p className="text-muted-foreground">
                      2.1. Исполнитель обязуется оказать Заказчику услуги широкоформатной печати, а Заказчик обязуется принять и оплатить эти услуги.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      2.2. Перечень услуг и их стоимость указаны в прайс-листе на сайте filmprint.ru и могут быть изменены Исполнителем в одностороннем порядке.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">3. Порядок оказания услуг</h3>
                    <p className="text-muted-foreground">
                      3.1. Заказчик направляет заявку на оказание услуг любым доступным способом: по телефону, электронной почте или через форму на сайте.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      3.2. Исполнитель рассматривает заявку и согласовывает с Заказчиком стоимость, сроки и технические требования.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      3.3. После согласования условий Заказчик предоставляет макет для печати в электронном виде.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      3.4. Исполнитель выполняет работы в согласованные сроки и уведомляет Заказчика о готовности.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">4. Стоимость и порядок оплаты</h3>
                    <p className="text-muted-foreground">
                      4.1. Стоимость услуг определяется на основании прайс-листа и согласовывается с Заказчиком до начала работ.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      4.2. Оплата производится наличным или безналичным расчётом по согласованию сторон.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      4.3. Для юридических лиц оплата производится на основании выставленного счёта.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">5. Права и обязанности сторон</h3>
                    <p className="text-muted-foreground">
                      5.1. Исполнитель обязуется выполнить работы качественно и в согласованные сроки.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      5.2. Заказчик обязуется предоставить корректный макет и своевременно оплатить услуги.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      5.3. Исполнитель не несёт ответственности за качество предоставленного Заказчиком макета.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">6. Гарантии и ответственность</h3>
                    <p className="text-muted-foreground">
                      6.1. Исполнитель гарантирует соответствие выполненных работ техническим требованиям печати.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      6.2. Претензии по качеству принимаются в течение 3 дней с момента получения заказа.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      6.3. Исполнитель не несёт ответственности за задержку выполнения заказа по вине Заказчика.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">7. Конфиденциальность</h3>
                    <p className="text-muted-foreground">
                      7.1. Стороны обязуются не разглашать конфиденциальную информацию, полученную в ходе сотрудничества.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      7.2. Макеты и файлы Заказчика хранятся в течение 30 дней после выполнения заказа, после чего удаляются.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">8. Срок действия договора</h3>
                    <p className="text-muted-foreground">
                      8.1. Настоящий договор вступает в силу с момента принятия Заказчиком условий оферты и действует до полного исполнения обязательств сторонами.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">9. Реквизиты исполнителя</h3>
                    <p className="text-muted-foreground">
                      ИП FilmPrint
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Адрес: г. Москва, ул. Краснобогатырская, д. 2 стр. 53
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Телефон: +7 (965) 354-82-82
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Email: zakaz@filmprint.ru
                    </p>
                  </section>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <button className="text-sm text-black hover:text-black/70 underline">
                Политика конфиденциальности
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl">Политика конфиденциальности</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[60vh] pr-4">
                <div className="space-y-4 text-sm">
                  <section>
                    <h3 className="font-semibold text-lg mb-2">1. Общие положения</h3>
                    <p className="text-muted-foreground">
                      1.1. Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта filmprint.ru.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      1.2. Оператором персональных данных является ИП Якубов Айвар Дамирович (далее — «Оператор»).
                    </p>
                    <p className="text-muted-foreground mt-2">
                      1.3. Используя сайт filmprint.ru, вы соглашаетесь с условиями настоящей Политики конфиденциальности.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">2. Персональные данные</h3>
                    <p className="text-muted-foreground">
                      2.1. Персональные данные — любая информация, относящаяся к прямо или косвенно определённому физическому лицу.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      2.2. Мы собираем следующие данные:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                      <li>ФИО</li>
                      <li>Контактный телефон</li>
                      <li>Адрес электронной почты</li>
                      <li>Данные о заказах и услугах</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">3. Цели обработки данных</h3>
                    <p className="text-muted-foreground">
                      3.1. Персональные данные используются для:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                      <li>Обработки заказов и оказания услуг</li>
                      <li>Связи с клиентами по вопросам заказов</li>
                      <li>Информирования о новых услугах и акциях (при наличии согласия)</li>
                      <li>Улучшения качества услуг</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">4. Правовые основания обработки</h3>
                    <p className="text-muted-foreground">
                      4.1. Обработка персональных данных осуществляется на основании:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                      <li>Федерального закона № 152-ФЗ «О персональных данных»</li>
                      <li>Вашего согласия на обработку персональных данных</li>
                      <li>Договора на оказание услуг</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">5. Защита данных</h3>
                    <p className="text-muted-foreground">
                      5.1. Оператор принимает необходимые меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      5.2. Доступ к персональным данным имеют только уполномоченные сотрудники Оператора.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      5.3. Персональные данные хранятся в защищённых базах данных с ограниченным доступом.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">6. Передача данных третьим лицам</h3>
                    <p className="text-muted-foreground">
                      6.1. Оператор не передаёт персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством РФ.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      6.2. Данные могут быть переданы:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                      <li>Государственным органам по официальному запросу</li>
                      <li>Партнёрам для выполнения заказов (с соблюдением конфиденциальности)</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">7. Права субъектов данных</h3>
                    <p className="text-muted-foreground">
                      7.1. Вы имеете право:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                      <li>Получать информацию об обработке ваших персональных данных</li>
                      <li>Требовать уточнения, блокирования или уничтожения данных</li>
                      <li>Отозвать согласие на обработку данных</li>
                      <li>Обжаловать действия Оператора в Роскомнадзоре или суде</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">8. Файлы cookie</h3>
                    <p className="text-muted-foreground">
                      8.1. Сайт использует файлы cookie для улучшения работы и анализа посещаемости.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      8.2. Вы можете отключить cookie в настройках браузера, но это может ограничить функциональность сайта.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">9. Изменения в политике</h3>
                    <p className="text-muted-foreground">
                      9.1. Оператор вправе вносить изменения в настоящую Политику конфиденциальности.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      9.2. Новая редакция вступает в силу с момента размещения на сайте.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">10. Контакты</h3>
                    <p className="text-muted-foreground">
                      По вопросам обработки персональных данных обращайтесь:
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Email: zakaz@filmprint.ru
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Телефон: +7 (965) 354-82-82
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Адрес: 143968, Россия, Московская область, город Реутов, улица Реутовских ополченцев, дом 14, кв 311
                    </p>
                  </section>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;