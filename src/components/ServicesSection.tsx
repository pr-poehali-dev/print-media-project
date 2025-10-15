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

        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Технические требования к макетам</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Image" className="text-primary" size={20} />
                  Растровое изображение
                </h4>
                <div className="space-y-2 text-muted-foreground ml-7">
                  <p>
                    <span className="font-medium text-foreground">Форматы:</span> JPEG, JPG, PNG, TIFF, TIF, BMP, GIF, PSD
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Разрешение:</span> Минимум 150 dpi
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Сжатие:</span> LZW сжатие для формата TIFF
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Pencil" className="text-primary" size={20} />
                  Векторное изображение
                </h4>
                <div className="space-y-2 text-muted-foreground ml-7">
                  <p>
                    <span className="font-medium text-foreground">Форматы:</span> EPS, SVG, PDF, AI, CDR (до 19 версии)
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Шрифты:</span> Все шрифты должны быть переведены в кривые
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Scissors" className="text-primary" size={20} />
                  Файл под резку
                </h4>
                <div className="space-y-2 text-muted-foreground ml-7">
                  <p>
                    <span className="font-medium text-foreground">Структура:</span> Файл должен содержать 2 слоя
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>1 слой — под печать</li>
                    <li>2 слой — под резку</li>
                  </ul>
                  <p className="mt-2">
                    <span className="font-medium text-foreground">Вылеты:</span> 3-5 мм по краям
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg mt-6">
                <p className="text-sm text-center">
                  <Icon name="Info" className="inline mr-2" size={16} />
                  При возникновении вопросов по подготовке макетов, наши специалисты всегда готовы помочь
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;