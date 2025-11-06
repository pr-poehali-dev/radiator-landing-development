import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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

const AdvantagesSection = () => {
  return (
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
  );
};

export default AdvantagesSection;
