import HeadingLarge from "./HeadingLarge";
import HeadingSmall from "./HeadingSmall";

function InfoAlert() {
  return (
    <div className="w-full bg-secondary/85 text-center p-10">
      <HeadingLarge className="text-white">
        Save big with our cheap car rental!
      </HeadingLarge>
      <HeadingSmall className="text-white">
        Top Airports. Local Suppliers.{" "}
        <span className="text-primary">24/7</span> Support.
      </HeadingSmall>
    </div>
  );
}

export default InfoAlert;
