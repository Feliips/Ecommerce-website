import logoFooter from "../assets/logo-footer.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-16 px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Coluna 1: Logo e Social */}
        <div className="flex flex-col items-center md:items-start col-span-1 md:col-span-1.5">
          <img src={logoFooter} alt="Digital Store" className="h-8 mb-4" />
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex gap-6">
            <a href="#">
              <img src={facebook} alt="Facebook" className="w-6" />
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram" className="w-6" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" className="w-6" />
            </a>
          </div>
        </div>

        {/* Coluna 2: Informações */}
        <div>
          <h4 className="font-bold text-lg mb-6">Informações</h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Segurança
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Categorias */}
        <div>
          <h4 className="font-bold text-lg mb-6">Categorias</h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Camisetas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Calças
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Bonés
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Tênis
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div>
          <h4 className="font-bold text-lg mb-6">Contato</h4>
          <p className="text-gray-400 mb-4">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161
          </p>
          <p className="text-gray-400">(85) 3051-3411</p>
        </div>
      </div>

      <hr className="border-gray-800 my-10" />

      <p className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Digital Store
      </p>
    </footer>
  );
}
