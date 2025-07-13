const LoaderServices = () => {
  const services = [
    {
      service: "Грузчик (стандартные работы)",
      price: "800 ₽/час",
      minTime: "4 часа",
      note: "Погрузка/разгрузка, перемещение",
    },
    {
      service: "Грузчик (такелажные работы)",
      price: "1100 ₽/час",
      minTime: "4 часа",
      note: "Перемещение тяжелых предметов",
    },
    {
      service: "Упаковка",
      price: "+1000 ₽",
      minTime: "—",
      note: "Упаковка вещей, мебели",
    },
    {
      service: "Сборщик мебели",
      price: "800 ₽/час",
      minTime: "4 часа",
      note: "Разборка/сборка мебели",
    },
    {
      service: "Наличие гидроборта",
      price: "+1ч к стоимости",
      minTime: "—",
      note: "Механизированная погрузка/разгрузка",
    },
    {
      service: "Наличие роклы",
      price: "+1ч к стоимости",
      minTime: "—",
      note: "Транспортировка тяжелых грузов",
    },
    {
      service: "Поэтажка",
      price: "от 50 ₽ за 1 ед.",
      minTime: "—",
      note: "Подъем/спуск груза по этажам",
    },
  ];

  return (
    <section id="loader-services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Услуги грузчиков
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left font-bold text-gray-800">
                  Услуга
                </th>
                <th className="p-4 text-left font-bold text-gray-800">
                  Стоимость
                </th>
                <th className="p-4 text-left font-bold text-gray-800">
                  Мин. время
                </th>
                <th className="p-4 text-left font-bold text-gray-800">
                  Примечание
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-4">{service.service}</td>
                  <td className="p-4">{service.price}</td>
                  <td className="p-4">{service.minTime}</td>
                  <td className="p-4">{service.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <a
            href="#services"
            className="bg-primary text-white px-6 py-3 rounded-button whitespace-nowrap font-medium inline-block hover:bg-primary/90 transition-colors"
          >
            Заказать грузчиков
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoaderServices;