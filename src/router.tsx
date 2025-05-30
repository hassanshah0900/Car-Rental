import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Testimonials from "./pages/TestimonialsPage";
import Home from "./pages/Home";
import Team from "./pages/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "team", element: <Team /> },
    ],
  },
]);

export default router;
