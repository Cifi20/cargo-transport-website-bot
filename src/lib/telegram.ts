interface OrderData {
  name: string;
  phone: string;
  carType: string;
  loaders: string;
  date: string;
  needHydroboard: string;
  needRokla: string;
  cargoType: string;
  cargoQuantity: string;
  cargoWeight: string;
  loadingAddress: string;
  unloadingAddress: string;
  loadingFloor: string;
  unloadingFloor: string;
}

export const sendToTelegram = async (
  orderData: OrderData,
): Promise<boolean> => {
  try {
    // Формируем сообщение
    const message = `🚚 *Новая заявка на грузоперевозку*

*👤 КЛИЕНТ:*
• Имя: ${orderData.name}
• Телефон: ${orderData.phone}
• Дата и время: ${formatDate(orderData.date)}

*📦 ГРУЗ:*
• Тип груза: ${getCargoTypeName(orderData.cargoType)}
• Количество: ${orderData.cargoQuantity || "Не указано"}
• Примерный вес: ${orderData.cargoWeight ? orderData.cargoWeight + " кг" : "Не указан"}

*🚛 ТРАНСПОРТ:*
• Тип автомобиля: ${getCarTypeName(orderData.carType)}
• Грузчики: ${getLoadersText(orderData.loaders)}
• Гидроборт: ${orderData.needHydroboard === "yes" ? "Требуется" : "Не требуется"}
• Рокла: ${orderData.needRokla === "yes" ? "Требуется" : "Не требуется"}

*📍 АДРЕСА:*
• Загрузка: ${orderData.loadingAddress || "Не указан"}
• Поэтажка загрузки: ${getFloorText(orderData.loadingFloor)}
• Выгрузка: ${orderData.unloadingAddress || "Не указан"}
• Поэтажка выгрузки: ${getFloorText(orderData.unloadingFloor)}

_Заявка отправлена с сайта_`;

    // Отправляем через Telegram Bot API
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn("Telegram credentials not configured");
      return false;
    }

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      },
    );

    return response.ok;
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return false;
  }
};

const getCarTypeName = (value: string): string => {
  const types: Record<string, string> = {
    "0.5": "Каблук 0.5т",
    "1.5": "Газель 1.5т",
    "3": "Грузовик 3т",
    "5": "Грузовик 5т",
    "10": "Грузовик 10т",
    "20": "Фура 20т",
  };
  return types[value] || value || "Не указан";
};

const getCargoTypeName = (value: string): string => {
  const types: Record<string, string> = {
    "furniture": "Мебель",
    "appliances": "Бытовая техника",
    "construction": "Стройматериалы",
    "food": "Продукты питания",
    "documents": "Документы",
    "equipment": "Оборудование",
    "personal": "Личные вещи",
    "other": "Другое",
  };
  return types[value] || value || "Не указан";
};

const getFloorText = (value: string): string => {
  const floors: Record<string, string> = {
    "ground": "1 этаж / Земля",
    "elevator": "Высокий этаж + лифт",
    "stairs-2": "2 этаж без лифта",
    "stairs-3": "3 этаж без лифта",
    "stairs-4": "4 этаж без лифта",
    "stairs-5plus": "5+ этаж без лифта",
  };
  return floors[value] || value || "Не указано";
};

const getLoadersText = (value: string): string => {
  if (value === "0") return "Не требуются";
  if (value === "1") return "1 грузчик";
  return `${value} грузчика`;
};

const formatDate = (dateString: string): string => {
  if (!dateString) return "Не указана";

  const date = new Date(dateString);
  return date.toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};