import Icon from "@/components/ui/icon";
import { Label } from "@/components/ui/label";

interface TruckType {
  value: string;
  label: string;
  price: string;
  image: string;
  capacity: string;
  dimensions: string;
  features: string[];
  popular?: boolean;
}

interface TruckTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const TruckTypeSelector = ({ value, onChange }: TruckTypeSelectorProps) => {
  const truckTypes: TruckType[] = [
    { 
      value: "0.5", 
      label: "Каблук 0.5т", 
      price: "от 800₽/час", 
      image: "/img/2f82fa3f-4083-4810-b234-eaf4df60352c.jpg",
      capacity: "до 500 кг",
      dimensions: "1.8×1.2×1.1 м",
      features: ["Городские перевозки", "Документы", "Посылки"]
    },
    { 
      value: "1.5", 
      label: "Газель 1.5т", 
      price: "от 1200₽/час", 
      image: "/img/c0d81bbb-9131-49cb-b05f-4530a83ccc1d.jpg",
      capacity: "до 1500 кг",
      dimensions: "3×2×1.8 м",
      features: ["Мебель", "Бытовая техника", "Переезды"],
      popular: true
    },
    { 
      value: "3", 
      label: "Грузовик 3т", 
      price: "от 1800₽/час", 
      image: "/img/babe616a-a200-47f6-8738-efa475110a8b.jpg",
      capacity: "до 3000 кг",
      dimensions: "4.2×2.1×2.1 м",
      features: ["Стройматериалы", "Крупногабарит", "Паллеты"]
    },
    { 
      value: "5", 
      label: "Грузовик 5т", 
      price: "от 2500₽/час", 
      image: "/img/1999f069-5544-4789-8bf4-91e3e1f2c170.jpg",
      capacity: "до 5000 кг",
      dimensions: "6×2.4×2.3 м",
      features: ["Оборудование", "Промышленные грузы", "Длинномеры"]
    },
    { 
      value: "10", 
      label: "Грузовик 10т", 
      price: "от 3500₽/час", 
      image: "/img/f07c2a48-0dd9-4671-b8c9-48d845bbd37f.jpg",
      capacity: "до 10000 кг",
      dimensions: "8×2.4×2.5 м",
      features: ["Тяжелые грузы", "Манипулятор", "Гидроборт"]
    },
    { 
      value: "20", 
      label: "Фура 20т", 
      price: "от 4500₽/час", 
      image: "/img/2a538d0e-ff69-4af4-98fd-fe27dc465958.jpg",
      capacity: "до 20000 кг",
      dimensions: "13.6×2.45×2.7 м",
      features: ["Межгород", "Большие объемы", "Европаллеты"]
    }
  ];

  return (
    <div className="col-span-2">
      <Label className="text-foreground font-medium mb-4 block group-hover:text-primary transition-colors duration-300">
        <Icon name="Truck" size={16} className="inline mr-2" />
        Тип автомобиля
      </Label>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {truckTypes.map((truck, index) => (
          <div
            key={truck.value}
            className={`group relative bg-card border rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 cursor-pointer overflow-hidden ${
              value === truck.value
                ? 'border-primary shadow-primary/20 ring-2 ring-primary/20' 
                : 'border-border hover:border-primary/50'
            } ${truck.popular ? 'ring-2 ring-orange-500/20' : ''}`}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => onChange(truck.value)}
          >
            
            {/* Популярный значок */}
            {truck.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-xs font-bold animate-bounce-gentle">
                  🔥 ПОПУЛЯРНЫЙ
                </div>
              </div>
            )}

            {/* Анимированный градиент-фон */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Скрытый радио */}
            <input
              type="radio"
              name="truckType"
              value={truck.value}
              checked={value === truck.value}
              onChange={() => onChange(truck.value)}
              className="sr-only"
            />

            <div className="relative z-10">
              
              {/* Изображение */}
              <div className="mb-4 relative overflow-hidden rounded-2xl bg-muted/30">
                <img 
                  src={truck.image}
                  alt={truck.label}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Заголовок */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {truck.label}
                </h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>{truck.capacity}</div>
                  <div>{truck.dimensions}</div>
                </div>
              </div>

              {/* Цена */}
              <div className="text-center mb-4 p-4 bg-muted/30 rounded-xl border border-border/50">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {truck.price}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  мин. заказ 2 часа
                </div>
              </div>

              {/* Особенности */}
              <div className="space-y-2 mb-4">
                {truck.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 group/feature">
                    <div className="w-2 h-2 bg-primary rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                    <span className="text-sm text-foreground group-hover/feature:text-primary transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Выбран */}
              {value === truck.value && (
                <div className="absolute top-3 right-3 z-20">
                  <Icon name="CheckCircle" size={24} className="text-primary animate-bounce-gentle" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TruckTypeSelector;