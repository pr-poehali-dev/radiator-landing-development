import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemsSection from '@/components/ProblemsSection';
import CatalogSection from '@/components/CatalogSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ProductionSection from '@/components/ProductionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <CatalogSection />
      <AdvantagesSection />
      <ProductionSection />
      <Footer />

      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform">
          <Icon name="MessageCircle" size={28} />
        </Button>
      </div>
    </div>
  );
};

export default Index;
