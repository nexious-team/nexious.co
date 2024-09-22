import { classNames } from "@/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function TextTitle(props: Props) {
  const { className = null, children } = props;

  return <h4 className={classNames("text-2xl font-[family-name:var(--font-josefin)]", className)}>{children}</h4>;
}
