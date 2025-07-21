import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Главная", href: "#home" },
    { name: "О компании", href: "#about" },
    { name: "Услуги", href: "#loader-services" },
    { name: "Тарифы", href: "#tariffs" },
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
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center space-x-3"
          >
            <div className="bg-primary p-2.5 rounded-md">
              <Truck className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <span className="text-2xl font-bold text-foreground">SMART</span>
              <span className="text-2xl font-light text-primary ml-1">MOVE</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+74951234567"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              +7 (495) 123-45-67
            </a>
            <button className="relative bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium rounded-md overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              <span className="relative z-10">Заказать звонок</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-white border-t border-border">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-border space-y-3">
                <a 
                  href="tel:+74951234567"
                  className="block px-4 py-2 text-sm font-medium text-foreground"
                >
                  +7 (495) 123-45-67
                </a>
                <button className="w-full bg-primary text-primary-foreground px-4 py-3 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors">
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;