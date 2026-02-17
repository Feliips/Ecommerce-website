import ProductCard from "./ProductCard";

export default function ProductListing({ products, layout = "grid" }) {
  // Definimos as classes com base na prop 'layout'
  const containerClasses =
    layout === "carousel"
      ? "flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x"
      : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6";

  return (
    <div className={containerClasses}>
      {products.map((product) => (
        <div
          key={product.id}
          className={layout === "carousel" ? "min-w-[250px] snap-start" : ""}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
