import HeadingLarge from "../components/HeadingLarge";
import HeadingSmall from "../components/HeadingSmall";
import customer1 from "../../public/customers/customer1.jpg";
import customer2 from "../../public/customers/customer2.jpg";
import Testimonial from "../components/Testimonial";
import Container from "../components/Container";
import BodyText from "../components/BodyText";

function TestimonialSection() {
  const testimonials = [
    {
      comment:
        "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
      name: "Mustehsan",
      region: "Rawalpindi",
      image: customer1,
    },
    {
      comment:
        "The car was in great condition and made our trip even better. Highly recommend for this car rental website!",
      name: "Hassan",
      region: "Lahore",
      image: customer2,
    },
  ];
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <HeadingSmall>Reviewed by People</HeadingSmall>
          <HeadingLarge>Client's Testimonials</HeadingLarge>
          <BodyText className="text-secondary-text text-sm">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </BodyText>
        </div>
        <div className="flex justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              className={`md:w-1/2 max-w-[500px] ${
                index === 1 ? "md:block hidden" : undefined
              }`}
              key={index}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TestimonialSection;
