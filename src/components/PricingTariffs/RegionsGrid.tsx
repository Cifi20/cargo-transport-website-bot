import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface RegionType {
  direction: string;
  emoji: string;
  distance: string;
  price: string;
  features: string[];
}

interface RegionsGridProps {
  regions: RegionType[];
}

const RegionsGrid = ({ regions }: RegionsGridProps) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 animate-fadeInUp">
      {regions.map((region, index) => (
        <div
          key={index}
          className="group bg-card border border-border rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 relative overflow-hidden"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10 text-center">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {region.emoji}
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
              {region.direction}
            </h3>
            
            {region.distance && (
              <div className="text-muted-foreground mb-6">
                {region.distance}
              </div>
            )}

            <div className="p-6 bg-muted/30 rounded-2xl border border-border/50 mb-8">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                {region.price}
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {region.features.map((feature, idx) => (
                <div key={idx} className="flex items-center justify-center space-x-3 group/feature">
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                  <span className="text-foreground group-hover/feature:text-primary transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/30 group/btn">
              <span className="flex items-center justify-center gap-2 group-hover/btn:scale-105 transition-transform duration-300">
                <Icon name="MapPin" size={16} className="group-hover/btn:bounce transition-all duration-300" />
                Рассчитать маршрут
              </span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegionsGrid;