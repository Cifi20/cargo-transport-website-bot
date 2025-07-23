import { ArrowRight, Truck, Clock, Shield, Star, Phone, MapPin, CheckCircle, Users, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    orders: 0,
    experience: 0,
    cars: 0
  });

  const [floatingElements, setFloatingElements] = useState<Array<{id: number, x: number, y: number}>>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Генерация плавающих элементов
    const elements = Array.from({length: 15}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setFloatingElements(elements);
    
    // Анимация счетчиков
    const animateCounter = (target: number, key: keyof typeof counters, duration = 2000) => {
      let current = 0;
      const increment = target / (duration / 50);
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
      animateCounter(2500, 'clients', 2500);
      animateCounter(99, 'orders', 2000);
      animateCounter(8, 'experience', 1500);
      animateCounter(120, 'cars', 3000);
    }, 800);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative bg-gradient-to-br from-primary via-blue-600 to-accent text-white py-16 lg:py-24 overflow-hidden min-h-screen flex items-center"
    >
      {/* Супер живой анимированный фон */}
      <div className="absolute inset-0">
        {/* Основной градиентный слой */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-blue-600/90 to-accent/95"></div>
        
        {/* Плавающие геометрические фигуры */}
        {floatingElements.map((element, index) => (
          <div
            key={element.id}
            className={`absolute w-2 h-2 bg-white/10 rounded-full animate-float ${
              index % 3 === 0 ? 'animate-pulse-soft' : index % 2 === 0 ? 'animate-bounce-gentle' : ''
            }`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${index * 0.3}s`,
              animationDuration: `${3 + index * 0.2}s`
            }}
          />
        ))}
        
        {/* Большие декоративные элементы */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-accent/20 to-transparent rounded-full animate-pulse-soft blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full animate-float blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-primary/30 to-transparent rounded-full animate-bounce-gentle blur-xl"></div>
        
        {/* Анимированная сетка */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full animate-pulse-soft">
            {Array.from({length: 60}).map((_, i) => (
              <div key={i} className="border-r border-white/20 animate-fadeInUp" style={{animationDelay: `${i * 20}ms`}}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Левая колонка - контент */}
          <div className={`space-y-8 ${isVisible ? 'animate-slideInLeft' : 'opacity-0 translate-x-[-100px]'}`}>
            
            {/* Бейдж с рейтингом */}
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-xl px-6 py-3 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 group">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${i * 100}ms`}} />
                ))}
              </div>
              <span className="text-white group-hover:text-accent transition-colors duration-300">
                4.9/5 • 2500+ отзывов
              </span>
            </div>
            
            {/* Основной заголовок с анимацией */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="block animate-fadeInUp">Грузоперевозки</span>
                <span className="block text-accent animate-fadeInUp bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent" style={{animationDelay: '200ms'}}>
                  по Москве
                </span>
                <span className="block text-3xl lg:text-4xl font-normal text-white/90 animate-fadeInUp" style={{animationDelay: '400ms'}}>
                  и Московской области
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/85 leading-relaxed max-w-2xl animate-fadeInUp" style={{animationDelay: '600ms'}}>
                Профессиональная доставка грузов с гарантией качества. 
                <span className="text-accent font-semibold"> Быстро, надежно, выгодно.</span>
              </p>
            </div>

            {/* Живые кнопки действий */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{animationDelay: '800ms'}}>
              <button className="group relative bg-gradient-to-r from-accent via-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/50 hover:scale-110 active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-6 h-6 group-hover:wiggle animate-bounce-gentle" />
                  Заказать сейчас
                  <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </span>
                
                {/* Множественные эффекты */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-orange-500 to-red-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 animate-glow transition-opacity duration-500 -z-10"></div>
              </button>
              
              <button className="group border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-lg backdrop-blur-xl hover:bg-white/20 transition-all duration-500 hover:scale-105 active:scale-95 hover:border-accent relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-5 h-5 group-hover:bounce-gentle" />
                  Рассчитать стоимость
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>

            {/* Живые преимущества */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fadeInUp" style={{animationDelay: '1000ms'}}>
              {[
                { icon: Clock, label: "Быстрая подача", value: "от 15 мин", color: "text-green-400" },
                { icon: Shield, label: "Гарантия", value: "100%", color: "text-blue-400" },
                { icon: Award, label: "Опыт", value: "8+ лет", color: "text-purple-400" }
              ].map((item, index) => (
                <div key={index} className="text-center group cursor-pointer" style={{animationDelay: `${1200 + index * 100}ms`}}>
                  <div className="flex justify-center mb-3">
                    <div className={`p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
                      <item.icon className={`w-8 h-8 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                  </div>
                  <div className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">{item.label}</div>
                  <div className={`font-bold text-lg ${item.color} group-hover:scale-110 transition-transform duration-300`}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка - живая статистика */}
          <div className={`relative ${isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-[100px]'}`} style={{animationDelay: '600ms'}}>
            
            {/* Главная карточка статистики */}
            <div className="relative bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-accent/20 transition-all duration-700 hover:scale-105 group">
              
              {/* Заголовок карточки */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-orange-500 rounded-2xl mb-6 animate-bounce-gentle group-hover:animate-wiggle">
                  <Truck className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">Наша статистика</h3>
                <p className="text-white/80 text-lg">Цифры говорят сами за себя</p>
              </div>
              
              {/* Живые счетчики */}
              <div className="space-y-8">
                {[
                  { label: "Довольных клиентов", value: counters.clients, suffix: "+", icon: Users, color: "text-green-400" },
                  { label: "Выполненных заказов", value: counters.orders, suffix: "%", icon: CheckCircle, color: "text-blue-400" },
                  { label: "Лет опыта", value: counters.experience, suffix: "+", icon: Award, color: "text-purple-400" },
                  { label: "Автомобилей", value: counters.cars, suffix: "+", icon: Truck, color: "text-orange-400" }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center group/stat hover:bg-white/10 rounded-xl p-3 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-white/10 group-hover/stat:bg-white/20 transition-all duration-300`}>
                        <stat.icon className={`w-5 h-5 ${stat.color} group-hover/stat:scale-110 transition-transform duration-300`} />
                      </div>
                      <span className="text-white/90 group-hover/stat:text-white transition-colors duration-300">{stat.label}</span>
                    </div>
                    <span className={`text-4xl font-black ${stat.color} animate-countUp group-hover/stat:scale-110 transition-transform duration-300`} style={{animationDelay: `${index * 200}ms`}}>
                      {stat.value}{stat.suffix}
                    </span>
                  </div>
                ))}
              </div>

              {/* Декоративные элементы карточки */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent/30 to-transparent rounded-full animate-float blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-pulse-soft blur-md"></div>
            </div>

            {/* Дополнительные плавающие элементы */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full animate-float blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-white/15 to-transparent rounded-full animate-bounce-gentle blur-lg"></div>
            
            {/* Микро анимации частиц */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-accent rounded-full animate-float opacity-60"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${15 + i * 12}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${2 + i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;