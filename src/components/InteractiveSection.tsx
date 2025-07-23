import { useState, useEffect } from "react";
import { Star, Users, Clock, Shield } from "lucide-react";

const InteractiveSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [counters, setCounters] = useState({
    clients: 0,
    orders: 0,
    years: 0,
    rating: 0,
  });

  const features = [
    {
      icon: Star,
      title: "Высокое качество",
      description: "Безупречный сервис с рейтингом 4.9/5",
    },
    {
      icon: Users,
      title: "Опытная команда",
      description: "Профессиональные водители со стажем от 5 лет",
    },
    {
      icon: Clock,
      title: "Быстрая доставка",
      description: "Доставка в день заказа или по расписанию",
    },
    {
      icon: Shield,
      title: "Надёжная защита",
      description: "Полная ответственность за сохранность груза",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      const targets = { clients: 500, orders: 1200, years: 8, rating: 4.9 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          clients: Math.floor(targets.clients * progress),
          orders: Math.floor(targets.orders * progress),
          years: Math.floor(targets.years * progress),
          rating: parseFloat((targets.rating * progress).toFixed(1)),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepTime);
    };

    animateCounters();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем надежные и качественные услуги грузоперевозок с
            полной ответственностью за ваш груз
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                  activeFeature === index
                    ? "bg-white shadow-xl scale-105 border-2 border-blue-500"
                    : "bg-white/50 hover:bg-white hover:shadow-lg"
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-center">
                  <div
                    className={`inline-flex p-4 rounded-full mb-4 transition-colors duration-300 ${
                      activeFeature === index
                        ? "bg-blue-500 text-white"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {counters.clients}+
              </div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {counters.orders}+
              </div>
              <div className="text-gray-600">Выполненных заказов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {counters.years}
              </div>
              <div className="text-gray-600">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {counters.rating}
              </div>
              <div className="text-gray-600">Средний рейтинг</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;