import Header from "@/components/Header";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Александр Петров",
      company: "ООО «Строймаркет»",
      rating: 5,
      date: "15.12.2024",
      text: "Отличная компания! Перевозили строительные материалы на объект. Все доставлено в срок, груз в целости и сохранности. Водитель профессиональный, вежливый. Обязательно обратимся снова.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Елена Смирнова",
      company: "ИП Смирнова Е.В.",
      rating: 5,
      date: "10.12.2024",
      text: "Пользуюсь услугами уже второй год. Всегда четко, быстро, без задержек. Цены адекватные, персонал отзывчивый. Особенно нравится система отслеживания груза.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Михаил Козлов",
      company: "ТД «Электроком»",
      rating: 4,
      date: "08.12.2024",
      text: "Хорошая логистическая компания. Несколько раз перевозили оборудование. Один раз была небольшая задержка, но менеджеры оперативно решили вопрос и предоставили компенсацию.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Анна Волкова",
      company: "Кафе «Уютное местечко»",
      rating: 5,
      date: "05.12.2024",
      text: "Регулярно заказываем доставку продуктов для кафе. ГрузЛогистика - надежный партнер. Соблюдают температурный режим, всегда вовремя. Рекомендую!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Дмитрий Орлов",
      company: "Мебельная фабрика «Комфорт»",
      rating: 5,
      date: "02.12.2024",
      text: "Доверяем перевозку мебели только им. Аккуратная погрузка, бережная транспортировка. За 3 года сотрудничества ни одного повреждения. Профессионалы своего дела!",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Светлана Белова",
      company: "Книжный магазин «Читай-город»",
      rating: 4,
      date: "28.11.2024",
      text: "Перевозили большую партию книг. Упаковали качественно, доставили без проблем. Единственное - хотелось бы более гибкие временные окна для получения груза.",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы клиентов
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Что говорят о нас наши клиенты
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 ${parseFloat(averageRating) >= star ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">
              {averageRating}
            </span>
            <span className="text-gray-600">({reviews.length} отзывов)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.company}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${review.rating >= star ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="h-6 w-6 text-gray-300 absolute -top-2 -left-1" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Поделитесь своим опытом</h2>
          <p className="text-lg mb-6">Ваш отзыв поможет нам стать лучше</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Оставить отзыв
          </button>
        </div>
      </main>
    </div>
  );
};

export default Reviews;
