import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import funcUrls from '../../backend/func2url.json';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PriceSection from '@/components/PriceSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactsSection from '@/components/ContactsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: ''
  });

  const scrollToSection = (id: string) => {
    setActiveSection(id);
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
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
      />
      
      <HeroSection
        isOrderDialogOpen={isOrderDialogOpen}
        setIsOrderDialogOpen={setIsOrderDialogOpen}
        orderForm={orderForm}
        setOrderForm={setOrderForm}
        handleOrderSubmit={handleOrderSubmit}
        isSubmitting={isSubmitting}
        scrollToSection={scrollToSection}
      />

      <ServicesSection />
      <PriceSection />
      <PortfolioSection />
      <ContactsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
