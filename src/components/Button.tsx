import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  [
    "text-white",
    "font-semibold",
    "transition-all",
    "duration-200",
    "text-base",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        icon: ["flex", "gap-2", "justify-center", "items-center"],
      },
      version: {
        primary: [
          "bg-primary",
          "hover:bg-primary-hover",
          "rounded",
          "shadow-lg",
          "shadow-primary/[0.3]",
          "hover:shadow-primary/[0.6]",
        ],
        secondary: [
          "bg-secondary",
          "hover:bg-transparent",
          "hover:text-secondary",
          "hover:fill-secondary",
          "border",
          "border-secondary",
          "rounded",
        ],
      },
      size: {
        default: ["py-2.5", "px-6"],
        block: [
          "w-full",
          "p-3",
          "flex",
          "justify-center",
          "items-center",
          "rounded-none",
          "h-max",
        ],
      },
    },
    defaultVariants: { size: "default", version: "primary" },
  }
);
interface Props
  extends VariantProps<typeof buttonStyles>,
    ButtonHTMLAttributes<HTMLButtonElement> {}
function Button({ size, version, variant, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ size, variant, version }), className)}
    ></button>
  );
}

export default Button;
