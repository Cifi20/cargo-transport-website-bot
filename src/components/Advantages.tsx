import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "UserCheck",
      title: "Опытные водители",
      description:
        "Наши водители имеют стаж не менее 5 лет и отлично знают Москву и область.",
    },

    {
      icon: "Clock",
      title: "Круглосуточная работа",
      description:
        "Мы работаем 24/7, чтобы вы могли заказать перевозку в любое удобное время.",
    },
    {
      icon: "Truck",
      title: "Современный автопарк",
      description:
        "Наш автопарк регулярно обновляется и проходит техническое обслуживание.",
    },
    {
      icon: "DollarSign",
      title: "Прозрачные тарифы",
      description:
        "Никаких скрытых платежей. Вы платите только за фактически оказанные услуги.",
    },
    {
      icon: "Headphones",
      title: "Персональный менеджер",
      description:
        "За каждым заказом закрепляется персональный менеджер, который контролирует все этапы.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Наши преимущества
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                <Icon
                  name={advantage.icon}
                  size={32}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 text-center">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
