import logoHeader from "../assets/logo-header.svg";
import miniCart from "../assets/mini-cart.svg";
import { Search } from "lucide-react";

export default function Header({ activePage, navigateTo, setSearchTerm }) {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Produtos", path: "/produtos" },
    { name: "Categorias", path: "/categorias" },
    { name: "Meus Pedidos", path: "/meus-pedidos" },
  ];

  return (
    <header className="bg-white shadow-sm px-4 md:px-20 py-6 flex flex-col gap-8">
      {/* Linha Superior: Logo, Busca e Ações */}
      <div className="flex justify-between items-center gap-8">
        <img src={logoHeader} alt="Digital Store" className="h-8 md:h-10" />

        <div className="relative flex-1 max-w-lg hidden md:block">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-100 p-3 pr-12 rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        <div className="flex gap-4 md:gap-8 items-center">
          <button className="text-dark-gray-2 underline hover:text-dark-gray transition-colors text-sm md:text-base">
            Cadastre-se
          </button>
          <button className="bg-primary text-white px-8 py-2 rounded-lg font-bold hover:opacity-90 transition-all text-sm md:text-base">
            Entrar
          </button>

          <div className="relative cursor-pointer">
            <img src={miniCart} alt="Carrinho" className="w-8 h-8" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Linha Inferior: Navegação (Conforme o Figma) */}
      <nav className="flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = activePage === link.name;
          return (
            <button
              key={link.name}
              onClick={() => navigateTo(link.name)}
              className={`
                text-base font-medium transition-all duration-300 relative pb-1
                ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-dark-gray-2 hover:text-primary"
                }
              `}
            >
              {link.name}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
