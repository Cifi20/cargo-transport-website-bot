import { Truck, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ГрузЛогистика</span>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональные грузоперевозки по всей России с гарантией
              качества и своевременной доставки.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">VK</span>
                </div>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">TG</span>
                </div>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">YT</span>
                </div>
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Городские перевозки
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Междугородние перевозки
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Перевозка мебели
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Стройматериалы
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Оборудование
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="hover:text-white transition-colors duration-200"
                >
                  Калькулятор стоимости
                </a>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors duration-200"
                >
                  О компании
                </a>
              </li>
              <li>
                <a
                  href="#tariffs"
                  className="hover:text-white transition-colors duration-200"
                >
                  Тарифы
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors duration-200"
                >
                  Часто задаваемые вопросы
                </a>
              </li>
              <li>
                <a
                  href="#tracking"
                  className="hover:text-white transition-colors duration-200"
                >
                  Отслеживание груза
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-white transition-colors duration-200"
                >
                  Отзывы клиентов
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>info@gruzlogistics.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>г. Москва, ул. Логистическая, 15</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-500" />
                <span>Работаем 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ГрузЛогистика. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
