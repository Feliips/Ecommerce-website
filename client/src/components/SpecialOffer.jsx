// src/components/SpecialOffer.jsx
import shoeImg from "../assets/Laye 1.svg";

export default function SpecialOffer() {
  return (
    <section className="py-12 px-4 md:px-20 bg-white flex flex-col md:flex-row items-center gap-10 overflow-hidden">
      {/* 1. Lado Visual: O "Palco" do Produto */}
      <div className="w-full md:w-1/2 relative flex justify-center items-center h-[350px] md:h-[550px]">
        {/* Elipse de Fundo com o Gradiente do Figma */}
        <div
          className="absolute w-80 h-80 md:w-[466px] md:h-[466px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(66, 0, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>

        {/* Imagem do Air Jordan com Sombra de Profundidade */}
        <img
          src={shoeImg}
          alt="Air Jordan Especial"
          className="relative z-10 w-full max-w-sm md:max-w-xl drop-shadow-[0_50px_50px_rgba(0,0,0,0.1)] md:-rotate-12 transition-transform duration-500 hover:rotate-0"
        />
      </div>

      {/* 2. Lado de Informação: Copy e CTA */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
        <span className="text-primary font-bold text-sm tracking-[0.75px] uppercase">
          Oferta especial
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-dark-gray-2 leading-tight tracking-[1px]">
          Air Jordan edição de <br className="hidden md:block" /> colecionador
        </h2>

        <p className="text-dark-gray-2 text-base md:text-lg leading-[28px] tracking-[0.75px] max-w-md">
          Aproveite esta oportunidade única de adquirir um ícone do basquete com
          acabamento premium e design exclusivo que só a Digital Store oferece.
        </p>

        {/* Botão Padronizado Rosa (Primary) */}
        <button className="bg-primary text-white px-10 py-3 rounded-lg font-bold text-base hover:opacity-90 transition-all shadow-md mt-4">
          Ver Oferta
        </button>
      </div>
    </section>
  );
}
