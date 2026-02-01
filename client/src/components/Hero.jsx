import sneakersImg from "../assets/White-Sneakers-PNG-Clipart 1.svg";

export default function Hero() {
  return (
    <section className="bg-[#F5F5F5] py-8 px-4 md:py-12 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden">
      {/* Lado Esquerdo: Conteúdo */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left mt-8 md:mt-0">
        <span className="text-warning font-bold text-sm block">
          Melhores ofertas personalizadas
        </span>
        <h1 className="text-3xl md:text-6xl font-extrabold text-gray-800">
          Queima de estoque Digital Sport!
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Consequat culpa exercitante mollit minim gruitad minim aliquip nostrud
          do adidipisicing elit.
        </p>
        <button className="w-full md:w-auto bg-primary text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition-opacity">
          Ver Ofertas
        </button>
      </div>

      {/* Lado Direito: Imagem do Tênis - Adicionado 'relative' aqui */}
      <div className="relative w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        {/* Brilho de fundo agora contido pelo 'relative' pai */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <img
          src={sneakersImg} // Usando a variável do import
          alt="Tênis em destaque"
          className="relative z-10 w-4/5 md:w-[120%] max-w-none -rotate-12 transition-transform duration-500 hover:rotate-0"
        />
      </div>
    </section>
  );
}
