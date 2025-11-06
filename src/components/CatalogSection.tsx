import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

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

const CatalogSection = () => {
  return (
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
  );
};

export default CatalogSection;
