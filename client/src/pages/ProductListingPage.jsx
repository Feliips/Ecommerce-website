import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import { getProducts } from "../services/productService";

export default function ProductListingPage({ searchTerm }) {
  const allProducts = getProducts();

  const filterData = [
    {
      title: "Marca",
      inputType: "checkbox",
      options: [
        { text: "Adidas", value: "adidas" },
        { text: "Calvin Klein", value: "ck" },
        { text: "K-Swiss", value: "kswiss" },
        { text: "Nike", value: "nike" },
        { text: "Puma", value: "puma" },
      ],
    },
    {
      title: "Categoria",
      inputType: "checkbox",
      options: [
        { text: "Esporte e lazer" },
        { text: "Casual" },
        { text: "Utilitário" },
        { text: "Corrida" },
      ],
    },
    {
      title: "Gênero",
      inputType: "checkbox",
      options: [
        { text: "Masculino", value: "masculino" },
        { text: "Feminino", value: "feminino" },
        { text: "Unissex", value: "unissex" },
      ],
    },
  ];

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex flex-col md:flex-row p-4 md:px-20 md:py-10 gap-8 bg-gray-50">
      {/* Lado Esquerdo: Sidebar de Filtros */}
      <aside className="w-full md:w-1/4">
        <h3 className="font-bold text-dark-gray-2 mb-4 text-base">
          Filtrar por
        </h3>
        <hr className="border-light-gray-2 mb-6" />

        {filterData.map((grupo, index) => (
          <FilterGroup
            key={index}
            title={grupo.title}
            options={grupo.options}
            inputType={grupo.inputType}
          />
        ))}
      </aside>

      {/* Lado Direito: Título e Listagem */}
      <section className="flex-1">
        <Section
          title={
            searchTerm ? `Resultados para "${searchTerm}"` : "Todos os Produtos"
          }
        >
          <ProductListing products={filteredProducts} />
        </Section>
      </section>
    </div>
  );
}
