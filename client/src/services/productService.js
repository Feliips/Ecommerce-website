// client/src/services/productService.js

const products = [
  {
    id: 1,
    name: "K-Swiss V8 - Masculino",
    price: 299.90,
    image: "/product-thumb-1.jpeg",
    category: "Tênis",
    discount: 30
  },
  {
    id: 2,
    name: "K-Swiss V8 - Feminino",
    price: 249.90,
    image: "/product-thumb-2.jpeg",
    category: "Tênis",
    discount: 0
  },
  {
    id: 3,
    name: "Tênis Nike Revolution",
    price: 399.90,
    image: "/product-thumb-3.jpeg",
    category: "Chuteiras",
    discount: 10
  },
  {
    id: 4,
    name: "Adidas Ultraboost",
    price: 899.90,
    image: "/product-thumb-4.jpeg",
    category: "Corrida",
    discount: 0
  },
  {
    id: 5,
    name: "Puma RS-X",
    price: 549.90,
    image: "/product-thumb-5.jpeg",
    category: "Casual",
    discount: 20
  }
];

export const getProducts = () => {
  return products;
};