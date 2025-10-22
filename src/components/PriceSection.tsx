import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const PriceSection = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [area, setArea] = useState('');

  const materials = [
    { name: 'Интерьерная на пленке с ламинацией (сольвент/уф)', price: 1320 },
    { name: 'Интерьерная печать с накаткой на пвх 3 мм', price: 2750 },
    { name: 'Интерьерная печать с накаткой на пвх 5 мм', price: 3300 },
    { name: 'Интерьерная печать с накаткой на пенокартон 5 мм', price: 2550 },
    { name: 'Интерьерная печать на постерной бумаге 150 гр/м', price: 920 },
    { name: 'Интерьерная печать на литом баннере', price: 850 },
    { name: 'Широкоформатная печать на литом баннере', price: 720 },
    { name: 'Интерьерная печать на натуральном холсте', price: 1850 },
    { name: 'Интерьерная печать на натуральном холсте с натяжкой на подрамник', price: 3850 },
    { name: 'Плоттерная резка виниловой пленки с нанесением монтажной пленки', price: 1540 },
    { name: 'Печать с вырезанием по контуру', price: 1980 },
  ];

  const priceList = materials.map(m => ({
    service: m.name,
    price: `${m.price.toLocaleString('ru-RU')} ₽/м²`
  }));

  const calculateTotal = () => {
    if (!selectedMaterial || !area || parseFloat(area) <= 0) return 0;
    const material = materials.find(m => m.name === selectedMaterial);
    return material ? (material.price * parseFloat(area)).toFixed(2) : 0;
  };

  const getPricePerSquareMeter = () => {
    if (!selectedMaterial) return 0;
    const material = materials.find(m => m.name === selectedMaterial);
    return material ? material.price : 0;
  };

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

          <div className="mt-8">
            <Button
              onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <Icon name="Calculator" size={20} />
              <span>Калькулятор стоимости</span>
              <Icon name={isCalculatorOpen ? "ChevronUp" : "ChevronDown"} size={20} />
            </Button>

            {isCalculatorOpen && (
              <Card className="mt-4 p-6 animate-fade-in">
                <h3 className="text-xl font-semibold mb-6 text-center">Рассчитайте стоимость заказа</h3>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="material" className="mb-2 block">Выберите материал</Label>
                    <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                      <SelectTrigger id="material">
                        <SelectValue placeholder="Выберите материал из списка" />
                      </SelectTrigger>
                      <SelectContent>
                        {materials.map((material, index) => (
                          <SelectItem key={index} value={material.name}>
                            {material.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="area" className="mb-2 block">Площадь (м²)</Label>
                    <Input
                      id="area"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="Введите площадь в м²"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>

                  {selectedMaterial && (
                    <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Цена за м²:</span>
                        <span className="font-semibold text-lg">
                          {getPricePerSquareMeter().toLocaleString('ru-RU')} ₽
                        </span>
                      </div>
                      
                      {area && parseFloat(area) > 0 && (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Площадь:</span>
                            <span className="font-semibold text-lg">{parseFloat(area).toFixed(2)} м²</span>
                          </div>
                          <div className="border-t border-border pt-2 mt-2">
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-lg">Итоговая сумма:</span>
                              <span className="font-bold text-2xl text-primary">
                                {parseFloat(calculateTotal()).toLocaleString('ru-RU')} ₽
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    * Расчёт является ориентировочным. Точная стоимость определяется после согласования всех деталей заказа.
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;