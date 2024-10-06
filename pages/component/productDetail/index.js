import Image from "next/image";
import style from "./style.module.css";

export default function ProductDetail({ product }) {
  return (
    <div className={style.product_detail_box}>
      <div className={style.product_detail_right_col}>
        <Image
          src={product?.image}
          width={300}
          height={300}
          alt={product?.title}
        />
      </div>
      <div className={style.product_detail_left_col}>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p>Price: ${product?.price}</p>
      </div>
    </div>
  );
}
