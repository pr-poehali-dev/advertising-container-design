import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              ПАРАДНАЯ РЕКЛАМА
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Мы специализируемся на размещении рекламы в жилых домах уже более
              10 лет. Наша миссия — помочь бизнесу найти своих клиентов там, где
              они проводят большую часть времени.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Работаем с управляющими компаниями, ТСЖ и собственниками
              недвижимости. Гарантируем качественное размещение и своевременное
              обслуживание рекламных материалов.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Домов в портфеле</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  10+
                </div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  1000+
                </div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
              alt="Офис компании"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">Профессионально</div>
              <div>с 2014 года</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
