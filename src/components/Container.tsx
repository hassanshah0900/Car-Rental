import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLDivElement> {}
function Container({ className, ...props }: Props) {
  return (
    <div
      {...props}
      className={twMerge(`max-w-[1200px] m-auto px-6`, className)}
    ></div>
  );
}

export default Container;
