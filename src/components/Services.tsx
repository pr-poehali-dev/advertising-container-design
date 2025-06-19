import React from "react";

const Services = () => {
  const services = [
    {
      title: "Размещение в подъездах",
      description: "Стенды и плакаты в холлах и на лестничных площадках",
      icon: "🏠",
    },
    {
      title: "Реклама в лифтах",
      description: "Эффективные форматы в замкнутом пространстве",
      icon: "🛗",
    },
    {
      title: "Информационные стенды",
      description: "Постоянные конструкции для долгосрочного размещения",
      icon: "📋",
    },
    {
      title: "Почтовые ящики",
      description: "Размещение рекламы на почтовых ящиках",
      icon: "📬",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши услуги</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предлагаем полный спектр услуг по размещению рекламы в жилых домах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
