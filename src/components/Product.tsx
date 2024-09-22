import Image from "next/image";
import TextTitle from "./typography/TextTitle";
import { TextDescription } from "./typography/TextDescription";
import { IProduct } from "@/types";

interface IProps {
  product: IProduct;
}
export function Product(props: IProps) {
  const { product } = props;

  return (
    <div className="rounded-2xl">
      <div className="h-[300px] w-auto">
        <Image
          className=""
          width={200}
          height={300}
          src={product.imageSrc}
          alt="Service"
          priority={true}
          style={{
            width: 'auto',
            height: '100%',
          }}
        />
      </div>
      <div className="w-[200px] py-4">
        <TextTitle className="truncate">{product.name}</TextTitle>
        <TextDescription>
          {product.description}
        </TextDescription>
      </div>
    </div>
  );
}
