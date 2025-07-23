import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface TariffType {
  type: string;
  emoji: string;
  image: string;
  capacity: string;
  dimensions: string;
  price: string;
  minOrder: string;
  features: string[];
  popular: boolean;
}

interface TransportGridProps {
  tariffs: TariffType[];
}

const TransportGrid = ({ tariffs }: TransportGridProps) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 animate-fadeInUp">
      {tariffs.map((tariff, index) => (
        <div
          key={index}
          className={`group relative bg-card border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 overflow-hidden ${
            tariff.popular 
              ? 'border-primary shadow-primary/20 ring-2 ring-primary/20' 
              : 'border-border hover:border-primary/50'
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          
          {/* Популярный значок */}
          {tariff.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold animate-bounce-gentle">
                🔥 ПОПУЛЯРНЫЙ
              </div>
            </div>
          )}

          {/* Анимированный градиент-фон */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10">
            
            {/* Заголовок */}
            <div className="text-center mb-6">
              {tariff.image ? (
                <div className="mb-4 relative overflow-hidden rounded-2xl bg-muted/30">
                  <img 
                    src={tariff.image}
                    alt={tariff.type}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ) : (
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tariff.emoji}
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {tariff.type}
              </h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>{tariff.capacity}</div>
                <div>{tariff.dimensions}</div>
              </div>
            </div>

            {/* Цена */}
            <div className="text-center mb-6 p-6 bg-muted/30 rounded-2xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {tariff.price}
              </div>
              <div className="text-sm text-muted-foreground">
                {tariff.minOrder}
              </div>
            </div>

            {/* Особенности */}
            <div className="space-y-3 mb-8">
              {tariff.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 group/feature">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                  <span className="text-foreground group-hover/feature:text-primary transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Кнопка */}
            <Button 
              className={`w-full group/btn relative overflow-hidden ${
                tariff.popular
                  ? 'bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/30'
                  : 'bg-primary hover:bg-primary/90'
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:scale-105 transition-transform duration-300">
                <Icon name="ShoppingCart" size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                Заказать
              </span>
              {!tariff.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
              )}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransportGrid;