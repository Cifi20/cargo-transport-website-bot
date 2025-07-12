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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center space-x-2"
          >
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Умный переезд
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="transition-colors duration-200 font-medium text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
