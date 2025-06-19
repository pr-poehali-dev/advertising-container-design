import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Реклама в подъездах
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Эффективное размещение рекламы в жилых домах. Достигните целевую
            аудиторию там, где она живет!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Заказать размещение
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Посмотреть работы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
