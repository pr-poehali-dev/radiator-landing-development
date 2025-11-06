import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    model: '',
    power: '',
    phone: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="pt-32 pb-20 metal-texture relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Радиаторы для ДГУ от производителя
              <span className="text-primary"> за 5-7 дней</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Изготавливаем медные и алюминиевые радиаторы для дизель-генераторов мощностью от 10 до 3000 кВт
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-medium">Изготовление за 5-7 дней</p>
                  <p className="text-sm text-muted-foreground">Типовые в наличии</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-medium">Работаем с 2015 года</p>
                  <p className="text-sm text-muted-foreground">2800+ радиаторов</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-medium">Тестирование под давлением</p>
                  <p className="text-sm text-muted-foreground">3 атмосферы</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-medium">Доставка по РФ</p>
                  <p className="text-sm text-muted-foreground">И страны СНГ</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="industrial-border shadow-2xl animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Узнайте стоимость за 30 секунд</CardTitle>
              <CardDescription>Перезвоним в течение 15 минут</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="model">Марка и модель ДГУ</Label>
                  <Input
                    id="model"
                    placeholder="Например: Caterpillar 3512"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="power">Мощность ДГУ (кВт)</Label>
                  <Select
                    value={formData.power}
                    onValueChange={(value) => setFormData({ ...formData, power: value })}
                  >
                    <SelectTrigger id="power">
                      <SelectValue placeholder="Выберите диапазон" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-100">до 100 кВт</SelectItem>
                      <SelectItem value="100-500">100-500 кВт</SelectItem>
                      <SelectItem value="500-1000">500-1000 кВт</SelectItem>
                      <SelectItem value="1000-3000">1000-3000 кВт</SelectItem>
                      <SelectItem value="3000+">более 3000 кВт</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" variant="default">
                  Рассчитать стоимость
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Работаем ежедневно с 8:00 до 20:00 МСК
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
