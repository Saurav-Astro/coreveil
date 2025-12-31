import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS on app load
AOS.init({
  duration: 600,
  easing: "ease-out",
  once: true,
  offset: 80,
});

createRoot(document.getElementById("root")!).render(<App />);
