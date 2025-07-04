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
      minTime: "1 час",
      price: "от 600 ₽/час",
      mkadPrice: "25 ₽/км",
    },
    {
      title: "Газель 1.5т",
      image:
        "https://cdn.poehali.dev/files/fd8a2dbd-4dc7-4e96-bf02-60f8a0e45967.png",
      capacity: "до 1.5 тонн",
      dimensions: "3-4×1.8×1.8 м",
      pallets: "4-6 паллет",
      minTime: "2 часа",
      price: "от 1140 ₽/час",
      mkadPrice: "35 ₽/км",
    },
    {
      title: "Грузовик 3т",
      image:
        "https://cdn.poehali.dev/files/6a6a8d7f-f17d-44dd-a544-ad3f42517bca.png",
      capacity: "до 3 тонн",
      dimensions: "4×1.8×1.8 м",
      pallets: "8 паллет",
      minTime: "3 часа",
      price: "от 1000 ₽/час",
      mkadPrice: "35 ₽/км",
    },
    {
      title: "Грузовик 5т",
      image:
        "https://cdn.poehali.dev/files/a617ea40-783e-4437-81a5-b77b7048bee4.png",
      capacity: "до 5 тонн",
      dimensions: "5×2.2×2.2 м",
      pallets: "14 паллет",
      volume: "40 м³",
      minTime: "3 часа",
      price: "от 1200 ₽/час",
      mkadPrice: "40 ₽/км",
    },
    {
      title: "Грузовик 10т",
      image:
        "https://cdn.poehali.dev/files/304d03c1-d4ac-4c90-9063-88d5489604ad.png",
      capacity: "до 10 тонн",
      dimensions: "7×2.4×2.4 м",
      pallets: "17 паллет",
      minTime: "4 часа",
      price: "от 1500 ₽/час",
      mkadPrice: "45 ₽/км",
    },
    {
      title: "Фура 20т",
      image:
        "https://cdn.poehali.dev/files/b76a8ada-5ac8-427c-a624-58ffa0fdc6b6.png",
      capacity: "до 20 тонн",
      dimensions: "13.6×2.45×2.45 м",
      pallets: "33 паллета",
      minTime: "6 часов",
      price: "от 2500 ₽/час",
      mkadPrice: "60 ₽/км",
    },
  ];

  return (
    <section id="tariffs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Тарифы на грузоперевозки
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {trucks.map((truck, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={truck.image}
                  alt={truck.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{truck.title}</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <Icon name="Truck" size={16} className="text-primary" />
                    </div>
                    <span>Грузоподъемность: {truck.capacity}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <Icon name="Ruler" size={16} className="text-primary" />
                    </div>
                    <span>Габариты кузова: {truck.dimensions}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <Icon name="Package" size={16} className="text-primary" />
                    </div>
                    <span>Вместимость: {truck.pallets}</span>
                  </li>
                  {truck.volume && (
                    <li className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                        <Icon name="Box" size={16} className="text-primary" />
                      </div>
                      <span>Объем: {truck.volume}</span>
                    </li>
                  )}
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <Icon name="Clock" size={16} className="text-primary" />
                    </div>
                    <span>Мин. время заказа 4 часа</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <Icon
                        name="DollarSign"
                        size={16}
                        className="text-primary"
                      />
                    </div>
                    <span>Стоимость: 1050р. час</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <Icon name="MapPin" size={16} className="text-primary" />
                    </div>
                    <span>За МКАД: 35 р.км</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <Icon
                        name="Navigation"
                        size={16}
                        className="text-primary"
                      />
                    </div>
                    <span>Выезд: +1ч к стоимости</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <Icon name="Wrench" size={16} className="text-primary" />
                    </div>
                    <span>Наличие гидроборта: +1ч к стоимости</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <Icon
                        name="Forklift"
                        size={16}
                        fallback="Truck"
                        className="text-primary"
                      />
                    </div>
                    <span>Наличие роклы: +1ч к стоимости</span>
                  </li>
                </ul>
                <button className="w-full bg-primary text-white py-3 rounded-button whitespace-nowrap font-medium">
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TariffSection;
