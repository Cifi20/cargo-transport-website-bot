import { Users, Package, Wrench, Truck, Building, ArrowUp, Clock, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";

const LoaderServices = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const services = [
    {
      icon: Users,
      service: "Грузчики (стандартные работы)",
      price: "800 ₽/час",
      minTime: "4 часа",
      note: "Погрузка/разгрузка, перемещение",
      features: ["Быстрая работа", "Опыт 5+ лет", "Страховка"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Wrench,
      service: "Грузчики (такелажные работы)",
      price: "1100 ₽/час",
      minTime: "4 часа",
      note: "Перемещение тяжелых предметов",
      features: ["Спецоборудование", "Профи", "Безопасность"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Package,
      service: "Упаковка вещей",
      price: "+1000 ₽",
      minTime: "—",
      note: "Упаковка вещей, мебели",
      features: ["Качественно", "Материалы в цене", "Аккуратно"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Building,
      service: "Сборщик мебели",
      price: "800 ₽/час",
      minTime: "4 часа",
      note: "Разборка/сборка мебели",
      features: ["Свой инструмент", "Любая сложность", "Гарантия"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Truck,
      service: "Наличие роклы",
      price: "+1ч к стоимости",
      minTime: "—",
      note: "Транспортировка тяжелых грузов",
      features: ["До 2 тонн", "Маневренность", "Экономия сил"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: ArrowUp,
      service: "Поэтажка",
      price: "от 50 ₽ за 1 ед.",
      minTime: "—",
      note: "Подъем/спуск груза по этажам",
      features: ["Любой этаж", "Осторожно", "Быстро"],
      color: "from-indigo-500 to-indigo-600"
    },
  ];

  return (
    <section id="loader-services" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInUp">
            <Users className="w-4 h-4" />
            Профессиональные услуги
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-6 animate-fadeInUp">
            Услуги грузчиков
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp">
            Команда опытных грузчиков поможет с любыми задачами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-card border border-border rounded-xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                  activeCard === index ? 'scale-105 shadow-2xl' : ''
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Градиентный фон при hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                
                {/* Иконка */}
                <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Заголовок */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.service}
                </h3>

                {/* Цена */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  {service.minTime !== "—" && (
                    <span className="text-sm text-muted-foreground">/ {service.minTime}</span>
                  )}
                </div>

                {/* Описание */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.note}
                </p>

                {/* Особенности */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Кнопка */}
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 group-hover:shadow-lg">
                  Заказать услугу
                </button>

                {/* Анимированная граница */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            );
          })}
        </div>

        {/* Дополнительная информация */}
        <div className="bg-card border border-border rounded-2xl p-8 animate-fadeInUp">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Быстрый отклик</h3>
              <p className="text-muted-foreground">Подача грузчиков от 30 минут</p>
            </div>
            
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Страхование</h3>
              <p className="text-muted-foreground">Полная страховка груза и работ</p>
            </div>
            
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">100% выполнение в срок</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoaderServices;