export default function FeaturedCollections({ collections }) {
  if (!collections || collections.length === 0) return null;

  return (
    <section className="py-12 px-4 md:px-20 bg-white">
      <h2 className="text-2xl font-bold text-dark-gray mb-5">
        Coleções em destaque
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {collections.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden h-64 rounded-xl group cursor-pointer bg-[#F5F5F5] transition-shadow hover:shadow-md"
          >
            {/* Camada de Conteúdo (Desconto e Botão) */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between items-start">
              <span className="bg-[#E7FF8D] text-dark-gray-2 text-[10px] md:text-xs font-bold px-4 py-2 rounded-full uppercase shadow-sm">
                {item.discount}
              </span>

              <button className="bg-white text-primary font-bold py-2 px-8 rounded-lg hover:bg-primary hover:text-white transition-all shadow-sm text-sm">
                Comprar
              </button>
            </div>

            {/* Imagem que já contém os textos (ocupando o fundo) */}
            <img
              src={item.image}
              alt="Destaque da coleção"
              className="absolute inset-0 w-full h-full object-contain md:object-cover z-10 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
