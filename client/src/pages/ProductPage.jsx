import { getProducts } from "../services/productService";
import { formatPrice } from "../utils/format";

export default function ProductPage({ searchTerm }) {
  const allProducts = getProducts();

  // Filtramos os produtos com base no termo de busca vindo do App.jsx
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="p-4 md:p-20 bg-gray-50 flex-1">
      <h2 className="text-2xl font-bold mb-8 text-dark-gray-2">
        {searchTerm ? `Resultados para "${searchTerm}"` : "Todos os Produtos"}
      </h2>

      <div className="flex flex-wrap -mx-2">
        {filteredProducts.map((product) => {
          const finalPrice =
            product.price * (1 - (product.discount || 0) / 100);

          return (
            <div key={product.id} className="w-1/2 md:w-1/4 p-2 group">
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all relative border border-gray-100 h-full flex flex-col">
                {/* Tag de Oferta com a cor --color-discont do seu index.css */}
                {product.discount > 0 && (
                  <span className="absolute top-4 left-4 bg-discont text-dark-gray font-bold px-3 py-1 rounded-full text-[10px] md:text-xs z-10">
                    {product.discount}% OFF
                  </span>
                )}

                {/* Área da Imagem */}
                <div className="bg-gray-100 rounded-md mb-4 flex items-center justify-center overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Categoria e Nome */}
                <p className="text-[10px] md:text-xs text-light-gray font-bold mb-1 uppercase">
                  {product.category}
                </p>

                <h3 className="text-dark-gray-2 text-sm md:text-lg mb-2 flex-grow">
                  {product.name}
                </h3>

                {/* Container de preços: Coluna invertida no mobile, Linha no desktop */}
                <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-1 xl:gap-2">
                  {/* Preço Atual (Destaque) */}
                  <span className="text-dark-gray font-bold text-base md:text-xl whitespace-nowrap">
                    {formatPrice(finalPrice)}
                  </span>

                  {/* Preço Original (Acima no mobile, ao lado no desktop) */}
                  {product.discount > 0 && (
                    <span className="text-light-gray line-through text-xs md:text-sm whitespace-nowrap">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
