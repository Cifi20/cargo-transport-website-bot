import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const PricingTariffs = () => {
  const [activeCategory, setActiveCategory] = useState("transport");

  // Точные тарифы как у Грузовичкоф
  const transportTariffs = [
    {
      type: "Каблук до 0.5т",
      emoji: "🚐",
      image: "https://cdn.poehali.dev/files/ce94cf7c-93f8-4c21-8882-65a545426e61.png",
      capacity: "до 500 кг",
      dimensions: "1.8×1.2×1.1 м",
      price: "от 800₽/час",
      minOrder: "мин. заказ 2 часа",
      features: ["Городские перевозки", "Документы", "Посылки"],
      popular: false
    },
    {
      type: "Газель до 1.5т",
      emoji: "🚚",
      image: "https://cdn.poehali.dev/files/3154aed1-c34a-4684-9c75-92efc45a4b6d.png",
      capacity: "до 1500 кг",
      dimensions: "3×2×1.8 м",
      price: "от 1200₽/час",
      minOrder: "мин. заказ 2 часа",
      features: ["Мебель", "Бытовая техника", "Переезды"],
      popular: true
    },
    {
      type: "Грузовик до 3т",
      emoji: "🚛",
      image: "https://cdn.poehali.dev/files/cc586858-9ba2-45c2-bdc9-e39e20428cd0.png",
      capacity: "до 3000 кг",
      dimensions: "4.2×2.1×2.1 м",
      price: "от 1800₽/час",
      minOrder: "мин. заказ 3 часа",
      features: ["Стройматериалы", "Крупногабарит", "Паллеты"],
      popular: false
    },
    {
      type: "Грузовик до 5т",
      emoji: "🚜",
      image: "https://cdn.poehali.dev/files/d902f8b5-77ac-4fc5-91b0-508fff21e96c.png",
      capacity: "до 5000 кг",
      dimensions: "6×2.4×2.3 м",
      price: "от 2500₽/час",
      minOrder: "мин. заказ 3 часа",
      features: ["Оборудование", "Промышленные грузы", "Длинномеры"],
      popular: false
    },
    {
      type: "Грузовик до 10т",
      emoji: "🚛",
      image: "https://cdn.poehali.dev/files/077b809c-4af2-4b49-a707-d6a283a921aa.png",
      capacity: "до 10000 кг",
      dimensions: "8×2.4×2.5 м",
      price: "от 3500₽/час",
      minOrder: "мин. заказ 4 часа",
      features: ["Тяжелые грузы", "Манипулятор", "Гидроборт"],
      popular: false
    },
    {
      type: "Фура до 20т",
      emoji: "🚚",
      image: "https://cdn.poehali.dev/files/077b809c-4af2-4b49-a707-d6a283a921aa.png",
      capacity: "до 20000 кг",
      dimensions: "13.6×2.45×2.7 м",
      price: "от 4500₽/час",
      minOrder: "мин. заказ 4 часа",
      features: ["Межгород", "Большие объемы", "Европаллеты"],
      popular: false
    }
  ];

  const additionalServices = [
    {
      service: "Грузчики",
      emoji: "💪",
      price: "500₽/час за человека",
      description: "Опытные грузчики",
      features: ["Подъем на этаж", "Упаковка", "Разборка/сборка мебели"]
    },
    {
      service: "Гидроборт",
      emoji: "⬆️",
      price: "+300₽/час к тарифу",
      description: "Механизированная погрузка",
      features: ["До 1.5 тонн", "Паллеты", "Тяжелые грузы"]
    },
    {
      service: "Рокла (тележка)",
      emoji: "🛒",
      price: "+200₽/час к тарифу",
      description: "Перемещение паллет",
      features: ["Складские работы", "Паллеты", "Тяжелые коробки"]
    },
    {
      service: "Упаковка",
      emoji: "📦",
      price: "от 50₽ за предмет",
      description: "Защитная упаковка груза",
      features: ["Пленка", "Картон", "Пузырчатая пленка"]
    },
    {
      service: "Подъем на этаж",
      emoji: "🏢",
      price: "+100₽ за этаж",
      description: "Без лифта",
      features: ["До 5 этажа", "Осторожная переноска", "Страховка"]
    },
    {
      service: "Экспресс подача",
      emoji: "⚡",
      price: "+500₽ к заказу",
      description: "Подача за 30 минут",
      features: ["Срочные заказы", "24/7", "Приоритет"]
    }
  ];

  const regionTariffs = [
    {
      direction: "Москва → Подмосковье",
      emoji: "🗺️",
      distance: "до 50 км",
      price: "от 35₽/км",
      features: ["Туда-обратно", "Ожидание включено", "Любой тоннаж"]
    },
    {
      direction: "Межгород по России",
      emoji: "🚗",
      distance: "от 100 км",
      price: "от 25₽/км",
      features: ["Предоплата 50%", "Возврат порожняком", "Документы"]
    },
    {
      direction: "СНГ и дальнее зарубежье",
      emoji: "🌍",
      distance: "международные",
      price: "по договоренности",
      features: ["Таможня", "Страхование", "Сопровождение"]
    }
  ];

  const categories = [
    { id: "transport", label: "Транспорт", icon: "Truck" },
    { id: "services", label: "Услуги", icon: "Settings" },
    { id: "regions", label: "Межгород", icon: "MapPin" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      
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
        )}

        {/* Дополнительные услуги */}
        {activeCategory === "services" && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 animate-fadeInUp">
            {additionalServices.map((service, index) => (
              <div
                key={index}
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

                  <Button variant="outline" className="w-full group/btn border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
                    <span className="flex items-center justify-center gap-2 group-hover/btn:scale-105 transition-transform duration-300">
                      <Icon name="Plus" size={16} className="group-hover/btn:rotate-90 transition-transform duration-300" />
                      Добавить к заказу
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Межгородные тарифы */}
        {activeCategory === "regions" && (
          <div className="grid lg:grid-cols-3 gap-8 animate-fadeInUp">
            {regionTariffs.map((region, index) => (
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
                  
                  <div className="text-muted-foreground mb-6">
                    {region.distance}
                  </div>

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
        )}

        {/* Нижний блок с гарантиями */}
        <div className="mt-20 bg-gradient-to-r from-primary via-blue-600 to-accent rounded-3xl p-12 text-white text-center relative overflow-hidden animate-fadeInUp">
          
          {/* Декоративные элементы */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full animate-float blur-2xl"></div>
          <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-accent/30 rounded-full animate-pulse-soft blur-xl"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl animate-bounce-gentle">
                <Icon name="Shield" size={40} className="text-white" />
              </div>
            </div>
            
            <h3 className="text-4xl font-bold mb-6">
              Гарантии качества
            </h3>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Фиксированные цены без доплат. Страхование груза до 1 млн рублей. 
              Опытные водители и грузчики со стажем от 5 лет.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                { icon: "DollarSign", title: "Без доплат", desc: "Цена не изменится" },
                { icon: "Shield", title: "Страхование", desc: "До 1 млн рублей" },
                { icon: "Clock", title: "Точно в срок", desc: "Гарантия времени" }
              ].map((guarantee, idx) => (
                <div key={idx} className="text-center group" style={{ animationDelay: `${idx * 200}ms` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon name={guarantee.icon} size={24} className="text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:scale-105 transition-transform duration-300">
                    {guarantee.title}
                  </h4>
                  <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                    {guarantee.desc}
                  </p>
                </div>
              ))}
            </div>
            
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-12 py-4 group">
              <span className="flex items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-300">
                <Icon name="Calculator" size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Рассчитать стоимость
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTariffs;