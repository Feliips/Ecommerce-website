import { useParams } from "react-router-dom";
import { getProducts } from "../services/productService";
import ProductGallery from "../components/ProductGallery";
import BuyBox from "../components/BuyBox";
import ProductListing from "../components/ProductListing";

export default function ProductDetailsPage() {
  const { id } = useParams(); // Pega o ID da URL
  const products = getProducts();

  // Busca o produto pelo ID (convertendo id da URL para número)
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-20 text-center">Produto não encontrado 👟</div>;
  }

  // Pegamos outros produtos para o carrossel (excluindo o atual)
  const related = products.filter((p) => p.id !== product.id);

  return (
    <main className="container mx-auto px-4 md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section>
          <ProductGallery
            images={[product.image, "/sapato2.png", "/sapato3.png"]}
          />
        </section>
        <section>
          {/* Agora o BuyBox pode ser dinâmico! */}
          <BuyBox product={product} />
        </section>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-bold text-dark-gray-2 mb-6">
          Produtos Relacionados
        </h2>
        <ProductListing products={related} layout="carousel" />
      </section>
    </main>
  );
}
