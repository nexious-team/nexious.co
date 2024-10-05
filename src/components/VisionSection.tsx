import Image from "next/image";
import TextHeading from "./typography/TextHeading";
import TextParagraph from "./typography/TextParagraph";

export function VisionSection() {
  return (
    <div className="lg:flex space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="lg:w-1/2">
        <TextHeading>Our Vision</TextHeading>
        <div className="h-4" />
        <TextParagraph>
          To empower Cambodian freelancers to thrive by connecting them with
          local and international opportunities, fostering a supportive
          community, and driving the growth of the freelance economy.
        </TextParagraph>
      </div>
      <div className="lg:w-1/2 lg:pl-12">
        <div className="w-[300px] lg:w-[500px] h-auto">
          <Image
            src="/assets/images/vision.png"
            width={500}
            height={250}
            alt="Our Vision"
            style={{
              width: "100%",
              height: "auto"
            }}
          />
        </div>
      </div>
    </div>
  );
}
