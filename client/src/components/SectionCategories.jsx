import { Shirt, Footprints, Watch, Headphones, Smartphone } from "lucide-react";

import { normalizeText } from "../services/textUtils";

export default function SectionCategories({ activeCategory, onCategoryClick }) {

  const categories = [
    { name: "Camisetas", icon: Shirt },
    { name: "Calças", icon: Shirt },
    { name: "Bonés", icon: Smartphone },
    { name: "Headphones", icon: Headphones },
    { name: "Tênis", icon: Footprints },
  ];

  return (
    <section className="py-12 px-4 md:px-20 bg-white">
      <h2 className="text-2xl font-bold text-dark-gray-2 mb-8 text-left">
        Categorias em destaque
      </h2>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {categories.map((cat, index) => {
          const isActive =
            normalizeText(activeCategory) === normalizeText(cat.name);
          const Icon = cat.icon;

          return (
            <div
              key={index}
              onClick={() => onCategoryClick(normalizeText(cat.name))}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div
                className={`
                w-24 h-24 rounded-full flex items-center justify-center shadow-md transition-all border
                ${
                  isActive
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-light-gray border-light-gray-3 group-hover:text-primary group-hover:shadow-lg"
                }
              `}
              >
                <Icon
                  size={40}
                  className={cat.name === "Calças" ? "rotate-90" : ""}
                />
              </div>

              <span
                className={`
                text-sm font-bold transition-colors
                ${isActive ? "text-primary" : "text-dark-gray-2 group-hover:text-primary"}
              `}
              >
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}