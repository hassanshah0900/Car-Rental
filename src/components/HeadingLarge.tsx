import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}
function HeadingLarge({ className, ...props }: Props) {
  return (
    <h3
      {...props}
      className={twMerge(
        "text-4xl md:text-5xl text-primary-text font-bold mb-5",
        className
      )}
    ></h3>
  );
}

export default HeadingLarge;
