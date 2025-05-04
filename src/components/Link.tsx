import { HTMLAttributes } from "react";
import { Link as RouterLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLElement> {
  to: string;
}
function Link({ to, className, ...props }: Props) {
  return (
    <RouterLink
      to={to}
      className={twMerge(
        "text-primary-text font-semibold whitespace-nowrap hover:text-primary transition-colors duration-200 cursor-pointer",
        className
      )}
      {...props}
    ></RouterLink>
  );
}

export default Link;
