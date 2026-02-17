import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage"; // Importe a nova página
import Footer from "./components/Footer";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header setSearchTerm={setSearchTerm} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/produtos"
              element={<ProductListingPage searchTerm={searchTerm} />}
            />
            {/* Rota dinâmica para detalhes: o :id é o que identifica o produto */}
            <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
