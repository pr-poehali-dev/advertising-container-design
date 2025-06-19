import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Готовы обсудить размещение вашей рекламы? Мы всегда на связи!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">ТЕЛ</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Телефон</h3>
            <p className="text-purple-100">+7 (495) 123-45-67</p>
            <p className="text-purple-100">+7 (495) 765-43-21</p>
          </div>

          <div>
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">MAIL</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-purple-100">info@paradnaya-reklama.ru</p>
            <p className="text-purple-100">zakaz@paradnaya-reklama.ru</p>
          </div>

          <div>
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">АДРЕС</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Адрес</h3>
            <p className="text-purple-100">г. Москва</p>
            <p className="text-purple-100">ул. Примерная, д. 123</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
