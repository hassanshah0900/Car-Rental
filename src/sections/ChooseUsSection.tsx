import { ChevronRight } from "lucide-react";
import Button from "../components/Button";
import HeadingLarge from "../components/HeadingLarge";
import HeadingSmall from "../components/HeadingSmall";
import carIcon from "/icons/car-icon.png";
import coinIcon from "/icons/coin-icon.png";
import holdedCoinIcon from "/icons/holded-coin-icon.png";
import MediaObject from "../components/MediaObject";
import Container from "../components/Container";
import threeCars from "/three-cars.png";
import BodyText from "../components/BodyText";

const qualities = [
  {
    imgUrl: carIcon,
    heading: "Cross Country Drive",
    text: "Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.",
  },
  {
    imgUrl: coinIcon,
    heading: "All Inclusive Pricing",
    text: "Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.",
  },
  {
    imgUrl: holdedCoinIcon,
    heading: "No Hidden Charges",
    text: "Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.",
  },
];
function ChooseUsSection() {
  return (
    <section className="py-20 bg-[url('/backgrounds/background-tyre-marks.png')] bg-no-repeat bg-contain bg-[-3rem_17rem]">
      <Container>
        <img
          className="m-auto mb-8"
          src={threeCars}
          alt="Image of three cars, one Jeep, second Kia and third Land Cruiser"
        />
        <div className="flex flex-col lg:flex-row items-center lg:justify-around gap-5">
          <div className="max-w-[500px] text-center lg:text-start">
            <HeadingSmall>Why Choose Us</HeadingSmall>
            <HeadingLarge>Best valued deals you will ever find</HeadingLarge>
            <BodyText className="mb-8">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </BodyText>
            <Button className="py-3 mb-8 max-lg:mx-auto" variant="icon">
              Find Details <ChevronRight />
            </Button>
          </div>
          <div className="max-w-[400px] space-y-8">
            {qualities.map((quality, index) => (
              <div key={index}>
                <MediaObject variant="horizontal" {...quality} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ChooseUsSection;
