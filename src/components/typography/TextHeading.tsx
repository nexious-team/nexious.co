interface Props {
  children: React.ReactNode;
}

export default function TextHeading(props: Props) {
  const { children } = props;

  return <h2 className="text-xl lg:text-4xl font-[family-name:var(--font-josefin)]">{children}</h2>;
}
