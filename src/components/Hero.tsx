import { ArrowRight, Calculator, MessageCircle, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-600 via-blue-700 to-orange-600 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Грузоперевозки по Москве и МО
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Профессиональная доставка грузов любого типа с продвинутым
              калькулятором стоимости и поддержкой 24/7
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300">500+</div>
                <div className="text-blue-100">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300">24/7</div>
                <div className="text-blue-100">Поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300">99%</div>
                <div className="text-blue-100">Выполненных заказов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
