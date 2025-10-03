import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
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

  return (
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
  );
};

export default ServicesSection;
