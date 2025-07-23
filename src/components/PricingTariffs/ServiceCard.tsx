import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface AdditionalService {
  service: string;
  emoji: string;
  price: string;
  description: string;
  features: string[];
}

interface ServiceCardProps {
  service: AdditionalService;
  index: number;
  onAddToOrder: () => void;
}

const ServiceCard = ({ service, index, onAddToOrder }: ServiceCardProps) => {
  return (
    <div
      className="group bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 relative overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      
      {/* Анимированный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="relative z-10">
        <div className="text-center mb-6">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {service.emoji}
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {service.service}
          </h3>
          <p className="text-sm text-muted-foreground">
            {service.description}
          </p>
        </div>

        <div className="text-center mb-6 p-4 bg-muted/30 rounded-xl border border-border/50">
          <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
            {service.price}
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-3 group/feature">
              <div className="w-2 h-2 bg-accent rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
              <span className="text-sm text-foreground group-hover/feature:text-primary transition-colors duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <Button 
          onClick={onAddToOrder}
          variant="outline" 
          className="w-full group/btn border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
        >
          <span className="flex items-center justify-center gap-2 group-hover/btn:scale-105 transition-transform duration-300">
            <Icon name="Plus" size={16} className="group-hover/btn:rotate-90 transition-transform duration-300" />
            Добавить к заказу
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;