import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  isOrderDialogOpen: boolean;
  setIsOrderDialogOpen: (open: boolean) => void;
  orderForm: {
    name: string;
    phone: string;
    email: string;
    service: string;
    description: string;
  };
  setOrderForm: (form: any) => void;
  handleOrderSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  scrollToSection: (section: string) => void;
  attachedFile: File | null;
  setAttachedFile: (file: File | null) => void;
}

const HeroSection = ({
  isOrderDialogOpen,
  setIsOrderDialogOpen,
  orderForm,
  setOrderForm,
  handleOrderSubmit,
  isSubmitting,
  scrollToSection,
  attachedFile,
  setAttachedFile
}: HeroSectionProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 50 * 1024 * 1024) {
      alert('Размер файла не должен превышать 50 МБ');
      return;
    }
    setAttachedFile(file);
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 text-foreground text-center leading-tight">
            <span className="block text-center">Профессиональная</span>
            <span className="block text-center">широкоформатная</span>
            <span className="block text-center">печать</span>
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
                  <div className="space-y-2">
                    <Label htmlFor="file-upload">Прикрепить файл</Label>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full"
                          onClick={() => document.getElementById('file-upload')?.click()}
                        >
                          <Icon name="Paperclip" size={18} className="mr-2" />
                          {attachedFile ? 'Изменить файл' : 'Выбрать файл'}
                        </Button>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </div>
                      {attachedFile && (
                        <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <Icon name="File" size={18} className="flex-shrink-0 text-primary" />
                            <span className="text-sm truncate">{attachedFile.name}</span>
                            <span className="text-xs text-muted-foreground flex-shrink-0">
                              ({(attachedFile.size / 1024 / 1024).toFixed(2)} МБ)
                            </span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={handleRemoveFile}
                            className="flex-shrink-0 ml-2"
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Максимальный размер файла: 50 МБ
                      </p>
                    </div>
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
  );
};

export default HeroSection;