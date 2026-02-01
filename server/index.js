const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const products = [
  {
    id: 1,
    name: "Tênis Esportivo XYZ",
    price: 299.9,
    image: "/produc-image-1.jpeg",
  },
];

app.get("/", (req, res) => {
  res.json({ message: "API da Digital Store online!" });
});

app.get("/products", (req, res) => {
  const categoriaBuscada = req.query.category;

  if (categoriaBuscada) {
    const filtrados = products.filter((p) => p.category === categoriaBuscada);
    return res.json(filtrados);
  }

  res.json(products);
});