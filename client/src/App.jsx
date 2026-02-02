import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import useNavigation from "./hooks/useNavigation";
import Footer from "./components/Footer";

export default function App() {
  const { activePage, navigateTo } = useNavigation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage={activePage} navigateTo={navigateTo} />
      <main>
        {/* Lógica de renderização condicional */}
        {activePage === "Home" && <HomePage />}
        {activePage === "Produtos" && (
          <div className="p-20 text-center text-2xl">
            Página de Produtos em construção... 👟
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
