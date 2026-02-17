import { Link } from "react-router-dom";
import api from "../services/api";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import SectionCategories from "../components/SectionCategories";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { normalizeText } from "../services/textUtils";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const [collections, setCollections] = useState([
    {
      title: "Novo drop Supreme",
      discount: "30% OFF",
      image: "/collection-1.png",
      bg: "bg-[#D8E3F2]",
    },
    {
      title: "Coleção Adidas",
      discount: "30% OFF",
      image: "/collection-2.png",
      bg: "bg-[#F5E1A4]",
    },
    {
      title: "Novo Beats Bass",
      discount: "30% OFF",
      image: "/collection-3.png",
      bg: "bg-[#F5F5F5]",
    },
  ]);

  // O filtro começa vazio para mostrar todos os produtos
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Busca os produtos da API
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Lógica da função de clique: se for a mesma, limpa; se for nova, define
  const handleCategoryClick = (categoryName) => {
    const normalizedName = normalizeText(categoryName);
    if (filter === normalizedName) {
      setFilter("");
    } else {
      setFilter(normalizedName);
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
      <FeaturedCollections collections={collections} />

      {/* Enviamos o estado atual e a nossa nova função de clique */}
      <SectionCategories
        activeCategory={filter}
        onCategoryClick={handleCategoryClick}
      />

      <section className="p-8 px-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {filter === "" ? "Produtos em alta" : `Resultados para: ${filter}`}
          </h2>
          <Link
            to="/produtos"
            className="text-primary hover:underline flex items-center gap-2"
          >
            Ver todos <span className="text-xl">→</span>
          </Link>
        </div>

        <div
          key={filter}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in"
        >
          {products.length > 0 ? (
            products
              .filter((product) =>
                filter ? normalizeText(product.category) === filter : true,
              )
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          ) : (
            <p className="col-span-full text-center py-10 text-gray-400">
              Nenhum produto encontrado nesta categoria. 👟
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
