import { ChevronDown } from "lucide-react";
import BodyText from "./BodyText";

interface Props {
  onClick: (id: number) => void;
  isSelected: boolean;
  id: number;
  question: string;
  answer: string;
}
function Dropdown({ onClick, isSelected, question, answer, id }: Props) {
  return (
    <div
      onClick={() => onClick(id)}
      className="w-full cursor-pointer bg-white overflow-hidden"
    >
      <div
        className={`flex py-3.5 px-9 justify-between gap-5 transition-all duration-200 ${
          isSelected
            ? "shadow-lg shadow-primary/[0.4] bg-primary-hover text-white"
            : undefined
        }`}
      >
        <div className="font-semibold text-lg me-auto">
          {id}. {question}
        </div>
        <ChevronDown
          className={`transition-transform duration-300 ${
            isSelected ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`px-9 box-border duration-300 ${
          isSelected ? "h-max py-6" : "h-0"
        }`}
      >
        <BodyText>{answer}</BodyText>
      </div>
    </div>
  );
}

export default Dropdown;
