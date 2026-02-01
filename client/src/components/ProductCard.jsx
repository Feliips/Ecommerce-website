import starIcon from "../assets/star-icon.svg";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
      {/* 1. Área da Imagem e Badge */}
      <div className="bg-[--color-surface] rounded-lg mb-4 flex justify-center p-4 relative overflow-hidden">
        {product.discount > 0 && (
          <span className="absolute top-2 left-2 bg-[#E7FF8D] text-xs font-bold px-3 py-1 rounded-full">
            {product.discount}% OFF
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* 2. Informações */}
      <span className="text-xs font-bold text-gray-400 uppercase">
        {product.category}
      </span>
      <h3 className="font-bold text-gray-800 text-lg mb-1">{product.name}</h3>
      
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <img key={index} src={starIcon} alt="estrela" className="w-4 h-4" />
        ))}
      </div>

      {/* 3. Preços */}
      <div className="flex gap-2 items-center">
        {product.oldPrice && (
          <p className="text-gray-400 line-through text-sm">
            R$ {product.oldPrice}
          </p>
        )}
        <p className="text-dark-gray font-bold text-xl">R$ {product.price}</p>
      </div>
    </div>
  );
}
