import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../public/logo.png";
import Button from "../components/Button";
import Link from "../components/Link";
import { useState } from "react";
import Container from "../components/Container";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Testimonials", url: "/testimonials" },
  { title: "Our Team", url: "/team" },
  // { title: "Contact", url: "/contact" },
];
function Navbar() {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  return (
    <>
      <Container className="relative px-0 z-10">
        <nav className="absolute top-0 w-full flex justify-between items-center gap-8 mt-5 px-4">
          <a className="w-32 flex-shrink-0" href="/">
            <img src={logo} alt="Logo" />
          </a>
          <div className="hidden min-[900px]:flex gap-5">
            {navLinks.map((navLink, index) => (
              <NavLink
                className={`font-semibold text-base whitespace-nowrap hover:text-primary transition-colors duration-200`}
                key={index}
                to={navLink.url}
              >
                {navLink.title}
              </NavLink>
            ))}
          </div>
          <div className="hidden min-[900px]:flex justify-center items-center gap-5">
            <Link to="" className="text-base">
              Sign In
            </Link>
            <Button className="align-baseline">Register</Button>
          </div>
          <Link
            to=""
            onClick={() => setMenuVisibility(!isMenuVisible)}
            className="min-[900px]:hidden"
          >
            <Menu size={30} />
          </Link>
        </nav>
      </Container>
      <nav
        className={`fixed top-0 left-0 bg-white w-full h-screen transition-transform duration-300 ease-in z-20 ${
          isMenuVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex m-8 mb-16 justify-end">
          <Link to="" onClick={() => setMenuVisibility(false)}>
            <X size={30} />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          {navLinks.map((navLink, index) => (
            <NavLink
              className="text-2xl hover:text-primary transition-colors duration-200 text-primary-text font-medium"
              key={index}
              to={navLink.url}
              onClick={() => setMenuVisibility(false)}
            >
              {navLink.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
