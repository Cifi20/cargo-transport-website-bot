import Header from "@/components/Header";
import { Check } from "lucide-react";

const Rates = () => {
  const plans = [
    {
      name: "Базовый",
      price: "от 50",
      unit: "руб/км",
      description: "Стандартные перевозки",
      features: [
        "Грузоподъемность до 5 тонн",
        "Базовое страхование",
        "Отслеживание груза",
        "Техподдержка в рабочее время",
      ],
    },
    {
      name: "Профи",
      price: "от 75",
      unit: "руб/км",
      description: "Для регулярных отправок",
      features: [
        "Грузоподъемность до 15 тонн",
        "Расширенное страхование",
        "Приоритетное отслеживание",
        "Техподдержка 24/7",
        "Скидки при объеме",
      ],
      popular: true,
    },
    {
      name: "Премиум",
      price: "от 120",
      unit: "руб/км",
      description: "Максимальный сервис",
      features: [
        "Грузоподъемность до 25 тонн",
        "Полное страхование",
        "Персональный менеджер",
        "SMS-уведомления",
        "Экспресс-доставка",
        "Упаковка и погрузка",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Тарифы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачные цены без скрытых платежей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? "ring-2 ring-blue-600" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                  Популярный
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Выбрать тариф
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Дополнительные услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Упаковка и погрузка
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Профессиональная упаковка — от 500 руб</li>
                <li>• Погрузочные работы — от 1000 руб/час</li>
                <li>• Такелажные работы — от 2000 руб/час</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Специальные условия
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Срочная доставка — +50% к тарифу</li>
                <li>• Негабаритный груз — расчет индивидуально</li>
                <li>• Хрупкий груз — +30% к тарифу</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rates;
