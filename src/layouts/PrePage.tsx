import { useLocation } from "react-router-dom";
import Container from "../components/Container";
import Link from "../components/Link";

const pathMap: { [key: string]: string } = {
  "/about": "About",
  "/models": "Vehicle Models",
  "/testimonials": "Testimonials",
  "/team": "Our Team",
  "/contact": "Contact",
};
function PrePage() {
  const { pathname } = useLocation();
  return (
    <div
      className={`bg-[url(../../public/backgrounds/pre-page-background.png)] bg-cover ${
        pathname === "/" ? "hidden" : "block"
      }`}
    >
      <div className="bg-white/90">
        <Container className="h-80 flex flex-col justify-center gap-2">
          <h1 className="font-bold text-3xl">{pathMap[pathname]}</h1>
          <div className="font-semibold">
            <Link to="/">Home</Link> / {pathMap[pathname]}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default PrePage;
