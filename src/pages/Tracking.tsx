import Header from "@/components/Header";
import { useState } from "react";
import { Search, Package, Truck, CheckCircle } from "lucide-react";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleSearch = () => {
    if (trackingNumber.trim()) {
      // Имитация результата отслеживания
      setTrackingResult({
        number: trackingNumber,
        status: "В пути",
        currentLocation: "Москва",
        destination: "Санкт-Петербург",
        estimatedDelivery: "25.12.2024",
        steps: [
          {
            status: "Груз принят",
            location: "Москва",
            date: "23.12.2024 09:00",
            completed: true,
          },
          {
            status: "Груз в пути",
            location: "Москва",
            date: "23.12.2024 12:00",
            completed: true,
          },
          {
            status: "Транзит",
            location: "Тверь",
            date: "24.12.2024 15:30",
            completed: true,
          },
          {
            status: "Прибытие на склад",
            location: "Санкт-Петербург",
            date: "25.12.2024 08:00",
            completed: false,
          },
          {
            status: "Доставка получателю",
            location: "Санкт-Петербург",
            date: "25.12.2024 14:00",
            completed: false,
          },
        ],
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Отслеживание груза
          </h1>
          <p className="text-xl text-gray-600">
            Введите номер накладной для отслеживания статуса доставки
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Введите номер накладной"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Search className="h-5 w-5" />
              Отследить
            </button>
          </div>
        </div>

        {trackingResult && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Накладная #{trackingResult.number}
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Статус</div>
                  <div className="text-lg font-semibold text-blue-600">
                    {trackingResult.status}
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">
                    Текущее местоположение
                  </div>
                  <div className="text-lg font-semibold text-orange-600">
                    {trackingResult.currentLocation}
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">
                    Ожидаемая доставка
                  </div>
                  <div className="text-lg font-semibold text-green-600">
                    {trackingResult.estimatedDelivery}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                История перемещений
              </h3>
              <div className="space-y-4">
                {trackingResult.steps.map((step: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`mt-1 ${step.completed ? "text-green-600" : "text-gray-400"}`}
                    >
                      {step.completed ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        <div className="h-6 w-6 border-2 border-gray-300 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div
                        className={`font-semibold ${step.completed ? "text-gray-900" : "text-gray-500"}`}
                      >
                        {step.status}
                      </div>
                      <div className="text-sm text-gray-600">
                        {step.location} • {step.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!trackingResult && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Введите номер для отслеживания
            </h3>
            <p className="text-gray-600">
              Номер накладной указан в документах или SMS-уведомлении
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Tracking;
