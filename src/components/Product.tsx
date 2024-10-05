import Image from "next/image";
import { IProduct } from "@/types";

interface IProps {
  product: IProduct;
}
export function Product(props: IProps) {
  const { product } = props;

  return (
    <div className="lg:w-[250px] h-auto">
      <Image
        className="rounded-3xl border shadow"
        width={100}
        height={100}
        src={product.imageSrc}
        alt="Service"
        priority={true}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
