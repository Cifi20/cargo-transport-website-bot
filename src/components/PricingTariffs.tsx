import { useState } from "react";
import Icon from "@/components/ui/icon";
import TransportTariffCard from "./PricingTariffs/TransportTariffCard";
import ServiceCard from "./PricingTariffs/ServiceCard";
import RegionTariffCard from "./PricingTariffs/RegionTariffCard";
import SingleTariffView from "./PricingTariffs/SingleTariffView";
import { 
  transportTariffs, 
  additionalServices, 
  regionTariffs, 
  categories 
} from "./PricingTariffs/TariffData";

const PricingTariffs = () => {
  const [activeCategory, setActiveCategory] = useState("transport");

  const scrollToOrderForm = () => {
    const element = document.querySelector('#order-form');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tariffs" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      
      {/* Анимированный фон */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-48 h-48 bg-primary rounded-full animate-pulse-soft blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent rounded-full animate-float blur-2xl"></div>
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-green-500 rounded-full animate-bounce-gentle blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fadeInUp">
            <Icon name="Calculator" size={20} className="animate-bounce-gentle" />
            Наши тарифы
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fadeInUp">
            Цены на грузоперевозки
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp">
            Прозрачные тарифы без скрытых доплат. Точная стоимость за 2 минуты
          </p>
        </div>

        {/* Категории */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted/50 p-2 rounded-2xl border border-border/50 backdrop-blur-sm">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-500 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted/80'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon 
                  name={category.icon} 
                  size={20} 
                  className={`transition-transform duration-300 ${
                    activeCategory === category.id ? 'scale-110' : 'group-hover:scale-110'
                  }`} 
                />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Тарифы на транспорт */}
        {activeCategory === "transport" && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 animate-fadeInUp">
            {transportTariffs.map((tariff, index) => (
              <TransportTariffCard
                key={index}
                tariff={tariff}
                index={index}
                onOrder={scrollToOrderForm}
              />
            ))}
          </div>
        )}

        {/* Газель до 2т */}
        {activeCategory === "gazel-2t" && (
          <SingleTariffView
            tariff={transportTariffs.filter(tariff => tariff.type.includes("1.5т"))[0]}
            onOrder={scrollToOrderForm}
            buttonText="Заказать Газель 1.5т"
          />
        )}

        {/* Грузовик до 3т */}
        {activeCategory === "truck-3t" && (
          <SingleTariffView
            tariff={transportTariffs.filter(tariff => tariff.type.includes("3т"))[0]}
            onOrder={scrollToOrderForm}
            buttonText="Заказать Грузовик 3т"
          />
        )}

        {/* Грузовик до 5т */}
        {activeCategory === "truck-5t" && (
          <SingleTariffView
            tariff={transportTariffs.filter(tariff => tariff.type.includes("5т"))[0]}
            onOrder={scrollToOrderForm}
            buttonText="Заказать Грузовик 5т"
          />
        )}

        {/* Дополнительные услуги */}
        {activeCategory === "services" && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 animate-fadeInUp">
            {additionalServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                onAddToOrder={scrollToOrderForm}
              />
            ))}
          </div>
        )}

        {/* Межгородные тарифы */}
        {activeCategory === "regions" && (
          <div className="grid lg:grid-cols-3 gap-8 animate-fadeInUp">
            {regionTariffs.map((region, index) => (
              <RegionTariffCard
                key={index}
                region={region}
                index={index}
                onCalculateRoute={scrollToOrderForm}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default PricingTariffs;