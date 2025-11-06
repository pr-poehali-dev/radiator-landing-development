import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Factory" size={32} className="text-primary" />
          <span className="text-xl font-bold">ДГУ Радиаторы</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+74951234567" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Icon name="Phone" size={20} />
            <span className="font-medium">+7 (495) 123-45-67</span>
          </a>
          <Button size="lg" className="hidden md:flex">
            <Icon name="Calculator" size={18} className="mr-2" />
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
