import { useEffect, useState } from "react";
import { callApi } from "../utils/api";
import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    callApi("https://fakestoreapi.com/products", "GET")
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className={`app_container ${style.product_container}`}>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}

function Product({ product }) {
  return (
    <Link href={`/products/${product.id}`} className={style.product_card}>
      <Image src={product.image} width={100} height={100} alt={product.title} />
      <div>
        <p>{product.title}</p>
        <p>${product.price}</p>
      </div>
    </Link>
  );
}
