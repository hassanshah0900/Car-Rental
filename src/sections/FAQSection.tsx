import { useState } from "react";
import Container from "../components/Container";
import Dropdown from "../components/Dropdown";
import HeadingLarge from "../components/HeadingLarge";
import HeadingSmall from "../components/HeadingSmall";
import BodyText from "../components/BodyText";

const faqs = [
  {
    id: 1,
    question: "What is special about comparing rental car deals?",
    answer:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
  {
    id: 2,
    question: "How do I find the car rental deals?",
    answer:
      "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
  },
  {
    id: 3,
    question: "How do I find such low rental car prices?",
    answer:
      "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
  },
];
function FAQSection() {
  const [openedQuestionid, setOpenedQuestionId] = useState(1);
  const handleClick = (id: number) => {
    if (id === openedQuestionid) setOpenedQuestionId(0);
    else setOpenedQuestionId(id);
  };
  return (
    <section className="bg-[url('/backgrounds/background-car.png')] bg-no-repeat bg-left py-20">
      <Container className="max-w-[700px]">
        <div className="text-center mb-12">
          <HeadingSmall>FAQ</HeadingSmall>
          <HeadingLarge>Frequently Asked Questions</HeadingLarge>
          <BodyText>
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </BodyText>
        </div>
        <div className="shadow-xl divide-y">
          {faqs.map((faq, index) => (
            <Dropdown
              onClick={handleClick}
              key={index}
              isSelected={openedQuestionid === faq.id}
              {...faq}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQSection;
