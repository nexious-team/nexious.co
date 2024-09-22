type TClassName = string | null
export function classNames(...classes: TClassName[]) {
  return classes.filter(Boolean).join(" ");
}
