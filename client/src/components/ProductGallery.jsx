import { useState } from "react";

export default function ProductGallery({ images }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Imagem Principal */}
      <div className="bg-[#EFEFEF] rounded-[16px] aspect-square flex items-center justify-center p-10">
        <img
          src={images[activeImage]}
          alt="Produto"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Miniaturas */}
      <div className="flex gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-[117px] h-[95px] rounded-[16px] bg-[#EFEFEF] border-2 transition-all flex items-center justify-center p-2 ${
              index === activeImage ? "border-[#FFB31F]" : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt={`Ângulo ${index}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
