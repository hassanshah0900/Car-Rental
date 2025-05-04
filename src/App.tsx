import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { ChevronUp } from "lucide-react";
import { useRef } from "react";
import PrePage from "./layouts/PrePage";

function App() {
  const ref = useRef<HTMLButtonElement>(null);
  window.onscroll = () => {
    const heighLimit = window.innerHeight;
    if (
      document.body.scrollTop > heighLimit ||
      document.documentElement.scrollTop > heighLimit
    ) {
      if (ref.current) ref.current.style.display = "flex";
    } else if (ref.current) ref.current.style.display = "none";
  };

  return (
    <div id="app" className="h-screen">
      <button
        ref={ref}
        onClick={() => {
          document.documentElement.scrollIntoView();
          document.body.scrollIntoView();
        }}
        className="hidden fixed right-12 bottom-12 justify-center items-center size-10 bg-primary border-2 border-white z-10"
      >
        <ChevronUp stroke="white" />
      </button>
      <Navbar />
      <PrePage />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
