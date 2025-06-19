import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              ПАРАДНАЯ РЕКЛАМА
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Наши работы
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Контакты
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
