import { ArrowRight, Truck, Clock, Shield, Star } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    orders: 0,
    experience: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Анимация счетчиков
    const animateCounter = (target: number, key: keyof typeof counters) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    };

    setTimeout(() => {
      animateCounter(500, 'clients');
      animateCounter(99, 'orders');
      animateCounter(5, 'experience');
    }, 1000);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary via-primary/90 to-accent text-white py-20 lg:py-32 overflow-hidden"
    >
      {/* Анимированный фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse-soft"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая колонка - текст */}
          <div className={`space-y-8 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 text-accent" />
                Рейтинг 4.9/5 на основе 500+ отзывов
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Грузоперевозки по
                <span className="text-accent block">Москве и МО</span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Профессиональная доставка грузов с гарантией качества и поддержкой 24/7. 
                Быстро, надежно, выгодно.
              </p>
            </div>

            {/* Кнопки действий */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="relative bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Заказать сейчас
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
                Рассчитать стоимость
              </button>
            </div>

            {/* Преимущества */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="flex justify-center mb-2">
                  <Clock className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-sm text-white/70">Быстрая подача</div>
                <div className="font-semibold">от 30 мин</div>
              </div>
              
              <div className="text-center group">
                <div className="flex justify-center mb-2">
                  <Shield className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-sm text-white/70">Гарантия</div>
                <div className="font-semibold">100%</div>
              </div>
              
              <div className="text-center group">
                <div className="flex justify-center mb-2">
                  <Truck className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-sm text-white/70">Автопарк</div>
                <div className="font-semibold">50+ машин</div>
              </div>
            </div>
          </div>

          {/* Правая колонка - иллюстрация */}
          <div className={`relative ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            {/* Карточка статистики */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4 animate-pulse-soft">
                  <Truck className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Наша статистика</h3>
                <p className="text-white/70">Цифры говорят сами за себя</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Довольных клиентов</span>
                  <span className="text-3xl font-bold text-accent">{counters.clients}+</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Выполненных заказов</span>
                  <span className="text-3xl font-bold text-accent">{counters.orders}%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Лет опыта</span>
                  <span className="text-3xl font-bold text-accent">{counters.experience}+</span>
                </div>
              </div>
            </div>

            {/* Плавающие элементы */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;