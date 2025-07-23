import Icon from "@/components/ui/icon";

const FormSidebar = () => {
  const contactInfo = [
    { 
      icon: "Phone", 
      title: "Телефон", 
      value: "+7 999 592 51 55", 
      color: "text-green-300" 
    },
    { 
      icon: "Mail", 
      title: "Email", 
      value: "cargo6705@gmail.com", 
      color: "text-blue-300" 
    },
    { 
      icon: "Clock", 
      title: "Режим работы", 
      value: "Круглосуточно", 
      color: "text-yellow-300" 
    },
    { 
      icon: "MapPin", 
      title: "Зона работы", 
      value: "Москва и область", 
      color: "text-purple-300" 
    }
  ];

  return (
    <div className="lg:w-2/5 p-8 bg-gradient-to-br from-primary via-blue-600 to-accent text-white relative overflow-hidden">
      
      {/* Декоративные элементы */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-float blur-2xl"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/30 rounded-full animate-pulse-soft blur-xl"></div>
      
      <div className="relative z-10">
        <div className="mb-8 animate-fadeInUp">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 animate-bounce-gentle">
            <Icon name="Send" size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Оставить заявку</h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Заполните форму, и наш менеджер свяжется с вами в ближайшее время для уточнения деталей заказа.
          </p>
        </div>
        
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          {contactInfo.map((contact, index) => (
            <div 
              key={index} 
              className="group flex items-start hover:bg-white/10 rounded-xl p-3 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded-xl mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Icon name={contact.icon} size={20} className={contact.color} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors duration-300">
                  {contact.title}
                </h3>
                <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                  {contact.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormSidebar;