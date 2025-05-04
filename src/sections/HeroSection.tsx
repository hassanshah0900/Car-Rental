import { ChevronRight, CircleCheck } from "lucide-react";
import Button from "../components/Button";
import Container from "../components/Container";
import heroCar from "../../public/hero-car.png";
import BodyText from "../components/BodyText";
import HeadingSmall from "../components/HeadingSmall";

function HeroSection() {
  return (
    <section className="bg-background md:bg-[url('../../public/backgrounds/hero-bg.png')] bg-right bg-contain bg-no-repeat pt-36 pb-44">
      <Container className="flex items-center text-center md:text-start">
        <div className="m-auto w-96 md:w-[40%]">
          <HeadingSmall>Plan your trip now</HeadingSmall>
          <h3 className="text-5xl lg:text-6xl font-bold mb-8">
            Save <span className="text-primary">big</span> with our car rental
          </h3>
          <BodyText className="mb-8">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </BodyText>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <a href="#booking-form">
              <Button className="py-4" variant="icon">
                Book Ride
                <CircleCheck />
              </Button>
            </a>
            <Button className="py-4" variant="icon" version="secondary">
              Learn More
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <img className="min-w-[600px]" src={heroCar} alt="Red Car" />
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
