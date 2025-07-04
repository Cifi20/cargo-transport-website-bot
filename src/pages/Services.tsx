import Header from "@/components/Header";
import { Truck, Package, Clock, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: "Автомобильные перевозки",
      description: "Доставка грузов любого объема по России и СНГ",
      features: ["До 20 тонн", "Срочная доставка"],
    },
    {
      icon: <Package className="h-12 w-12 text-orange-500" />,
      title: "Складские услуги",
      description: "Современные склады с системой контроля температуры",
      features: ["Краткосрочное хранение", "Упаковка", "Сортировка"],
    },
    {
      icon: <Clock className="h-12 w-12 text-green-600" />,
      title: "Экспресс-доставка",
      description: "Быстрая доставка в течение 24 часов",
      features: ["Курьерская доставка", "Документы", "Малогабарит"],
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: "Специальные перевозки",
      description: "Перевозка негабаритных и опасных грузов",
      features: ["Спецтехника", "Сопровождение", "Разрешения"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр логистических услуг для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl mb-6">
            Наши специалисты помогут выбрать оптимальное решение
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Получить консультацию
          </button>
        </div>
      </main>
    </div>
  );
};

export default Services;
