import BodyText from "../components/BodyText";
import CallToAction from "../components/CallToAction";
import Container from "../components/Container";
import FeaturesSection from "../sections/FeaturesSection";
import HeadingLarge from "../components/HeadingLarge";
import HeadingSmall from "../components/HeadingSmall";
import aboutPic from "../../public/about.jpg";
import IconGroup from "../components/IconGroup";
import carTypeIcon from "../../public/icons/car-types.png";
import rentalOutletIcon from "../../public/icons/rental-outlet.png";
import repairShopIcon from "../../public/icons/repair-shop.png";

function About() {
  return (
    <section>
      <Container className="flex flex-wrap justify-center items-end gap-10 py-24">
        <div className="w-[400px]">
          <img src={aboutPic} alt="Our Employees" />
        </div>
        <div className="w-[400px] text-center md:text-start">
          <HeadingSmall>About Company</HeadingSmall>
          <HeadingLarge className="md:text-4xl">
            You start the engine and your adventure begins
          </HeadingLarge>
          <BodyText>
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </BodyText>
          <div className="flex gap-5 mt-8">
            <IconGroup imgUrl={carTypeIcon} count={20} text="Car Types" />
            <IconGroup
              imgUrl={rentalOutletIcon}
              count={85}
              text="Rental Outlets"
            />
            <IconGroup imgUrl={repairShopIcon} count={75} text="Repair Shop" />
          </div>
        </div>
      </Container>
      <FeaturesSection />
      <CallToAction />
    </section>
  );
}

export default About;
