import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Dev-only screenshot helper: ?shotY=<px> scrolls to an offset after render.
// No-op unless the param is present.
const params = new URLSearchParams(location.search);
// Dev-only flat capture: fixed-height hero + no reveal animation, so a single
// tall headless window captures the whole page undistorted.
if (params.has("flat")) document.documentElement.classList.add("flat");
const shotY = params.get("shotY");
if (shotY) {
  const y = parseInt(shotY, 10);
  setTimeout(() => window.scrollTo(0, y), 600);
}
// Dev-only measurement: ?measure writes layout metrics into document.title.
if (params.has("measure")) {
  setTimeout(() => {
    const secs = Array.from(document.querySelectorAll("section[id]")).map(
      (s) => `${s.id}:${Math.round((s as HTMLElement).offsetTop)}`
    );
    document.title = `H=${document.body.scrollHeight} | ${secs.join(" ")}`;
  }, 800);
}
