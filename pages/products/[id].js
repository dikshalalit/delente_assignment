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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (id) {
      setLoading(true);
      callApi(`https://fakestoreapi.com/products/${id}`, "GET")
        .then((res) => {
          setProduct(res);
          setLoading(false);
        })
        .catch((err) => {
          console.log("err", err);
          setError("Failed to load product.");
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <div className="app_container">
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : product ? (
        <ProductDetail product={product} />
      ) : (
        <Loader />
      )}
    </div>
  );
}
