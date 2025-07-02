import { useState } from "react";
import { MessageCircle, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Здравствуйте! Меня зовут Алексей, я помогу вам с вопросами о грузоперевозках. Что вас интересует?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "Рассчитать стоимость",
    "Виды грузов",
    "Сроки доставки",
    "Отследить груз",
    "Способы оплаты",
  ];

  const botResponses: { [key: string]: string } = {
    стоимость:
      "Стоимость зависит от расстояния, веса и типа груза. Воспользуйтесь нашим калькулятором для точного расчета!",
    груз: "Мы перевозим мебель, стройматериалы, оборудование и обычные грузы. Каждый тип имеет свой тариф.",
    доставка:
      "Городская доставка: 1-2 дня. Междугородняя: 3-7 дней в зависимости от расстояния.",
    отслеживание:
      'Для отслеживания груза введите номер накладной в разделе "Отслеживание".',
    оплата:
      "Принимаем наличные, банковские карты, безналичный расчет и электронные платежи.",
    default:
      "Извините, я не понял ваш вопрос. Попробуйте выбрать один из вариантов ниже или переформулируйте вопрос.",
  };

  const sendMessage = (text: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Имитация задержки ответа бота
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userText: string): string => {
    const text = userText.toLowerCase();

    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== "default" && text.includes(key)) {
        return response;
      }
    }

    return botResponses.default;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Кнопка открытия чата */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Окно чата */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Заголовок */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=40&h=40&fit=crop&crop=face&auto=format"
                  alt="Алексей"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">Алексей</div>
                <div className="text-xs text-blue-100">
                  Помощник по грузоперевозкам
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>

          {/* Сообщения */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === "bot" && (
                      <div className="w-6 h-6 rounded-full bg-white overflow-hidden flex items-center justify-center flex-shrink-0 mt-1">
                        <img
                          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=24&h=24&fit=crop&crop=face&auto=format"
                          alt="Алексей"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                    {message.sender === "user" && (
                      <User className="h-4 w-4 mt-1 flex-shrink-0" />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-white overflow-hidden flex items-center justify-center flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=24&h=24&fit=crop&crop=face&auto=format"
                        alt="Алексей"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Быстрые ответы */}
          <div className="p-2 border-t">
            <div className="flex flex-wrap gap-1 mb-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full transition-colors duration-200"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Поле ввода */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" &&
                  inputText.trim() &&
                  sendMessage(inputText)
                }
                placeholder="Задайте вопрос..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={() => inputText.trim() && sendMessage(inputText)}
                disabled={!inputText.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors duration-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
