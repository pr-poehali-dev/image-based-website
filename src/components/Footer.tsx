import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <Icon name="Utensils" size={32} className="text-amber-200 mr-3" />
          <h3 className="text-2xl font-bold font-montserrat">Душа Руси</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h4 className="font-semibold mb-2 text-amber-200">Меню</h4>
            <p className="text-sm text-amber-100">Завтраки • Обеды • Ужины</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-amber-200">Доставка</h4>
            <p className="text-sm text-amber-100">Быстрая доставка по городу</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-amber-200">
              Местоположение
            </h4>
            <p className="text-sm text-amber-100">
              Центр города • Удобное расположение
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <Icon name="Phone" size={20} className="text-amber-200" />
          <Icon name="Mail" size={20} className="text-amber-200" />
          <Icon name="MapPin" size={20} className="text-amber-200" />
        </div>

        <p className="text-xs text-amber-200">
          *Контакты для заказа и вопросов о доставке
        </p>
      </div>
    </footer>
  );
};

export default Footer;
