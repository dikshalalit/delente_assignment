import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Loader from "../component/loader";
import { useRouter } from "next/router";
import { callApi } from "../utils/api";

const ProductDetail = dynamic(() => import("../component/productDetail"), {
  loading: () => <Loader />,
  ssr: false,
});

export default function ProductPage() {
  const [product, setProduct] = useState();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (id) {
      callApi(`https://fakestoreapi.com/products/${id}`, "GET")
        .then((res) => {
          setProduct(res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [id]);

  return (
    <div className="app_container">
      {product ? <ProductDetail product={product} /> : <Loader />}
    </div>
  );
}
