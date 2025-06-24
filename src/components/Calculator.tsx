import { useState } from "react";
import { Calculator as CalcIcon, Plus, Minus, X, Divide } from "lucide-react";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [variables, setVariables] = useState<{ [key: string]: number }>({
    distance: 0,
    weight: 0,
    volume: 0,
    baseRate: 25,
  });

  const cargoTypes = [
    { name: "Мебель", multiplier: 1.2, icon: "🪑" },
    { name: "Стройматериалы", multiplier: 1.5, icon: "🧱" },
    { name: "Оборудование", multiplier: 1.8, icon: "⚙️" },
    { name: "Обычный груз", multiplier: 1.0, icon: "📦" },
  ];

  const cities = [
    { name: "Москва", type: "city" },
    { name: "Санкт-Петербург", type: "intercity" },
    { name: "Казань", type: "intercity" },
    { name: "Нижний Новгород", type: "intercity" },
    { name: "Екатеринбург", type: "intercity" },
  ];

  const builtInFunctions = {
    sqrt: (x: number) => Math.sqrt(x),
    pow: (x: number, y: number) => Math.pow(x, y),
    max: (...args: number[]) => Math.max(...args),
    min: (...args: number[]) => Math.min(...args),
    round: (x: number) => Math.round(x),
    ceil: (x: number) => Math.ceil(x),
    floor: (x: number) => Math.floor(x),
  };

  const calculatePrice = () => {
    try {
      let formula = `${variables.baseRate} * ${variables.distance} * ${variables.weight} * 0.1`;
      if (variables.volume > 0) {
        formula += ` + ${variables.volume} * 15`;
      }

      const price = eval(formula);
      setResult(`Стоимость: ${price.toFixed(2)} руб.`);
    } catch (error) {
      setResult("Ошибка в вычислениях");
    }
  };

  const evaluateExpression = () => {
    try {
      let expr = expression;

      // Заменяем переменные их значениями
      Object.entries(variables).forEach(([key, value]) => {
        expr = expr.replace(new RegExp(key, "g"), value.toString());
      });

      // Добавляем встроенные функции
      Object.entries(builtInFunctions).forEach(([name, func]) => {
        expr = expr.replace(
          new RegExp(`${name}\\((.*?)\\)`, "g"),
          (match, args) => {
            const argValues = args
              .split(",")
              .map((arg: string) => parseFloat(arg.trim()));
            return func(...argValues).toString();
          },
        );
      });

      const result = eval(expr);
      setResult(result.toString());
    } catch (error) {
      setResult("Ошибка");
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <CalcIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Продвинутый калькулятор
          </h2>
          <p className="text-xl text-gray-600">
            Расчет стоимости с поддержкой математических операций и переменных
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Калькулятор грузов */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Расчет стоимости перевозки
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Расстояние (км)
                  </label>
                  <input
                    type="number"
                    value={variables.distance}
                    onChange={(e) =>
                      setVariables({
                        ...variables,
                        distance: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Вес (кг)
                  </label>
                  <input
                    type="number"
                    value={variables.weight}
                    onChange={(e) =>
                      setVariables({
                        ...variables,
                        weight: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Объем (м³)
                </label>
                <input
                  type="number"
                  value={variables.volume}
                  onChange={(e) =>
                    setVariables({
                      ...variables,
                      volume: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Тип груза
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {cargoTypes.map((type) => (
                    <button
                      key={type.name}
                      onClick={() =>
                        setVariables({
                          ...variables,
                          baseRate: 25 * type.multiplier,
                        })
                      }
                      className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-center"
                    >
                      <div className="text-2xl mb-2">{type.icon}</div>
                      <div className="font-medium text-gray-900">
                        {type.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        ×{type.multiplier}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={calculatePrice}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Рассчитать стоимость
              </button>
            </div>
          </div>

          {/* Математический калькулятор */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Математические операции
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Выражение
                </label>
                <input
                  type="text"
                  value={expression}
                  onChange={(e) => setExpression(e.target.value)}
                  placeholder="distance * weight + volume * 15"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {["+", "-", "*", "/"].map((op) => (
                  <button
                    key={op}
                    onClick={() => setExpression(expression + op)}
                    className="py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200"
                  >
                    {op}
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Доступные переменные
                </label>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(variables).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between bg-gray-50 p-2 rounded"
                    >
                      <span className="font-medium">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Встроенные функции
                </label>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>sqrt(x), pow(x,y), max(...), min(...)</div>
                  <div>round(x), ceil(x), floor(x)</div>
                </div>
              </div>

              <button
                onClick={evaluateExpression}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Вычислить
              </button>

              {result && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-lg font-bold text-green-800">
                    {result}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
