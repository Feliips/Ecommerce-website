import ProductCard from "./ProductCard";

export default function ProductListing({ products }) {
  return (
    <div className="flex flex-wrap -mx-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
