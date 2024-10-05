import { classNames } from "@/utils";

interface IProps {
  name: string;
  size: "medium" | "large";
  onClick?: () => void;
}

const sizeStyles = {
  medium: "px-6 py-2 text-lg",
  large: "px-8 py-4 text-xl",
};

export function Button(props: IProps) {
  const { name, size, onClick } = props;
  const common =
    "bg-primary text-white  font-[family-name:var(--font-josefin)]";

  const sizeStyle = sizeStyles[size];

  return (
    <button className={classNames(common, sizeStyle)} onClick={onClick}>
      {name}
    </button>
  );
}
