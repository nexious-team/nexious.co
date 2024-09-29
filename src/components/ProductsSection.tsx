import { IProduct } from "@/types";
import { Product } from "./Product";
import TextHeading from "./typography/TextHeading";
import TextParagraph from "./typography/TextParagraph";
import TextHeadline from "./typography/TextHeadline";

const products: IProduct[] = [
  {
    id: "001",
    name: "Knowat",
    description: "This is a product",
    imageSrc: "/assets/images/knowat.png",
  },
  {
    id: "002",
    name: "Knowat for Talent",
    description: "This is a product",
    imageSrc: "/assets/images/knowat_for_talent.png",
  },
];

export function ProductsSection() {
  return (
    <div>
      <div className="text-center">
        <TextHeadline>Our Products</TextHeadline>
      </div>
      <div className="h-8 lg:h-16" />
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <TextHeading>Knowat - A Service Marketplace</TextHeading>
          <TextParagraph>
            To Promote Your Services and Connect with Clients
          </TextParagraph>
          <div className="h-4" />
          <TextParagraph>Key Features:</TextParagraph>
          <ul className="list-disc pl-4">
            <li>
              <TextParagraph>
                Connect with customers in need of your services
              </TextParagraph>
            </li>
            <li>
              <TextParagraph>Easy contact sharing and networking</TextParagraph>
            </li>
            <li>
              <TextParagraph>
                Community forums for discussion and collaboration
              </TextParagraph>
            </li>
          </ul>
        </div>
        <div className="h-4" />
        <div className="lg:pl-12">
          <div className="flex space-x-4 overflow-x-auto">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
