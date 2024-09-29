import Link from "next/link";
import { TextDescription } from "./typography/TextDescription";
import TextTitle from "./typography/TextTitle";

export default function Footer() {
  return (
    <footer className="bg-surface -mx-12 px-12 pt-6 pb-4">
      <div className="lg:flex">
        <div className="lg:w-2/5">
          <Link href="/">
            <TextTitle>Nexious</TextTitle>
          </Link>
          <div className="h-2" />
          <TextDescription>
            What you envision, come to existence.
          </TextDescription>
        </div>
        <div className="lg:w-3/5 flex">
          <div className="w-1/2 space-y-2">
            <div className="h-4" />
            <TextDescription className="text-gray-600">
              Our Product
            </TextDescription>
            <TextDescription>
              <a
                className="hover:underline hover:text-primary"
                href="https://knowat.nexious.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Knowat
              </a>
            </TextDescription>
          </div>
          <div className="w-1/2 space-y-2">
            <div className="h-4" />
            <TextDescription className="text-gray-600">
              Follow Us
            </TextDescription>
            <TextDescription>
              <a
                className="hover:underline hover:text-primary"
                href="https://www.facebook.com/wwwnexiousco"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </TextDescription>
          </div>
        </div>
      </div>
      <div className="h-16" />
      <hr className="border border-gray-300" />
      <div className="py-2 lg:py-4 w-full lg:space-x-2 lg:flex">
        <TextDescription className="text-gray-600 text-center lg:text-left">
          @2024 Nexious. All Right Reserved.
        </TextDescription>
        <TextDescription className="text-gray-600 text-center lg:text-left">
          Powered by{" "}
          <a
            className="hover:underline hover:text-primary"
            href="https://www.nexious.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nexious.
          </a>
        </TextDescription>
      </div>
    </footer>
  );
}
