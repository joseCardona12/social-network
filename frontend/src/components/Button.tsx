import { VARIANT_BUTTON } from "../utils/variantButton";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant: "outline" | "black";
  type: "submit";
}
export default function Button({
  children,
  onClick,
  variant,
  type,
}: IButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-md p-2 ${VARIANT_BUTTON[variant]}`}
      type={type}
    >
      {children}
    </button>
  );
}
