import { useState, useEffect } from "react";
import { Menu, X, Truck, Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Главная", href: "#home" },
    { name: "О компании", href: "#about" },
    { name: "Тарифы", href: "#tariffs" },
    { name: "Оставить заявку", href: "#order-form" },
    { name: "Отзывы", href: "#reviews" },
    { name: "Контакты", href: "#contacts" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Верхняя информационная полоса */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 group">
              <Clock className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Круглосуточно</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Москва и область</span>
            </div>
          </div>

        </div>
      </div>

      {/* Основная шапка */}
      <header className={`bg-background border-b border-border sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-lg backdrop-blur-md bg-background/95' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Логотип SMARTMOVE */}
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center group"
            >
              <img 
                src="https://cdn.poehali.dev/files/1ab939bc-b836-4a5c-a703-6e1cf43f85f6.jpg"
                alt="SMARTMOVE"
                className="h-12 w-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
            </button>

            {/* Навигация с эффектами */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                    {item.name}
                  </span>
                  
                  {/* Анимированное подчеркивание */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-400"></div>
                  
                  {/* Hover фон */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md"></div>
                </button>
              ))}
            </nav>

            {/* CTA секция с анимациями */}
            <div className="hidden md:flex items-center space-x-4">

              

            </div>

            {/* Анимированная мобильная кнопка */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} />
              </div>
            </button>
          </div>

          {/* Анимированное мобильное меню */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-2 pt-4 pb-6 space-y-2 bg-background border-t border-border">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-xl group transform hover:translate-x-2"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideInFromLeft 0.3s ease-out both' : ''
                  }}
                >
                  <span className="group-hover:scale-105 transition-transform duration-300">
                    {item.name}
                  </span>
                </button>
              ))}
              
              <div className="pt-4 mt-4 border-t border-border space-y-3">

                

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;