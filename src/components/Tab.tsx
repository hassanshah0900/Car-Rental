interface Props {
  children: string;
  isSelected: boolean;
  onClick: () => void;
}
function Tab({ children, isSelected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 px-6 hover:bg-primary text-primary-text hover:text-white duration-200 ${
        isSelected ? "bg-primary text-white" : "bg-[#e9e9e9]"
      }`}
    >
      <p className="text-lg font-bold text-start">{children}</p>
    </button>
  );
}

export default Tab;
