import React, { ReactNode } from "react";
import { useSpring, animated as a } from "react-spring";

interface HeroButtonProps {
  url: string;
  children: ReactNode;
}
export default function HeroButton(props: HeroButtonProps) {
  const { url, children } = props;

  const animatedButtonUnderline = useSpring({
    from: {
      width: "0%",
    },
    to: {
      width: "100%",
    },
    delay: 2000,
  });
  const animatedButtonText = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 1800,
  });
  return (
    <a.div style={animatedButtonText} className="order-3 md:order-first">
      <div className="w-64">
        <a.button
          style={animatedButtonUnderline}
          className="h-16 py-2 text-xl text-white font-bold truncate tracking-wider border-2 border-white rounded-lg"
        >
          <a
            href={url}
            aria-label="Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{children}</span>
          </a>{" "}
        </a.button>
      </div>
    </a.div>
  );
}
