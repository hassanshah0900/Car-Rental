import { Mail, PhoneCall } from "lucide-react";
import BodyText from "../components/BodyText";
import Button from "../components/Button";
import Container from "../components/Container";
import Link from "../components/Link";

function Footer() {
  return (
    <footer className="py-20">
      <Container className="grid grid-cols-1 min-[550px]:grid-cols-2 lg:grid-cols-4 gap-20 max-[550px]:text-center">
        <div>
          <div className="text-2xl font-bold mb-3">
            CAR <span className="font-normal">Rental</span>
          </div>
          <BodyText className="text-base mb-8">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </BodyText>
          <Link
            to="tel:+923211234567"
            className="flex text-sm gap-3 w-max max-[550px]:m-auto mb-2"
          >
            <PhoneCall />
            +923211234567
          </Link>
          <Link
            to="mailto:hasni9267@gmail.com"
            className="flex tex-sm gap-3 w-max max-[550px]:m-auto"
          >
            <Mail />
            hasni9267@gmail.com
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-bold uppercase">Company</h4>
          <div>
            <Link className="font-normal" to="/">
              New York
            </Link>
          </div>
          <div>
            <Link className="font-normal" to="/">
              Careers
            </Link>
          </div>
          <div>
            <Link className="font-normal" to="/">
              Mobile
            </Link>
          </div>
          <div>
            <Link className="font-normal" to="/">
              Blog
            </Link>
          </div>
          <div>
            <Link className="font-normal" to="/">
              How we work
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-bold uppercase">Working Hours</h4>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 19:00PM</p>
          <p>Sun: Closed</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-xl font-bold uppercase">Subscription</h4>
          <p>Subscribe your Email address for latest news & updates.</p>
          <form className="space-y-2">
            <input
              className="py-2 px-8 bg-background w-full placeholder:text-sm placeholder:text-secondary-text outline-none"
              type="email"
              placeholder="Enter Email Address"
            />
            <Button type="submit" size="block">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
