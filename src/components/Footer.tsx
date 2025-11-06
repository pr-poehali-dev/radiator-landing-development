import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 metal-texture">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Factory" size={32} className="text-primary" />
              <span className="text-xl font-bold">ДГУ Радиаторы</span>
            </div>
            <p className="text-muted-foreground mb-2">Производство радиаторов для ДГУ с 2015 года</p>
            <p className="text-muted-foreground mb-2">2800+ изготовленных радиаторов</p>
            <p className="text-muted-foreground">Гарантия 24 месяца</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={18} />
                +7 (495) 123-45-67
              </a>
              <a href="mailto:info@dgu-radiators.ru" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={18} />
                info@dgu-radiators.ru
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Icon name="MapPin" size={18} className="mt-1" />
                <span>Москва, ул. Промышленная, д.12</span>
              </div>
              <p className="text-sm text-muted-foreground">Ежедневно с 8:00 до 20:00 МСК</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Полезное</h4>
            <div className="space-y-2">
              <a href="#catalog" className="block text-muted-foreground hover:text-primary transition-colors">Каталог радиаторов</a>
              <a href="#calculator" className="block text-muted-foreground hover:text-primary transition-colors">Калькулятор стоимости</a>
              <a href="#production" className="block text-muted-foreground hover:text-primary transition-colors">Производство</a>
              <a href="#faq" className="block text-muted-foreground hover:text-primary transition-colors">Частые вопросы</a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 ДГУ Радиаторы. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#terms" className="hover:text-primary transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
