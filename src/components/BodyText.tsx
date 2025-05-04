import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}
function BodyText({ className, ...props }: Props) {
  return (
    <p
      {...props}
      className={twMerge("text-sm text-secondary-text font-medium", className)}
    ></p>
  );
}

export default BodyText;