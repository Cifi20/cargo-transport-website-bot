import Icon from "@/components/ui/icon";
import { Label } from "@/components/ui/label";

interface TruckType {
  value: string;
  label: string;
  price: string;
  icon: string;
}

interface TruckTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const TruckTypeSelector = ({ value, onChange }: TruckTypeSelectorProps) => {
  const truckTypes: TruckType[] = [
    { value: "0.5", label: "🚐 Каблук 0.5т", price: "от 800₽/час", icon: "🚐" },
    { value: "1.5", label: "🚚 Газель 1.5т", price: "от 1200₽/час", icon: "🚚" },
    { value: "3", label: "🚛 Грузовик 3т", price: "от 1800₽/час", icon: "🚛" },
    { value: "5", label: "🚜 Грузовик 5т", price: "от 2500₽/час", icon: "🚜" },
    { value: "10", label: "🚛 Грузовик 10т", price: "от 3500₽/час", icon: "🚛" },
    { value: "20", label: "🚚 Фура 20т", price: "от 4500₽/час", icon: "🚚" }
  ];

  return (
    <div className="group animate-fadeInUp" style={{ animationDelay: '200ms' }}>
      <Label htmlFor="car-type" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
        <Icon name="Truck" size={16} className="inline mr-2" />
        Тип автомобиля
      </Label>
      <div className="grid md:grid-cols-2 gap-4">
        {truckTypes.map((truck, index) => (
          <div
            key={truck.value}
            className={`relative p-4 border rounded-xl cursor-pointer transition-all duration-500 hover:scale-105 group/truck ${
              value === truck.value
                ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20'
                : 'border-border hover:border-primary/50 hover:bg-muted/30'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => onChange(truck.value)}
          >
            <input
              type="radio"
              name="truckType"
              value={truck.value}
              checked={value === truck.value}
              onChange={() => onChange(truck.value)}
              className="sr-only"
            />
            <div className="flex items-center space-x-3">
              <span className="text-2xl group-hover/truck:scale-110 transition-transform duration-300">
                {truck.icon}
              </span>
              <div>
                <div className="font-medium text-foreground group-hover/truck:text-primary transition-colors duration-300">
                  {truck.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {truck.price}
                </div>
              </div>
            </div>
            {value === truck.value && (
              <Icon name="CheckCircle" size={20} className="absolute top-2 right-2 text-primary animate-bounce-gentle" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TruckTypeSelector;