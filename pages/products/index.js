import { useEffect, useState } from "react";
import { callApi } from "../utils/api";
import Image from "next/image";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    callApi("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  console.log("products", products);

  return (
    <div>
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
}

function Product({ product }) {
  return (
    <div key={product.id}>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <Image src={product.image} width={100} height={100} alt={product.title} />
    </div>
  );
}
