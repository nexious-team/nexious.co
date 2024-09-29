import Image from "next/image";
import TextParagraph from "./typography/TextParagraph";
  import TextHeadline from "./typography/TextHeadline";

export function HeroSection() {
  return (
    <section className="lg:flex lg:space-x-4 space-y-8 lg:space-y-0 items-center">
      <div className="lg:w-1/2">
        <TextHeadline>Launch Your Freelance Career Today</TextHeadline>
        <div className="h-4" />
        <TextParagraph>
          Discover the tools and resources to build a successful freelance
          business.
        </TextParagraph>
        <div className="h-4" />
        <div className="flex space-x-4"></div>
      </div>
      <div className="lg:w-1/2">
        <div className="lg:w-[700px] h-auto">
          <Image
            width={500}
            height={500}
            src="/assets/images/nexious_hero.png"
            alt="Knowat Hero"
            priority={true}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}
