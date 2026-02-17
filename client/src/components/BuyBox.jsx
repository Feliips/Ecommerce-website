import ProductOptions from "./ProductOptions";

export default function BuyBox({ product }) {

  if (!product) return null;

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-bold text-dark-gray leading-tight">
          {product.name}
        </h1>
        <p className="text-sm text-light-gray-1 mt-2">
          {product.category} | Nike | REF:38416711
        </p>
      </header>

      <div className="flex items-center gap-3">
        <span className="text-2xl font-semibold text-dark-gray-2 tracking-tight">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </span>
        {product.discount > 0 && (
          <span className="text-sm text-gray-400 line-through">
            R$ {(product.price / (1 - product.discount / 100)).toFixed(2)}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm font-bold text-light-gray-1 mb-2 uppercase">
            Cores
          </p>
          <ProductOptions
            options={["#6FD4D9", "#FF5959", "#1F99FF"]}
            shape="circle"
            type="color"
          />
        </div>
        <div>
          <p className="text-sm font-bold text-light-gray-1 mb-2 uppercase">
            Tamanho
          </p>
          <ProductOptions
            options={["39", "40", "41", "42"]}
            shape="square"
            type="text"
            radius="4px"
          />
        </div>
      </div>

      <button className="w-full md:w-[220px] h-[48px] bg-[#FFB31F] text-white font-bold rounded-md hover:opacity-90 transition-all uppercase">
        Comprar
      </button>
    </div>
  );
}
