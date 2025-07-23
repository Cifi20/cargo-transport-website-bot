export const transportTariffs = [
  {
    type: "Каблук до 0.5т",
    emoji: "🚐",
    image: "https://cdn.poehali.dev/files/ce94cf7c-93f8-4c21-8882-65a545426e61.png",
    capacity: "до 500 кг",
    dimensions: "1.8×1.2×1.1 м",
    price: "1000₽/час",
    minOrder: "мин. заказ 4 часа",
    features: ["Городские перевозки", "Документы", "Посылки", "Выезд +1 час к стоимости", "За МКАД 32₽/км"],
    popular: false
  },
  {
    type: "Газель до 1.5т",
    emoji: "🚚",
    image: "https://cdn.poehali.dev/files/3154aed1-c34a-4684-9c75-92efc45a4b6d.png",
    capacity: "до 1500 кг",
    dimensions: "3-4×2×1.8 м",
    price: "1200-1400₽/час",
    minOrder: "мин. заказ 4 часа",
    features: ["Мебель", "Бытовая техника", "Переезды", "Выезд +1 час к стоимости", "За МКАД 37-50₽/км"],
    popular: true
  },
  {
    type: "Грузовик до 3т",
    emoji: "🚛",
    image: "https://cdn.poehali.dev/files/cc586858-9ba2-45c2-bdc9-e39e20428cd0.png",
    capacity: "до 3000 кг",
    dimensions: "4.2×2.1×2.1 м",
    price: "1350-1500₽/час",
    minOrder: "мин. заказ 5-6 часов",
    features: ["Стройматериалы", "Крупногабарит", "Паллеты", "Выезд +1 час к стоимости", "За МКАД 50₽/км"],
    popular: false
  },
  {
    type: "Грузовик до 5т",
    emoji: "🚜",
    image: "https://cdn.poehali.dev/files/d902f8b5-77ac-4fc5-91b0-508fff21e96c.png",
    capacity: "до 5000 кг",
    dimensions: "6×2.4×2.3 м",
    price: "2500₽/час",
    minOrder: "мин. заказ 3 часа",
    features: ["Оборудование", "Промышленные грузы", "Длинномеры", "Выезд +1 час к стоимости"],
    popular: false
  },
  {
    type: "Грузовик до 10т",
    emoji: "🚛",
    image: "https://cdn.poehali.dev/files/077b809c-4af2-4b49-a707-d6a283a921aa.png",
    capacity: "до 10000 кг",
    dimensions: "8×2.4×2.5 м",
    price: "3500₽/час",
    minOrder: "мин. заказ 4 часа",
    features: ["Тяжелые грузы", "Манипулятор", "Гидроборт", "Выезд +1 час к стоимости"],
    popular: false
  },
  {
    type: "Фура до 20т",
    emoji: "🚚",
    image: "https://cdn.poehali.dev/files/ef37edc2-ecb4-4230-86a4-86e8e818582d.png",
    capacity: "до 20000 кг",
    dimensions: "13.6×2.45×2.7 м",
    price: "4500₽/час",
    minOrder: "мин. заказ 4 часа",
    features: ["Межгород", "Большие объемы", "Европаллеты", "Выезд +1 час к стоимости"],
    popular: false
  }
];

export const additionalServices = [
  {
    service: "Грузчики",
    emoji: "💪",
    price: "800₽/час за человека",
    description: "Мин. время 4 часа",
    features: ["Подъем на этаж", "Упаковка", "Разборка/сборка мебели"]
  },
  {
    service: "Гидроборт",
    emoji: "⬆️",
    price: "+1 час к стоимости",
    description: "Механизированная погрузка",
    features: ["До 1.5 тонн", "Паллеты", "Тяжелые грузы"]
  },
  {
    service: "Рокла (тележка)",
    emoji: "🛒",
    price: "+1 час к стоимости",
    description: "Перемещение паллет",
    features: ["Складские работы", "Паллеты", "Тяжелые коробки"]
  },
  {
    service: "Упаковка",
    emoji: "📦",
    price: "от 200₽ за предмет",
    description: "Защитная упаковка груза",
    features: ["Пленка", "Картон", "Пузырчатая пленка"]
  },
  {
    service: "Подъем на этаж",
    emoji: "🏢",
    price: "от 50₽ за этаж",
    description: "Без лифта",
    features: ["Осторожная переноска", "Любой этаж", "Надежно"]
  },
  {
    service: "Экспресс подача",
    emoji: "⚡",
    price: "+1 час к стоимости",
    description: "Подача за 30 минут",
    features: ["Срочные заказы", "24/7", "Приоритет"]
  },
  {
    service: "Такелажники",
    emoji: "🔧",
    price: "1100₽/час за человека",
    description: "Мин. время 4 часа",
    features: ["Тяжелое оборудование", "Сложные работы", "Профессионалы"]
  }
];

export const regionTariffs = [
  {
    direction: "Москва → Подмосковье",
    emoji: "🗺️",
    distance: "",
    price: "от 35₽/км",
    features: ["Туда-обратно", "Ожидание включено", "Любой тоннаж"]
  },
  {
    direction: "Межгород по России",
    emoji: "🚗",
    distance: "от 100 км",
    price: "от 25₽/км",
    features: ["Предоплата 50%", "Возврат порожняком", "Документы"]
  }
];

export const categories = [
  { id: "transport", label: "Все авто", icon: "Truck" },
  { id: "services", label: "Услуги", icon: "Settings" },
  { id: "regions", label: "Межгород", icon: "MapPin" }
];