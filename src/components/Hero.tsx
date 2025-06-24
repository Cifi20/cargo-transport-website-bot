import { ArrowRight, Calculator, MessageCircle, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-600 via-blue-700 to-orange-600 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Городские и междугородние
              <span className="text-orange-300"> перевозки</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Профессиональная доставка грузов любого типа с продвинутым
              калькулятором стоимости и поддержкой 24/7
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center">
                Рассчитать стоимость
                <Calculator className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center">
                Получить консультацию
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

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

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <Truck className="h-16 w-16 text-orange-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Быстрый расчет</h3>
                <p className="text-blue-100">Узнайте стоимость прямо сейчас</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Откуда
                  </label>
                  <input
                    type="text"
                    placeholder="Город отправления"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Куда</label>
                  <input
                    type="text"
                    placeholder="Город назначения"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Вес (кг)
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Объем (м³)
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
