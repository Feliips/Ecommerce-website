import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import useNavigation from "./hooks/useNavigation";
import Footer from "./components/Footer";

export default function App() {
  const { activePage, navigateTo } = useNavigation();

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        activePage={activePage}
        navigateTo={navigateTo}
        setSearchTerm={setSearchTerm}
      />
      <main>
        {activePage === "Home" && <HomePage />}
        {activePage === "Produtos" && <ProductPage searchTerm={searchTerm} />}
      </main>
      <Footer />
    </div>
  );
}
