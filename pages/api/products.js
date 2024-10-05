const products = [
  {
    id: 1,
    name: "Chips",
    price: 109.95,
  },
  {
    id: 2,
    name: "Chocolate",
    price: 22.3,
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "POST") {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(products);
  }
}
