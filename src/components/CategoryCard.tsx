import React from "react";

interface CategoryCardProps {
  title: string;
  subtitle: string;
  images: string[];
  imageAlt: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  subtitle,
  images,
  imageAlt,
}) => {
  return (
    <div className="bg-gradient-to-b from-amber-600 to-amber-700 rounded-xl p-6 shadow-lg mb-6 mx-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-white mb-2 font-montserrat">
          {title}
        </h2>
        <p className="text-amber-100 text-lg font-medium">{subtitle}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`${imageAlt} ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
