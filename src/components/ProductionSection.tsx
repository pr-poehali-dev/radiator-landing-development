import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const ProductionSection = () => {
  return (
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
  );
};

export default ProductionSection;
