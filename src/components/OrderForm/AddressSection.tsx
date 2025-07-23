import Icon from "@/components/ui/icon";
import FormField from "./FormField";

interface AddressSectionProps {
  formData: {
    loadingAddress: string;
    unloadingAddress: string;
    loadingFloor: string;
    unloadingFloor: string;
  };
  onInputChange: (field: string, value: string) => void;
  focusedField: string | null;
  setFocusedField: (field: string | null) => void;
}

const AddressSection = ({ 
  formData, 
  onInputChange, 
  focusedField, 
  setFocusedField 
}: AddressSectionProps) => {
  const floorOptions = [
    { value: "ground", label: "🏢 1 этаж / Земля" },
    { value: "elevator", label: "🛗 Высокий этаж + лифт" },
    { value: "stairs-2", label: "🚶‍♂️ 2 этаж без лифта" },
    { value: "stairs-3", label: "🚶‍♂️ 3 этаж без лифта" },
    { value: "stairs-4", label: "🚶‍♂️ 4 этаж без лифта" },
    { value: "stairs-5plus", label: "🏃‍♂️ 5+ этаж без лифта" }
  ];

  return (
    <div className="space-y-6 p-6 bg-muted/30 rounded-2xl border border-border/50">
      <h3 className="text-xl font-bold text-foreground flex items-center gap-2 animate-fadeInUp" style={{ animationDelay: '1000ms' }}>
        <Icon name="MapPin" size={20} className="text-primary" />
        Адреса и этажность
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="group animate-fadeInUp" style={{ animationDelay: '1100ms' }}>
            <FormField
              id="loadingAddress"
              label="Адрес загрузки"
              icon="MapPin"
              iconColor="text-green-500"
              type="text"
              placeholder="Улица, дом, квартира/офис"
              value={formData.loadingAddress}
              onChange={(value) => onInputChange("loadingAddress", value)}
              onFocus={() => setFocusedField("loadingAddress")}
              onBlur={() => setFocusedField(null)}
              focusedField={focusedField}
              className="hover:border-green-500/50 focus:border-green-500"
            />
          </div>

          <div className="group animate-fadeInUp" style={{ animationDelay: '1200ms' }}>
            <FormField
              id="loadingFloor"
              label="Этаж загрузки / Лифт"
              type="select"
              value={formData.loadingFloor}
              onChange={(value) => onInputChange("loadingFloor", value)}
              placeholder="Условия загрузки"
              options={floorOptions}
              className="hover:border-green-500/50"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="group animate-fadeInUp" style={{ animationDelay: '1300ms' }}>
            <FormField
              id="unloadingAddress"
              label="Адрес выгрузки"
              icon="MapPin"
              iconColor="text-red-500"
              type="text"
              placeholder="Улица, дом, квартира/офис"
              value={formData.unloadingAddress}
              onChange={(value) => onInputChange("unloadingAddress", value)}
              onFocus={() => setFocusedField("unloadingAddress")}
              onBlur={() => setFocusedField(null)}
              focusedField={focusedField}
              className="hover:border-red-500/50 focus:border-red-500"
            />
          </div>

          <div className="group animate-fadeInUp" style={{ animationDelay: '1400ms' }}>
            <FormField
              id="unloadingFloor"
              label="Этаж выгрузки / Лифт"
              type="select"
              value={formData.unloadingFloor}
              onChange={(value) => onInputChange("unloadingFloor", value)}
              placeholder="Условия выгрузки"
              options={floorOptions}
              className="hover:border-red-500/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;