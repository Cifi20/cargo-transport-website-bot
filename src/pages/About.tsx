import Header from "@/components/Header";
import { Users, Target, Award, Truck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">О компании</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 15 лет успешной работы в сфере грузоперевозок и логистики
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Наша история
            </h2>
            <p className="text-gray-600 mb-4">
              ГрузЛогистика была основана в 2008 году с целью предоставления
              качественных и надежных услуг грузоперевозок. За годы работы мы
              выросли из небольшой компании в ведущего игрока на рынке
              логистических услуг.
            </p>
            <p className="text-gray-600">
              Сегодня мы обслуживаем более 1000 клиентов по всей России,
              выполняя свыше 10000 перевозок ежегодно.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Наши достижения</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6" />
                <span>Лидер отрасли 2023</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6" />
                <span>Более 100 единиц техники</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6" />
                <span>Команда из 200+ специалистов</span>
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
              Стать лучшей логистической компанией России, устанавливая новые
              стандарты качества.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
