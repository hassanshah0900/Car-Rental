import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const FormControl = forwardRef<HTMLInputElement, Props>(function (
  { label, className, ...props },
  ref
) {
  return (
    <div className="text-secondary-text font-semibold text-sm">
      <label htmlFor={label}>
        {label}{" "}
        <span className={twMerge("text-primary font-extrabold", className)}>
          *
        </span>
      </label>
      <input
        ref={ref}
        className="w-full px-4 py-2 bg-secondary-text/[0.2] outline-none font-normal focus-visible:bg-secondary-text/[0.4]  placeholder:text-secondary-text mt-1"
        id={label}
        {...props}
      />
    </div>
  );
});

export default FormControl;
