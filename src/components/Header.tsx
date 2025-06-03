import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-amber-100 to-amber-50 py-6">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-amber-900 mb-2 font-montserrat">
          Душа Руси
        </h1>
        <p className="text-amber-700 text-lg">
          Меню • Доставка • Местоположение • О нас
        </p>
      </div>
    </header>
  );
};

export default Header;
