import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
