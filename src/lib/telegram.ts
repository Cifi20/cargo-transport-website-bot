interface OrderData {
  name: string;
  phone: string;
  carType: string;
  loaders: string;
  date: string;
  needHydroboard: string;
  needRokla: string;
}

export const sendToTelegram = async (
  orderData: OrderData,
): Promise<boolean> => {
  try {
    // Формируем сообщение
    const message = `🚚 *Новая заявка на грузоперевозку*

👤 *Имя:* ${orderData.name}
📞 *Телефон:* ${orderData.phone}
🚛 *Тип автомобиля:* ${getCarTypeName(orderData.carType)}
👷 *Грузчики:* ${getLoadersText(orderData.loaders)}
📅 *Дата и время:* ${formatDate(orderData.date)}
🏗️ *Гидроборт:* ${orderData.needHydroboard === "yes" ? "Требуется" : "Не требуется"}
📦 *Рокла:* ${orderData.needRokla === "yes" ? "Требуется" : "Не требуется"}


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
  };
  return types[value] || value;
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
