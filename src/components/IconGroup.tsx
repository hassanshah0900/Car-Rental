interface Props {
  imgUrl: string;
  text: string;
  count: number;
}
function IconGroup({ imgUrl, text, count }: Props) {
  return (
    <div>
      <img src={imgUrl} />
      <div className="flex gap-2 mt-5">
        <div className="text-5xl font-bold">{count}</div>
        <div className="text-secondary-text">{text}</div>
      </div>
    </div>
  );
}

export default IconGroup;
