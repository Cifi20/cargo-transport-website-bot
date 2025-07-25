import { Truck, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://cdn.poehali.dev/files/1ab939bc-b836-4a5c-a703-6e1cf43f85f6.jpg"
                alt="SMARTMOVE"
                className="h-10 w-auto"
              />
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
              <a
                href="https://wa.me/79995925155"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">WA</span>
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
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4"></h3>
            <ul className="space-y-2 text-gray-400"></ul>
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
                <Clock className="h-5 w-5 text-orange-500" />
                <span>Работаем 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Smart move. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;