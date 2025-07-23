import Icon from "@/components/ui/icon";
import FormField from "./FormField";

interface CargoSectionProps {
  formData: {
    cargoType: string;
    cargoQuantity: string;
    cargoWeight: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const CargoSection = ({ formData, onInputChange }: CargoSectionProps) => {
  const cargoOptions = [
    { value: "furniture", label: "🪑 Мебель" },
    { value: "appliances", label: "📺 Бытовая техника" },
    { value: "construction", label: "🧱 Стройматериалы" },
    { value: "food", label: "🍕 Продукты питания" },
    { value: "documents", label: "📄 Документы" },
    { value: "equipment", label: "⚙️ Оборудование" },
    { value: "personal", label: "👕 Личные вещи" },
    { value: "other", label: "📦 Другое" }
  ];

  return (
    <div className="space-y-6 p-6 bg-muted/30 rounded-2xl border border-border/50">
      <h3 className="text-xl font-bold text-foreground flex items-center gap-2 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
        <Icon name="Package" size={20} className="text-primary" />
        Информация о грузе
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        <FormField
          id="cargoType"
          label="Тип груза"
          type="select"
          value={formData.cargoType}
          onChange={(value) => onInputChange("cargoType", value)}
          placeholder="Выберите тип"
          options={cargoOptions}
          className=""
          style={{ animationDelay: '700ms' }}
        />

        <FormField
          id="cargoQuantity"
          label="Количество"
          type="text"
          placeholder="5 коробок, 1 диван..."
          value={formData.cargoQuantity}
          onChange={(value) => onInputChange("cargoQuantity", value)}
          className=""
          style={{ animationDelay: '800ms' }}
        />

        <FormField
          id="cargoWeight"
          label="Вес (кг)"
          type="number"
          placeholder="Примерный вес"
          value={formData.cargoWeight}
          onChange={(value) => onInputChange("cargoWeight", value)}
          className=""
          style={{ animationDelay: '900ms' }}
        />
      </div>
    </div>
  );
};

export default CargoSection;