import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface TransportTariff {
  type: string;
  emoji: string;
  image?: string;
  capacity: string;
  dimensions: string;
  price: string;
  minOrder: string;
  features: string[];
  popular: boolean;
}

interface SingleTariffViewProps {
  tariff: TransportTariff;
  onOrder: () => void;
  buttonText: string;
}

const SingleTariffView = ({ tariff, onOrder, buttonText }: SingleTariffViewProps) => {
  return (
    <div className="max-w-2xl mx-auto animate-fadeInUp">
      <div className="group relative bg-card border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 overflow-hidden border-primary shadow-primary/20 ring-2 ring-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="relative z-10 text-center">
          <div className="mb-6">
            <img 
              src={tariff.image}
              alt={tariff.type}
              className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-700"
            />
            <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {tariff.type}
            </h3>
            <div className="text-muted-foreground space-y-1">
              <div className="text-lg">{tariff.capacity}</div>
              <div className="text-lg">{tariff.dimensions}</div>
            </div>
          </div>

          <div className="mb-8 p-6 bg-muted/30 rounded-2xl border border-border/50">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              {tariff.price}
            </div>
            <div className="text-muted-foreground">
              {tariff.minOrder}
            </div>
          </div>

          <Button className="w-full h-16 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/30 group/btn text-lg">
            <span className="flex items-center justify-center gap-3 group-hover/btn:scale-105 transition-transform duration-300">
              <Icon name="ShoppingCart" size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
              {buttonText}
              <Icon name="ArrowRight" size={20} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleTariffView;