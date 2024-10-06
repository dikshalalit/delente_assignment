import { useEffect, useState } from "react";
import { callApi } from "../utils/api";
import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";
import Loader from "../component/loader";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    callApi("https://fakestoreapi.com/products", "GET")
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="app_container">
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className={`app_container ${style.product_container}`}>
          {products.length &&
            products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
        </div>
      )}
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
