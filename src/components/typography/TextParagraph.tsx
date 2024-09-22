interface Props {
  children: React.ReactNode;
}

export default function TextParagraph(props: Props) {
  const { children } = props;

  return <p className="text-base">{children}</p>;
}
