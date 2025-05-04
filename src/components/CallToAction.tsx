import { Phone } from "lucide-react";
import Container from "../components/Container";
function CallToAction() {
  return (
    <div className="w-full relative bg-cover bg-[url('../../public/backgrounds/call-to-action-background.png')]">
      <div className="bg-black/75">
        <Container className="h-44 flex max-md:flex-col justify-center items-center gap-5 md:gap-10">
          <div className="text-white text-3xl font-extrabold max-md:text-center">
            Book a car by getting in touch with us
          </div>
          <div className="text-primary text-3xl font-bold flex gap-3 justify-center items-center">
            <Phone className="size-8" />
            03441418499
          </div>
        </Container>
      </div>
    </div>
  );
}

export default CallToAction;
