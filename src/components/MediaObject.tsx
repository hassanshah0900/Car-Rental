import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import BodyText from "./BodyText";

const mediaStyles = cva(["flex", "gap-3"], {
  variants: {
    variant: {
      default: ["flex-col", "items-center", "text-center"],
      horizontal: ["flex-row", "items-top", "text-center", "lg:text-start"],
    },
  },
  defaultVariants: { variant: "default" },
});

interface Props
  extends VariantProps<typeof mediaStyles>,
    HTMLAttributes<HTMLDivElement> {
  heading: string;
  text: string;
  imgUrl: string;
}
function MediaObject({ heading, imgUrl, text, variant, className }: Props) {
  return (
    <div className={twMerge("w-full", mediaStyles({ variant }), className)}>
      <img
        className={`${
          variant === "horizontal" ? "size-24" : "size-36"
        } rounded-full`}
        src={imgUrl}
        alt=""
      />
      <div>
        <h4 className="text-2xl text-primary-text font-bold mb-2">{heading}</h4>
        <BodyText>{text}</BodyText>
      </div>
    </div>
  );
}

export default MediaObject;
