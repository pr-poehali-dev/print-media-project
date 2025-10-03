import { Card } from '@/components/ui/card';

const PriceSection = () => {
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

  return (
    <section id="price" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Прайс-лист</h2>
        <p className="text-center text-muted-foreground mb-12">Ориентировочные цены на наши услуги</p>
        <div className="max-w-3xl mx-auto">
          <Card className="divide-y">
            {priceList.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center gap-4 p-3 sm:p-4 hover:bg-muted/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium text-sm sm:text-base">{item.service}</span>
                <span className="text-primary font-semibold text-sm sm:text-lg whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </Card>
          <p className="text-sm text-muted-foreground text-center mt-6">
            * Точная стоимость рассчитывается индивидуально с учётом тиража, материалов и сложности макета
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
