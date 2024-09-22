interface Props {
  children: React.ReactNode;
}

export default function TextHeadline(props: Props) {
  const { children } = props;

  return <h1 className="text-3xl lg:text-6xl leading-tight font-[family-name:var(--font-josefin)]">{children}</h1>;
}
