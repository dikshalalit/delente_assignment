import Image from "next/image";

export default function ProductDetail({ product }) {
  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <Image
        src={product?.image}
        width={500}
        height={500}
        alt={product?.title}
      />
      <p>Price: {product?.price}</p>
    </div>
  );
}
