import Image from "next/image";
import { IProduct } from "@/types";

interface IProps {
  product: IProduct;
}
export function Product(props: IProps) {
  const { product } = props;

  return (
    <div className="lg:h-[250px] w-auto">
      <Image
        className="rounded-3xl border shadow"
        width={250}
        height={250}
        src={product.imageSrc}
        alt="Service"
        priority={true}
        style={{
          width: "auto",
          height: "100%",
        }}
      />
    </div>
  );
}
