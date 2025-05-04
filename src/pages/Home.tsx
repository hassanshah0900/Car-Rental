import BookingForm from "../components/BookingForm";
import CarModelsSection from "../components/CarModelsSection";
import ChooseUsSection from "../sections/ChooseUsSection";
import FAQSection from "../sections/FAQSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import InfoAlert from "../components/InfoAlert";
import MobileAppSection from "../sections/MobileAppSection";
import TestimonialSection from "../sections/TestimonialSection";

function Home() {
  return (
    <section className="overflow-hidden">
      <HeroSection />
      <BookingForm />
      <FeaturesSection />
      <CarModelsSection />
      <InfoAlert />
      <ChooseUsSection />
      <TestimonialSection />
      <FAQSection />
      <MobileAppSection />
    </section>
  );
}

export default Home;
