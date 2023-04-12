import { gsap } from "gsap";

export function mainHomeEntrance() {
  let mainHomeEntrance = gsap.timeline({ paused: true });

  mainHomeEntrance
    .set(
      ".p-main-content",
      {
        top: "30px",
        left: "calc(60px + 5vmin)",
        width: "calc(100vw - 60px - 10vmin)",
        height: "calc(100vh - 120px)",
        background: "none",
      },
      "phase-0"
    )

  return mainHomeEntrance;
}
