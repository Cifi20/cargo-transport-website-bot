import Header from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Как рассчитывается стоимость перевозки?",
      answer:
        "Стоимость зависит от расстояния, веса груза, типа транспорта и дополнительных услуг. Используйте наш калькулятор для предварительного расчета.",
    },
    {
      question: "Какие документы нужны для отправки груза?",
      answer:
        "Необходимы: накладная, паспорт отправителя, опись груза. При необходимости - дополнительные разрешения для специальных грузов.",
    },
    {
      question: "Как отследить местонахождение груза?",
      answer:
        "Используйте номер накладной в разделе 'Отслеживание' на нашем сайте или позвоните нашему диспетчеру.",
    },
    {
      question: "Предоставляете ли вы страхование груза?",
      answer:
        "Да, мы предлагаем несколько видов страхования: от базового до полного покрытия стоимости груза.",
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer:
        "Принимаем наличные, банковские переводы, оплату картой и работаем с НДС для юридических лиц.",
    },
    {
      question: "Работаете ли вы в выходные дни?",
      answer:
        "Диспетчерская служба работает круглосуточно. Офис работает в выходные с 10:00 до 16:00.",
    },
    {
      question: "Какой максимальный вес груза вы перевозите?",
      answer:
        "Стандартно до 25 тонн. Для грузов свыше этого веса используем специальную технику - расчет индивидуальный.",
    },
    {
      question: "Есть ли скидки для постоянных клиентов?",
      answer:
        "Да, предоставляем скидки от 5% до 15% в зависимости от объема перевозок и длительности сотрудничества.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h1>
          <p className="text-xl text-gray-600">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-6"
              >
                <AccordionTrigger className="text-left py-6 text-lg font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="text-lg mb-6">
            Свяжитесь с нами, и мы с радостью поможем!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Позвонить нам
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Написать в чат
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
