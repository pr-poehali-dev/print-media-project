const PortfolioSection = () => {
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

  return (
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
  );
};

export default PortfolioSection;
