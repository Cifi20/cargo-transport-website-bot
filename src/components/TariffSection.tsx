import Icon from "@/components/ui/icon";

const TariffSection = () => {
  const trucks = [
    {
      title: "Газель 1.5т",
      image:
        "https://readdy.ai/api/search-image?query=Small%20cargo%20truck%201.5%20ton%2C%20white%20color%2C%20side%20view%2C%20clean%20simple%20background%2C%20professional%20product%20photography%2C%20high%20quality%20image&width=600&height=400&seq=2&orientation=landscape",
      capacity: "до 1.5 тонн",
      dimensions: "3×1.8×1.8 м",
      pallets: "4 паллета",
      minTime: "2 часа",
      price: "от 800 ₽/час",
      mkadPrice: "30 ₽/км",
    },
    {
      title: "Грузовик 3т",
      image:
        "https://readdy.ai/api/search-image?query=Medium%20cargo%20truck%203%20ton%2C%20white%20color%2C%20side%20view%2C%20clean%20simple%20background%2C%20professional%20product%20photography%2C%20high%20quality%20image&width=600&height=400&seq=5&orientation=landscape",
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
        "https://readdy.ai/api/search-image?query=Medium%20cargo%20truck%205%20ton%20capacity%2C%20white%20commercial%20vehicle%2C%20side%20profile%20view%2C%20professional%20truck%20photography%2C%20clean%20background%2C%20high%20quality&width=600&height=400&seq=8&orientation=landscape",
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
        "https://readdy.ai/api/search-image?query=Large%20cargo%20truck%2010%20ton%2C%20white%20color%2C%20side%20view%2C%20clean%20simple%20background%2C%20professional%20product%20photography%2C%20high%20quality%20image&width=600&height=400&seq=6&orientation=landscape",
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
        "https://readdy.ai/api/search-image?query=Semi%20truck%20with%20trailer%2020%20ton%20capacity%2C%20white%20cab%20and%20trailer%2C%20side%20profile%20view%2C%20professional%20commercial%20vehicle%20photography%2C%20clean%20white%20background%2C%20high%20resolution&width=600&height=400&seq=1&orientation=landscape",
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
                    <span>Мин. время заказа: {truck.minTime}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <Icon
                        name="DollarSign"
                        size={16}
                        className="text-primary"
                      />
                    </div>
                    <span>Стоимость: {truck.price}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <Icon name="MapPin" size={16} className="text-primary" />
                    </div>
                    <span>За МКАД: {truck.mkadPrice}</span>
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
