import CallToAction from "../components/CallToAction";
import TeamMember from "../components/TeamMember";
import member1 from "/team-members/member1.png";
import member2 from "/team-members/member2.png";
import member3 from "/team-members/member3.png";
import member4 from "/team-members/member4.png";
import member5 from "/team-members/member5.png";
import member6 from "/team-members/member6.png";
import Container from "../components/Container";

const teamMembers = [
  { imgUrl: member1, name: "Ali Zain", jobTitle: "salesman" },
  { imgUrl: member2, name: "Hassan", jobTitle: "Business Owner" },
  { imgUrl: member3, name: "Salma", jobTitle: "Car Detailist" },
  { imgUrl: member4, name: "Memona", jobTitle: "Mechanic" },
  { imgUrl: member5, name: "Hashir Hussain", jobTitle: "Photographer" },
  { imgUrl: member6, name: "Sadia", jobTitle: "Manager" },
];
function Team() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-[repeat(auto-fill,300px)] justify-center gap-8 pt-24 pb-32">
          {teamMembers.map((teamMember, index) => (
            <TeamMember {...teamMember} key={index} />
          ))}
        </div>
      </Container>
      <CallToAction />
    </div>
  );
}

export default Team;
