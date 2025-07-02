import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import TariffSection from "@/components/TariffSection";
import LoaderServices from "@/components/LoaderServices";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Truck, Clock, Users, Target, Award, Star, Quote } from "lucide-react";

const queryClient = new QueryClient();

const App = () => {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: "Автомобильные перевозки",
      description: "Доставка грузов любого объема по России и СНГ",
      features: ["До 20 тонн", "Срочная доставка", "Страхование"],
    },

    {
      icon: <Clock className="h-12 w-12 text-green-600" />,
      title: "Экспресс-доставка",
      description: "Быстрая доставка в течение 24 часов",
      features: ["Курьерская доставка", "Документы", "Малогабарит"],
    },
  ];

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
  ];

  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="bg-white">
          <Header />
          <Hero />
          <OrderForm />
          <Advantages />

          {/* About Section */}
          <section id="about" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  О компании
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Уже 8 лет успешной работы в сфере грузоперевозок и логистики
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <p className="text-gray-600 mb-4">
                    Мы практикуем индивидуальный подход к клиенту и комплексное
                    решение поставленных перед нами задач. Наша компания
                    специализируется на предоставлении высококачественных услуг
                    по грузоперевозкам, обеспечивая надежную и своевременную
                    доставку грузов любой сложности.
                  </p>
                  <p className="text-gray-600">
                    Опыт и профессионализм: Наша команда имеет многолетний опыт
                    в сфере грузоперевозок. Надежность и безопасность: Мы
                    гарантируем сохранность грузов благодаря современным
                    системам отслеживания и страхования.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Наши достижения</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Award className="h-6 w-6" />
                      <span>8 лет успешной работы</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Truck className="h-6 w-6" />
                      <span>Современный автопарк</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6" />
                      <span>Опытная команда</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Наша миссия
                  </h3>
                  <p className="text-gray-600">
                    Обеспечивать надежную и эффективную доставку грузов, помогая
                    бизнесу развиваться.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Наши ценности
                  </h3>
                  <p className="text-gray-600">
                    Честность, профессионализм, ответственность и индивидуальный
                    подход к каждому клиенту.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Наше видение
                  </h3>
                  <p className="text-gray-600">
                    Стать лучшей логистической компанией России, устанавливая
                    новые стандарты качества.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Наши услуги
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Полный спектр логистических услуг для вашего бизнеса
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <TariffSection />
          <LoaderServices />

          {/* Reviews Section */}
          <section id="reviews" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Отзывы клиентов
                </h2>
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
                  <span className="text-gray-600">
                    ({reviews.length} отзывов)
                  </span>
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
                        <h3 className="font-bold text-gray-900">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {review.company}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${review.rating >= star ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
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
            </div>
          </section>

          <Footer />
          <ChatBot />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
