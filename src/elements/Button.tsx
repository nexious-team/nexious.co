import { TSize, TVariant } from "@/types";
import React, { ReactNode } from "react";
import { classNames } from "../utils";

const base = "focus:outline-none border-2 rounded-lg disabled:opacity-50";

const styles = {
  normal: "text-black border-black",
  "normal:dark": "text-white border-white",
  action: "bg-gray-900 hover:bg-black text-white border-gray-900",
  hook: "bg-gray-200 text-gray-600 border-gray-200",
  "action:dark": "bg-gray-100 hover:bg-white text-black border-gray-100",
};

const sizes = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-3 px-6",
};


interface ButtonProps {
  variant?: TVariant;
  size?: TSize;
  className: string;
  children: ReactNode;
  onClick?: () => void;
}
export default function Button(props: ButtonProps) {
  const {
    variant = "action",
    size = "md",
    className,
    onClick,
    children,
  } = props;

  return (
    <button
      onClick={onClick}
      className={classNames(base, styles[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}

export const _Button = (props: any) => {
  const { name, color, onPress, classes } = props;

  const styles = {
    container: `bg-${color}-500 hover:bg-${color}-700 focus:bg-${color}-500 border-${color}-600 px-4 py-2 rounded shadow`,
  };
  return (
    <button className={`${styles.container} ${classes}`} onClick={onPress}>
      {name}
    </button>
  );
};
