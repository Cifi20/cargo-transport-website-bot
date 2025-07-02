import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Здравствуйте! Как могу помочь с грузоперевозками?",
      sender: "support",
      time: new Date().toLocaleTimeString().slice(0, 5),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const autoResponses = [
    "Спасибо за обращение! Мы рассчитаем стоимость и свяжемся с вами в течение 5 минут.",
    "Для более точного расчета укажите, пожалуйста, откуда и куда нужно доставить груз?",
    "Отличный выбор! Наши менеджеры уже подбирают оптимальный вариант доставки.",
    "Мы работаем круглосуточно. Ваша заявка принята в обработку!",
  ];

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: "user" as const,
      time: new Date().toLocaleTimeString().slice(0, 5),
    };

    setMessages([...messages, newMessage]);
    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const response = {
        id: messages.length + 2,
        text: autoResponses[Math.floor(Math.random() * autoResponses.length)],
        sender: "support" as const,
        time: new Date().toLocaleTimeString().slice(0, 5),
      };
      setMessages((prev) => [...prev, response]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-xl animate-bounce"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col animate-fade-in">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">Онлайн поддержка</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Напишите сообщение..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                onClick={sendMessage}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-2 text-center space-y-1">
              <div className="text-blue-600 text-sm flex items-center justify-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+7 999 592 5155</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
