import HeadingLarge from "../components/HeadingLarge";
import HeadingSmall from "../components/HeadingSmall";
import selectCarIcon from "/icons/select-car-icon.png";
import supportIcon from "/icons/support-icon.png";
import drivingCarIcon from "/icons/driving-car-icon.png";
import MediaObject from "../components/MediaObject";

const features = [
  {
    imgUrl: selectCarIcon,
    heading: "Select Car",
    text: "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
  },
  {
    imgUrl: supportIcon,
    heading: "Contact Operator",
    text: "Our knowledgeable and friendly operators are always ready to help with any questions or concerns",
  },
  {
    imgUrl: drivingCarIcon,
    heading: "Let's Drive",
    text: "Whether you're hitting the open road, we've got you covered with our wide range of cars",
  },
];

function FeaturesSection() {
  return (
    <section className="py-20 pt-10 pb-24">
      <div className="text-center mb-20">
        <HeadingSmall>Plan your trip now</HeadingSmall>
        <HeadingLarge>Quick & easy car rental</HeadingLarge>
      </div>
      <div className="flex max-lg:flex-wrap justify-center gap-8 lg:gap-20">
        {features.map((feature, index) => (
          <div key={index} className="max-w-96 md:max-w-72">
            <MediaObject {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
