import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
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

  const radiatorProducts = [
    {
      id: 1,
      name: 'Радиатор для Caterpillar 3512',
      power: '200-250 кВт',
      material: 'Медь + алюминий',
      dimensions: '850×600×120 мм',
      weight: '28 кг',
      pressure: '3 атм',
      price: '45 000 ₽',
      inStock: true,
      models: 'Caterpillar 3512, C9, C13'
    },
    {
      id: 2,
      name: 'Радиатор для ЯМЗ-238',
      power: '150-200 кВт',
      material: 'Медь + алюминий',
      dimensions: '750×550×100 мм',
      weight: '24 кг',
      pressure: '3 атм',
      price: '38 000 ₽',
      inStock: true,
      models: 'ЯМЗ-238, ЯМЗ-240'
    },
    {
      id: 3,
      name: 'Радиатор для Cummins 6CTA',
      power: '180-220 кВт',
      material: 'Медь + алюминий',
      dimensions: '800×580×110 мм',
      weight: '26 кг',
      pressure: '3 атм',
      price: '42 000 ₽',
      inStock: false,
      models: 'Cummins 6CTA, 6LTAA'
    },
    {
      id: 4,
      name: 'Радиатор для SDEC SC9D',
      power: '250-300 кВт',
      material: 'Медь + алюминий',
      dimensions: '900×650×130 мм',
      weight: '32 кг',
      pressure: '3 атм',
      price: '52 000 ₽',
      inStock: true,
      models: 'SDEC SC9D220D2, SC11CB'
    },
    {
      id: 5,
      name: 'Радиатор для Perkins 2506',
      power: '300-350 кВт',
      material: 'Медь + алюминий',
      dimensions: '950×700×140 мм',
      weight: '35 кг',
      pressure: '3 атм',
      price: '58 000 ₽',
      inStock: false,
      models: 'Perkins 2506A, 2806A'
    },
    {
      id: 6,
      name: 'Радиатор для MTU 12V2000',
      power: '800-1000 кВт',
      material: 'Медь + алюминий',
      dimensions: '1200×850×180 мм',
      weight: '68 кг',
      pressure: '3 атм',
      price: '125 000 ₽',
      inStock: true,
      models: 'MTU 12V2000, 16V2000'
    }
  ];

  const advantages = [
    {
      icon: 'Ruler',
      title: 'Медные трубки 0,8 мм',
      description: 'У конкурентов: 0,4-0,6 мм. Выдерживают давление до 5 атм, не деформируются'
    },
    {
      icon: 'Layers',
      title: 'Алюминиевые пластины 0,15 мм',
      description: 'Оптимальная толщина для теплоотвода. Площадь оребрения увеличена на 25%'
    },
    {
      icon: 'Flame',
      title: 'Пайка в среде защитного газа',
      description: 'Исключаем окисление и непропаи. Контроль качества каждого шва'
    },
    {
      icon: 'Shield',
      title: 'Штуцеры из нержавеющей стали',
      description: 'Не корродируют в агрессивной среде. Резьба не срывается при монтаже'
    },
    {
      icon: 'Sparkles',
      title: 'Антикоррозийное покрытие',
      description: 'Порошковая окраска с предварительным фосфатированием. Выдерживает до 150°C'
    },
    {
      icon: 'Calculator',
      title: 'Расчет под конкретные параметры',
      description: 'Учитываем мощность, температуру ОЖ, климат. Коэффициент запаса 15-20%'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Почему не стоит экономить на радиаторе ДГУ?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Последствия неправильного выбора могут обойтись в десятки раз дороже
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-destructive/50 hover:border-destructive transition-colors">
              <CardHeader>
                <Icon name="AlertTriangle" className="text-destructive mb-2" size={40} />
                <CardTitle className="text-xl">Перегрев двигателя</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-bold text-destructive text-2xl">от 500 000 ₽</p>
                <p className="text-sm text-muted-foreground">
                  Капремонт двигателя при задирах в цилиндрах и деформации ГБЦ
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-500/50 hover:border-orange-500 transition-colors">
              <CardHeader>
                <Icon name="Clock" className="text-orange-500 mb-2" size={40} />
                <CardTitle className="text-xl">Простой оборудования</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-bold text-orange-500 text-2xl">Потеря прибыли</p>
                <p className="text-sm text-muted-foreground">
                  Китайские радиаторы служат 6-12 месяцев. Наши работают 5-7 лет
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-500/50 hover:border-yellow-500 transition-colors">
              <CardHeader>
                <Icon name="TrendingDown" className="text-yellow-500 mb-2" size={40} />
                <CardTitle className="text-xl">Несоответствие параметрам</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-bold text-yellow-500 text-2xl">Аварии</p>
                <p className="text-sm text-muted-foreground">
                  Неправильный подбор приводит к перегреву в пиковых нагрузках
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/50 hover:border-secondary transition-colors">
              <CardHeader>
                <Icon name="Timer" className="text-secondary mb-2" size={40} />
                <CardTitle className="text-xl">Долгие сроки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-bold text-secondary text-2xl">3-4 недели</p>
                <p className="text-sm text-muted-foreground">
                  У конкурентов. Мы изготавливаем за 5-7 дней, экспресс - 72 часа
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="FileText" size={18} />
              Получить технический расчет
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-2">В наличии</Badge>
            <h2 className="text-4xl font-bold mb-4">Типовые радиаторы для популярных ДГУ</h2>
            <p className="text-xl text-muted-foreground">
              Отгрузка в день оплаты • Все радиаторы протестированы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {radiatorProducts.map((product, index) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Icon name="Cpu" className="text-primary" size={40} />
                    {product.inStock ? (
                      <Badge className="bg-green-500 hover:bg-green-600">В наличии</Badge>
                    ) : (
                      <Badge variant="outline">Под заказ 7 дней</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.models}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Мощность:</span>
                      <span className="font-medium">{product.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Материал:</span>
                      <span className="font-medium">{product.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Размеры:</span>
                      <span className="font-medium text-xs">{product.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Вес:</span>
                      <span className="font-medium">{product.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Давление:</span>
                      <span className="font-medium">{product.pressure}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">от</p>
                      <p className="text-2xl font-bold text-primary">{product.price}</p>
                    </div>
                    <Button>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Icon name="Search" className="text-primary" size={60} />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Не нашли вашу модель?</h3>
                  <p className="text-muted-foreground">
                    Изготовим радиатор индивидуально под параметры вашей ДГУ за 5-7 дней
                  </p>
                </div>
                <Button size="lg" className="gap-2">
                  <Icon name="Send" size={18} />
                  Получить расчет
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-card metal-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Почему наши радиаторы служат в 3-5 раз дольше?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Технические преимущества, подтвержденные испытаниями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <Icon name={advantage.icon as any} className="text-primary mb-4" size={48} />
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-destructive/10 border-destructive/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="AlertCircle" className="text-destructive mt-1" size={32} />
                <div>
                  <h4 className="font-bold text-lg mb-2">⚠️ ВАЖНО</h4>
                  <p className="text-muted-foreground">
                    Мы изготавливаем радиаторы строго под параметры вашей ДГУ. Универсальных решений не существует - 
                    каждый двигатель требует индивидуального расчета теплообмена.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-2">Производство</Badge>
            <h2 className="text-4xl font-bold mb-4">Собственное производство в Москве</h2>
            <p className="text-xl text-muted-foreground">
              Приезжайте на экскурсию - покажем процесс изготовления
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <img 
                src="https://cdn.poehali.dev/projects/b65d17a5-850d-4bf4-8fef-5ef07d385c4d/files/77cd5caf-ee65-487f-97ff-7a0a1065651d.jpg"
                alt="Производство радиаторов"
                className="w-full rounded-lg shadow-2xl industrial-border"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://cdn.poehali.dev/projects/b65d17a5-850d-4bf4-8fef-5ef07d385c4d/files/8393636c-51b8-442e-af6d-ed7b39363a3e.jpg"
                  alt="Радиатор крупным планом"
                  className="w-full rounded-lg shadow-lg"
                />
                <img 
                  src="https://cdn.poehali.dev/projects/b65d17a5-850d-4bf4-8fef-5ef07d385c4d/files/d4258508-dc93-4fb8-a83b-f73a8de621fb.jpg"
                  alt="ДГУ с радиатором"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Цифры и факты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Factory" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-bold">Площадь производства: 800 м²</p>
                      <p className="text-sm text-muted-foreground">Полный цикл изготовления</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <Icon name="Users" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-bold">В штате: 15 человек</p>
                      <p className="text-sm text-muted-foreground">4 инженера, 11 рабочих</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <Icon name="TrendingUp" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-bold">Производительность: до 120 радиаторов/месяц</p>
                      <p className="text-sm text-muted-foreground">С контролем качества каждого изделия</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <Icon name="Award" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-bold">Работаем с 2015 года</p>
                      <p className="text-sm text-muted-foreground">Изготовлено: 2800+ радиаторов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-primary" size={28} />
                    <div>
                      <h4 className="font-bold text-lg mb-2">📍 Адрес производства</h4>
                      <p className="mb-3">Москва, ул. Промышленная, д.12</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="gap-2">
                          <Icon name="Calendar" size={16} />
                          Записаться на экскурсию
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <Icon name="Video" size={16} />
                          Виртуальная экскурсия
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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

      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform">
          <Icon name="MessageCircle" size={28} />
        </Button>
      </div>
    </div>
  );
};

export default Index;
