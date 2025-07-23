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
      mkadPrice: "32 ₽/км",
    },
    {
      title: "Газель до 1.5т",
      image:
        "https://cdn.poehali.dev/files/fd8a2dbd-4dc7-4e96-bf02-60f8a0e45967.png",
      capacity: "до 1.5 тонн",
      dimensions: "3-4 метра",
      pallets: "4-6 паллет",
      minTime: "4 часа",
      price: "1200 ₽/час",
      mkadPrice: "37 ₽/км",
      variants: [
        "3м × 1.8 × 1.8м • 4 паллета • 9-11 м³",
        "4м × 2 × 2м • 6 паллет • 18-20 м³"
      ]
    },
    {
      title: "Газель до 2т",
      image:
        "https://cdn.poehali.dev/files/fd8a2dbd-4dc7-4e96-bf02-60f8a0e45967.png",
      capacity: "до 2 тонн",
      dimensions: "5-6 метров",
      pallets: "10-15 паллет",
      minTime: "5 часов",
      price: "1400 ₽/час",
      mkadPrice: "50 ₽/км",
      variants: [
        "5м × 2 × 2.2м • 10 паллет • 22-26 м³",
        "6м × 2.2 × 2.4м • 15 паллет • до 30 м³"
      ]
    },
    {
      title: "Грузовик 3т",
      image:
        "https://cdn.poehali.dev/files/6a6a8d7f-f17d-44dd-a544-ad3f42517bca.png",
      capacity: "до 3 тонн",
      dimensions: "4-5 метров",
      pallets: "8-12 паллет",
      minTime: "5-6 часов",
      price: "1350-1500 ₽/час",
      mkadPrice: "50 ₽/км",
      variants: [
        "4м × 1.8 × 1.8м • 8 паллет • 13 м³",
        "5м × 2 × 2м • 12 паллет • 20 м³"
      ]
    },
    {
      title: "Грузовик 5т",
      image:
        "https://cdn.poehali.dev/files/a617ea40-783e-4437-81a5-b77b7048bee4.png",
      capacity: "до 5 тонн",
      dimensions: "6-7 метров",
      pallets: "14-20 паллет",
      minTime: "7 часов",
      price: "1550-1650 ₽/час",
      mkadPrice: "46-60 ₽/км",
      variants: [
        "6м × 2.2 × 2.2м • 14 паллет • 30 м³",
        "7м × 2.4 × 2.4м • 20 паллет • 40 м³"
      ]
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
      mkadPrice: "70 ₽/км",
    },
    {
      title: "Фура 20т",
      image:
        "https://cdn.poehali.dev/files/ef37edc2-ecb4-4230-86a4-86e8e818582d.png",
      capacity: "до 20 тонн",
      dimensions: "13.6×2.45×2.45 м",
      pallets: "33 паллета",
      minTime: "7 часов",
      price: "2650 ₽/час",
      mkadPrice: "80 ₽/км",
      additional: ["Гидроборт +1ч"]
    },
  ];

  return (
    <section id="tariffs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Тарифы на грузоперевозки
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите подходящий автомобиль для ваших задач
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trucks.map((truck, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 hover:scale-[1.02]"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Изображение */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={truck.image}
                  alt={truck.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-card/95 backdrop-blur-sm px-2.5 py-1 rounded-md border border-border">
                  <span className="text-xs font-medium text-primary">{truck.capacity}</span>
                </div>
              </div>

              {/* Контент */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  {truck.title}
                </h3>

                {/* Характеристики в таблице */}
                <div className="space-y-3 mb-6">
                  {truck.variants ? (
                    <div className="py-2 border-b border-border">
                      <span className="text-muted-foreground text-sm font-medium block mb-2">Варианты кузова:</span>
                      <div className="space-y-1.5">
                        {truck.variants.map((variant, idx) => (
                          <div key={idx} className="text-xs text-foreground bg-muted p-2 rounded border">
                            {variant}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground text-sm">Габариты:</span>
                        <span className="text-foreground text-sm font-medium">{truck.dimensions}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground text-sm">Паллеты:</span>
                        <span className="text-foreground text-sm font-medium">{truck.pallets}</span>
                      </div>
                    </>
                  )}
                  {truck.volume && (
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground text-sm">Объем:</span>
                      <span className="text-foreground text-sm font-medium">{truck.volume}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground text-sm">Мин. время:</span>
                    <span className="text-foreground text-sm font-medium">{truck.minTime}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground text-sm">За МКАД:</span>
                    <span className="text-foreground text-sm font-medium">{truck.mkadPrice}</span>
                  </div>
                </div>

                {/* Цена */}
                <div className="text-center mb-6">
                  <div className="bg-primary text-primary-foreground py-4 px-4 rounded-md">
                    <div className="text-sm font-medium opacity-90 mb-1">Стоимость</div>
                    <div className="text-xl font-bold">{truck.price}</div>
                  </div>
                </div>

                {/* Дополнительные услуги */}
                <div className="bg-muted rounded-md p-4 mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Дополнительно:</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Подача</span>
                      <span className="font-medium">+1ч</span>
                    </div>
                    {truck.title !== "Каблук 0.5т" && (
                      <div className="flex justify-between">
                        <span>Гидроборт</span>
                        <span className="font-medium">+1ч</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Рокла</span>
                      <span className="font-medium">+1ч</span>
                    </div>
                  </div>
                </div>

                {/* Кнопка заказа */}
                <button className="relative w-full bg-accent text-accent-foreground py-3 rounded-md font-medium text-center overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Заказать автомобиль
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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