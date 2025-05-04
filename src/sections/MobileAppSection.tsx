import BodyText from "../components/BodyText";
import HeadingLarge from "../components/HeadingLarge";
import googleStore from "../../public/google-playstore.svg";
import appleStore from "../../public/appstore.svg";
import Container from "../components/Container";
function MobileAppSection() {
  return (
    <section className="bg-background py-24 md:bg-[url('../../public/backgrounds/background-mobile.png')] bg-cover bg-no-repeat bg-top">
      <Container>
        <div className="max-w-[500px] max-md:text-center max-md:m-auto">
          <HeadingLarge className="leading-snug">
            Download our app to get most out of it
          </HeadingLarge>
          <BodyText className="mb-8">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </BodyText>
          <div className="flex flex-wrap gap-8 max-md:justify-center">
            <img
              className="w-48 cursor-pointer"
              src={googleStore}
              alt="Download with Google Play Store"
            />
            <img
              className="w-48 cursor-pointer"
              src={appleStore}
              alt="Download with Apple Play Store"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MobileAppSection;
