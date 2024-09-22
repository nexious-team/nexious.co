import Image from "next/image";
import Link from "next/link";
import TextTitle from "./typography/TextTitle";

export default function Navbar() {

  return (
    <nav className="h-20 flex items-center space-x-4">
      <Link href="/">
        <Image
          width={40}
          height={40}
          src="/assets/icons/logo.svg"
          alt="Knowat logo"
        />
      </Link>
      <TextTitle>Nexious</TextTitle>
    </nav>
  );
}
