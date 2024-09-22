import localFont from "next/font/local";

const raleway = localFont({
  src: "../assets/fonts/Raleway.ttf",
  variable: "--font-raleway",
  weight: "100 900",
});

const josefin = localFont({
  src: "../assets/fonts/JosefinSans.ttf",
  variable: "--font-josefin",
  weight: "100 900",
});

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <div
      className={`${josefin.variable} ${raleway.variable} font-[family-name:var(--font-raleway)] container mx-auto px-12`}
    >
      {children}
    </div>
  );
}
