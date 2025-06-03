import React from "react";
import CategoryCard from "./CategoryCard";

const MenuSection = () => {
  const menuData = [
    {
      title: "ЗАВТРАК",
      subtitle: "КАШИ",
      images: [
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559892138-c7d072d5aef2?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=300&fit=crop",
      ],
      imageAlt: "Завтрак каши",
    },
    {
      title: "ОБЕД",
      subtitle: "СУПЫ",
      images: [
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=300&fit=crop",
      ],
      imageAlt: "Обеденные супы",
    },
    {
      title: "ОБЕД",
      subtitle: "РЫБА",
      images: [
        "https://images.unsplash.com/photo-1559847844-5315695dadae?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop",
      ],
      imageAlt: "Рыбные блюда",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen py-8">
      {menuData.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          subtitle={category.subtitle}
          images={category.images}
          imageAlt={category.imageAlt}
        />
      ))}
    </div>
  );
};

export default MenuSection;
