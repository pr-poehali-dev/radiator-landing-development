import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProblemsSection = () => {
  return (
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
  );
};

export default ProblemsSection;
