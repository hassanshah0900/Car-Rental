import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function HeadingSmall({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={twMerge("text-xl text-secondary font-bold mb-2", className)}>
      {children}
    </h2>
  );
}

export default HeadingSmall;
