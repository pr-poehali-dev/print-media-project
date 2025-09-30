import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Maximize2',
      title: 'Широкоформатная печать',
      description: 'Высококачественная печать больших форматов для наружной рекламы',
    },
    {
      icon: 'Flag',
      title: 'Баннеры',
      description: 'Долговечные баннеры для выставок, мероприятий и уличной рекламы',
    },
    {
      icon: 'Square',
      title: 'Таблички и вывески',
      description: 'Информационные таблички и навигация для офисов и общественных мест',
    },
    {
      icon: 'Image',
      title: 'Картины на холстах',
      description: 'Художественная печать на холсте для интерьера и подарков',
    },
    {
      icon: 'Droplet',
      title: 'Сольвентная печать',
      description: 'Устойчивая к погодным условиям печать для наружного применения',
    },
    {
      icon: 'Sun',
      title: 'УФ печать',
      description: 'Печать на твердых материалах с мгновенной сушкой',
    },
  ];

  const portfolio = [
    {
      image: '/img/a05b3e27-c35f-4687-8c09-6728662043fd.jpg',
      title: 'Баннер для торгового центра',
      category: 'Широкоформатная печать',
    },
    {
      image: '/img/3e33d6f3-1197-4801-ac41-f1323c1f862b.jpg',
      title: 'Интерьерная картина',
      category: 'Печать на холсте',
    },
    {
      image: '/img/09ef967b-9a64-4b08-ad69-f16237e832e6.jpg',
      title: 'Офисные таблички',
      category: 'УФ печать',
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
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-primary">FilmPrint</div>
            <div className="hidden md:flex space-x-1">
              {['home', 'services', 'about', 'price', 'contacts'].map((section) => (
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
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Профессиональная
              <span className="block text-primary">широкоформатная печать</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Высокое качество, быстрые сроки и доступные цены. Работаем с любыми материалами и форматами.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" onClick={() => scrollToSection('services')}>
                Наши услуги
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('contacts')}>
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
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

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
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

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Типография PrintPro работает на рынке широкоформатной печати более 10 лет. 
              Мы используем современное европейское оборудование и качественные материалы от проверенных поставщиков.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Наша команда профессионалов выполнит любой заказ — от небольших табличек до масштабных рекламных конструкций. 
              Гарантируем высокое качество и соблюдение сроков.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">проектов</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Прайс-лист</h2>
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

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 animate-scale-in">
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
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
            </Card>

            <Card className="p-8 animate-scale-in" style={{ animationDelay: '150ms' }}>
              <h3 className="text-2xl font-semibold mb-6">Заказать звонок</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Комментарий"
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 FilmPrint.ru. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;