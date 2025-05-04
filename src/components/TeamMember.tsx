interface Props {
  imgUrl: string;
  name: string;
  jobTitle: string;
}
function TeamMember({ imgUrl, name, jobTitle }: Props) {
  return (
    <div
      className="bg-background"
      style={{ boxShadow: "0 20px 10px rgba(0,0,0,0.1)" }}
    >
      <img src={imgUrl} alt="Employee Profile Pic" />
      <div className="text-center bg-white p-8">
        <div className="font-bold text-3xl">{name}</div>
        <div className="text-secondary-text">{jobTitle}</div>
      </div>
    </div>
  );
}

export default TeamMember;
