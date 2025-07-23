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
      price: "1000₽/час", 
      image: "https://cdn.poehali.dev/files/ce94cf7c-93f8-4c21-8882-65a545426e61.png",
      capacity: "до 500 кг",
      dimensions: "1.8×1.2×1.1 м",
      features: ["Городские перевозки", "Документы", "Посылки"]
    },
    { 
      value: "1.5", 
      label: "Газель 1.5т", 
      price: "1200-1400₽/час", 
      image: "https://cdn.poehali.dev/files/3154aed1-c34a-4684-9c75-92efc45a4b6d.png",
      capacity: "до 1500 кг",
      dimensions: "3-4×2×1.8 м",
      features: ["Мебель", "Бытовая техника", "Переезды"],
      popular: true
    },
    { 
      value: "3", 
      label: "Грузовик 3т", 
      price: "1350-1500₽/час", 
      image: "https://cdn.poehali.dev/files/cc586858-9ba2-45c2-bdc9-e39e20428cd0.png",
      capacity: "до 3000 кг",
      dimensions: "4.2×2.1×2.1 м",
      features: ["Стройматериалы", "Крупногабарит", "Паллеты"]
    },
    { 
      value: "5", 
      label: "Грузовик 5т", 
      price: "1550-1650₽/час", 
      image: "https://cdn.poehali.dev/files/d902f8b5-77ac-4fc5-91b0-508fff21e96c.png",
      capacity: "до 5000 кг",
      dimensions: "6×2.4×2.3 м",
      features: ["Оборудование", "Промышленные грузы", "Длинномеры"]
    },
    { 
      value: "10", 
      label: "Грузовик 10т", 
      price: "1750₽/час", 
      image: "https://cdn.poehali.dev/files/077b809c-4af2-4b49-a707-d6a283a921aa.png",
      capacity: "до 10000 кг",
      dimensions: "8×2.4×2.5 м",
      features: ["Тяжелые грузы", "Манипулятор", "Гидроборт"]
    },
    { 
      value: "20", 
      label: "Фура 20т", 
      price: "2650₽/час", 
      image: "https://cdn.poehali.dev/files/ef37edc2-ecb4-4230-86a4-86e8e818582d.png",
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
                  {truck.value === "0.5" && "мин. заказ 4 часа"}
                  {truck.value === "1.5" && "мин. заказ 4 часа"}
                  {truck.value === "3" && "мин. заказ 5-6 часов"}
                  {truck.value === "5" && "мин. заказ 7 часов"}
                  {truck.value === "10" && "мин. заказ 7 часов"}
                  {truck.value === "20" && "мин. заказ 7 часов"}
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