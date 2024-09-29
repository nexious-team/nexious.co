import { classNames } from "@/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export function TextDescription(props: Props) {
  const { className = null, children } = props;

  return <p className={classNames("text-sm", className)}>{children}</p>;
}
