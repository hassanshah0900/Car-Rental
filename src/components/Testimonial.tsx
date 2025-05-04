import { Quote } from "lucide-react";

interface Props {
  comment: string;
  name: string;
  region: string;
  image: string;
}
function Testimonial({ comment, image, name, region }: Props) {
  return (
    <div className="w-full h-full rounded bg-white shadow-2xl py-12 px-8 lg:p-12 flex flex-col">
      <p className="mb-8 text-primary-text text-xl font-semibold">
        "{comment}"
      </p>
      <div className="flex items-center mt-auto">
        <img
          className="size-16 rounded-full me-3"
          src={image}
          alt="Customer Mustehsan"
        />
        <div className="me-auto">
          <div className="font-bold text-primary-text">{name}</div>
          <div>{region}</div>
        </div>
        <Quote className="ms-5 size-10 stroke-primary-hover flex-shrink-0" />
      </div>
    </div>
  );
}

export default Testimonial;
