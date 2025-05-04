import { useState } from "react";
import BodyText from "./BodyText";
import Container from "./Container";
import HeadingLarge from "./HeadingLarge";
import HeadingSmall from "./HeadingSmall";
import Tab from "./Tab";
import CarDetailsTable from "./CarDetailsTable";
import Button from "./Button";
import { cars } from "../data/cars";
function CarModelsSection() {
  const [currentCarId, setCurrentCarId] = useState(1);
  const [isLoading, setLoading] = useState(false);

  function handleClick(id: number) {
    setCurrentCarId(id);
  }
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-14 max-w-[400px] m-auto">
          <HeadingSmall>Vehicle Models</HeadingSmall>
          <HeadingLarge>Our rental fleet</HeadingLarge>
          <BodyText>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </BodyText>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_max-content] lg:grid-cols-[max-content_1fr_max-content] justify-items-center items-center gap-10">
          <div className="space-y-2 lg:max-w-[250px] md:max-lg:col-span-2">
            {cars.map((car, index) => (
              <Tab
                key={index}
                onClick={() => {
                  setLoading(true);
                  handleClick(car.id);
                }}
                isSelected={currentCarId === car.id}
              >
                {car.name}
              </Tab>
            ))}
          </div>
          <div>
            <img
              className={isLoading ? "hidden" : "block"}
              src={cars[currentCarId - 1].imgUrl}
              alt="Image of our Car Available for rent"
              loading="lazy"
              onLoad={() => setLoading(false)}
            />
            <div
              className={`animate-spin rounded-full size-10 border-4 border-r-4 border-r-primary ${
                isLoading ? "block" : "hidden"
              }`}
            ></div>
          </div>

          <div className="w-60 space-y-4">
            <CarDetailsTable
              carDetails={cars[currentCarId - 1].details}
              rent={cars[currentCarId - 1].rentPerDay}
            />
            <a href="#booking-form" className="block">
              <Button className="text-xl" size="block">
                Reserve Now
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CarModelsSection;
