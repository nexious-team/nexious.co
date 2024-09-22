import Image from "next/image";
import TextHeading from "./typography/TextHeading";
import TextParagraph from "./typography/TextParagraph";
import { TextDescription } from "./typography/TextDescription";

export function ContactSection() {
  return (
    <div className="lg:flex space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="lg:w-1/2">
        <TextHeading>Contact Us</TextHeading>
        <div className="h-4" />
        <TextParagraph>
          Talk to us now to get started with your freelance journey early before
          the market get crowded.
        </TextParagraph>
      </div>
      <div className="lg:w-1/2 lg:pl-12 space-y-4">
        <ContactItem
          iconImage="/assets/images/phone.png"
          label="Phone:"
          value="+855 70 924 961"
        />
        <ContactItem
          iconImage="/assets/images/email.png"
          label="Email:"
          value="nexious.team@gmail.com"
        />
        <ContactItem
          iconImage="/assets/images/address.png"
          label="Address:"
          value="29F KY iCenter, 72 St 360, Phnom Penh
          (Please contact us before you want to drop by)"
        />
      </div>
    </div>
  );
}

interface IProps {
  iconImage: string;
  label: string;
  value: string;
}

function ContactItem(props: IProps) {
  const { iconImage, label, value } = props;

  return (
    <div className="flex space-x-2">
      <div>
        <Image
          className="max-w-none"
          src={iconImage}
          width={40}
          height={40}
          alt="Phone"
        />
      </div>
      <div>
        <TextDescription className="text-gray-600">{label}</TextDescription>
        <TextDescription>{value}</TextDescription>
      </div>
    </div>
  );
}
