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
              <span className="text-xl font-bold">CargoРФ</span>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональные грузоперевозки по всей России с гарантией
              качества и своевременной доставки.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://vk.com/id1051189366"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">VK</span>
                </div>
              </a>
              <a
                href="https://t.me/Smartmove6705"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">TG</span>
                </div>
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Городские перевозки</li>
              <li>Междугородние перевозки</li>
              <li>Перевозка мебели</li>
              <li>Стройматериалы</li>
              <li>Оборудование</li>
              <li>Калькулятор стоимости</li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-400">
              <li>О компании</li>
              <li>Тарифы</li>
              <li>Часто задаваемые вопросы</li>
              <li>Отслеживание груза</li>
              <li>Отзывы клиентов</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>+7 999 592 5155</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>cargo6705@gmail.com</span>
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
          <p>© 2025 CargoРФ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
