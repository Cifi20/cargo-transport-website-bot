import Icon from "@/components/ui/icon";
import { useState, useEffect, useRef } from "react";

const Advantages = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const advantages = [
    {
      icon: "UserCheck",
      title: "Опытные водители",
      description: "Наши водители имеют стаж не менее 5 лет и отлично знают Москву и область.",
      gradient: "from-blue-500 to-blue-600",
      delay: "0ms"
    },
    {
      icon: "Clock",
      title: "Круглосуточная работа",
      description: "Мы работаем 24/7, чтобы вы могли заказать перевозку в любое удобное время.",
      gradient: "from-green-500 to-green-600",
      delay: "100ms"
    },
    {
      icon: "Truck",
      title: "Современный автопарк",
      description: "Наш автопарк регулярно обновляется и проходит техническое обслуживание.",
      gradient: "from-purple-500 to-purple-600",
      delay: "200ms"
    },
    {
      icon: "DollarSign",
      title: "Прозрачные тарифы",
      description: "Никаких скрытых платежей. Вы платите только за фактически оказанные услуги.",
      gradient: "from-orange-500 to-orange-600",
      delay: "300ms"
    },
    {
      icon: "Headphones",
      title: "Персональный менеджер",
      description: "За каждым заказом закрепляется персональный менеджер, который контролирует все этапы.",
      gradient: "from-red-500 to-red-600",
      delay: "400ms"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(new Array(advantages.length).fill(true));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [advantages.length]);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden" ref={sectionRef}>
      {/* Анимированный фон */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInUp">
            <Icon name="Star" size={16} />
            Почему выбирают нас
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-6 animate-fadeInUp">
            Наши преимущества
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp">
            Мы предоставляем качественные услуги грузоперевозок уже более 5 лет
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 ${
                visibleCards[index] ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: advantage.delay,
                animationFillMode: 'both'
              }}
            >
              {/* Градиентный border эффект */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"></div>
              
              {/* Анимированная иконка */}
              <div className={`relative w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${advantage.gradient} mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <Icon
                  name={advantage.icon}
                  size={32}
                  className="text-white group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Плавающие частицы */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></div>
              </div>

              {/* Заголовок */}
              <h3 className="text-xl font-bold text-center mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {advantage.title}
              </h3>

              {/* Описание */}
              <p className="text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {advantage.description}
              </p>

              {/* Hover эффект - волна */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Статистика */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Довольных клиентов", icon: "Users" },
            { number: "24/7", label: "Поддержка", icon: "Clock" },
            { number: "99%", label: "Выполненных заказов", icon: "CheckCircle" },
            { number: "5+", label: "Лет опыта", icon: "Award" }
          ].map((stat, index) => (
            <div key={index} className="group animate-fadeInUp" style={{ animationDelay: `${600 + index * 100}ms`, animationFillMode: 'both' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;