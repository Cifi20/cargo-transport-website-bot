import Icon from "@/components/ui/icon";

const TariffSection = () => {
  const trucks = [
    {
      title: "Каблук 0.5т",
      image:
        "https://cdn.poehali.dev/files/298ae05e-51d6-43b3-b790-164e7a8fef98.png",
      capacity: "до 0.5 тонн",
      dimensions: "1.5×1×1 м",
      pallets: "1 паллета",
      minTime: "4 часа",
      price: "1000 ₽/час",
      mkadPrice: "30 ₽/км",
    },
    {
      title: "Газель до 2т",
      image:
        "https://cdn.poehali.dev/files/fd8a2dbd-4dc7-4e96-bf02-60f8a0e45967.png",
      capacity: "до 2 тонн",
      dimensions: "3-6 метров",
      pallets: "4-6 паллет",
      minTime: "4-5 часов",
      price: "1140-1200 ₽/час",
      mkadPrice: "30 ₽/км",
      variants: [
        "3м × 1.8 × 1.8м • 4 паллета • 9-11 м³",
        "4м × 2 × 2м • 6 паллет • до 16 м³", 
        "5м × 2 × 2.2м • объем 22-26 м³",
        "6м × 2.2 × 2.4м • до 30 м³"
      ]
    },
    {
      title: "Грузовик 3т",
      image:
        "https://cdn.poehali.dev/files/6a6a8d7f-f17d-44dd-a544-ad3f42517bca.png",
      capacity: "до 3 тонн",
      dimensions: "4×1.8×1.8 м",
      pallets: "8-10 паллет",
      minTime: "5-6 часов",
      price: "1350-1500 ₽/час",
      mkadPrice: "40 ₽/км",
    },
    {
      title: "Грузовик 5т",
      image:
        "https://cdn.poehali.dev/files/a617ea40-783e-4437-81a5-b77b7048bee4.png",
      capacity: "до 5 тонн",
      dimensions: "5×2.2×2.2 м",
      pallets: "14-17 паллет",
      volume: "40 м³",
      minTime: "7 часов",
      price: "1550-1650 ₽/час",
      mkadPrice: "45-55 ₽/км",
    },
    {
      title: "Грузовик 10т",
      image:
        "https://cdn.poehali.dev/files/304d03c1-d4ac-4c90-9063-88d5489604ad.png",
      capacity: "до 10 тонн",
      dimensions: "7×2.4×2.4 м",
      pallets: "17 паллет",
      minTime: "7 часов",
      price: "1750 ₽/час",
      mkadPrice: "60 ₽/км",
    },
    {
      title: "Фура 20т",
      image:
        "https://cdn.poehali.dev/files/b76a8ada-5ac8-427c-a624-58ffa0fdc6b6.png",
      capacity: "до 20 тонн",
      dimensions: "13.6×2.45×2.45 м",
      pallets: "33 паллета",
      minTime: "7 часов",
      price: "2650 ₽/час",
      mkadPrice: "70 ₽/км",
    },
  ];

  return (
    <section id="tariffs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Тарифы на грузоперевозки
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий автомобиль для ваших задач
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trucks.map((truck, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Изображение */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50">
                <img
                  src={truck.image}
                  alt={truck.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-blue-600">{truck.capacity}</span>
                </div>
              </div>

              {/* Контент */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {truck.title}
                </h3>

                {/* Характеристики в таблице */}
                <div className="space-y-4 mb-8">
                  {truck.variants ? (
                    <div className="py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium block mb-3">Варианты кузова:</span>
                      <div className="space-y-2">
                        {truck.variants.map((variant, idx) => (
                          <div key={idx} className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
                            {variant}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Габариты:</span>
                        <span className="text-gray-900 font-semibold">{truck.dimensions}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Паллеты:</span>
                        <span className="text-gray-900 font-semibold">{truck.pallets}</span>
                      </div>
                    </>
                  )}
                  {truck.volume && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Объем:</span>
                      <span className="text-gray-900 font-semibold">{truck.volume}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Мин. время:</span>
                    <span className="text-gray-900 font-semibold">{truck.minTime}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">За МКАД:</span>
                    <span className="text-gray-900 font-semibold">{truck.mkadPrice}</span>
                  </div>
                </div>

                {/* Цена */}
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 px-6 rounded-xl">
                    <div className="text-sm font-medium opacity-90 mb-1">Стоимость</div>
                    <div className="text-2xl font-bold">{truck.price}</div>
                  </div>
                </div>

                {/* Дополнительные услуги */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Дополнительно:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Выезд</span>
                      <span className="font-medium">+1ч</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Гидроборт</span>
                      <span className="font-medium">+1ч</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Рокла</span>
                      <span className="font-medium">+1ч</span>
                    </div>
                  </div>
                </div>

                {/* Кнопка заказа */}
                <a
                  href="#services"
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 rounded-xl font-semibold text-center inline-block transition-all duration-300 hover:from-blue-700 hover:to-orange-600 hover:shadow-lg transform hover:scale-105"
                >
                  Заказать автомобиль
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TariffSection;