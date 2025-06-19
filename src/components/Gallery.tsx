import React from "react";

const Gallery = () => {
  const works = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      title: "Стенд в холле жилого дома",
      description: "Информационный стенд с рекламой местных услуг",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      title: "Реклама в лифте",
      description: "Яркие постеры в лифтовой кабине",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      title: "Настенная реклама",
      description: "Размещение на стенах подъезда",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      title: "Информационная доска",
      description: "Постоянный стенд для объявлений",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
      title: "Реклама на почтовых ящиках",
      description: "Размещение малых форматов",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400&h=300&fit=crop",
      title: "Световой короб",
      description: "Подсвеченная реклама в холле",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      title: "Реклама у входа",
      description: "Размещение при входе в подъезд",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      title: "Стенд услуг",
      description: "Информация о местных предприятиях",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      title: "Тематическая реклама",
      description: "Сезонные рекламные кампании",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      title: "Комплексное размещение",
      description: "Несколько форматов в одном доме",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши работы</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Примеры успешно реализованных проектов по размещению рекламы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-600">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
