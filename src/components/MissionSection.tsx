import Image from "next/image";
import TextHeading from "./typography/TextHeading";
import TextParagraph from "./typography/TextParagraph";

export function MissionSection() {
  return (
    <section className="lg:flex space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="lg:w-1/2">
        <TextHeading>Our Mission</TextHeading>
        <div className="h-4" />
        <TextParagraph>
          We are dedicated to empowering freelancers to thrive by providing a
          comprehensive ecosystem that streamlines administrative tasks, fosters
          professional growth, and supports their transition from freelancing to
          business ownership.
        </TextParagraph>
      </div>
      <div className="lg:w-1/2 lg:pl-12">
        <div className="lg:w-[500px] h-auto">
          <Image
            className="max-w-none"
            src="/assets/images/mission.png"
            width={500}
            height={250}
            alt="Our Mission"
            style={{
              width: "100%",
              height: "auto"
            }}
          />
        </div>
      </div>
    </section>
  );
}
