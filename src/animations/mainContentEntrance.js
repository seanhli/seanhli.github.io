import { gsap } from "gsap";

export function mainContentEntrance() {
  let mainContentEntrance = gsap.timeline({ paused: true });

  mainContentEntrance
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
    .set(
      ".p-title-container",
      {
        top: "50%",
      },
      "phase-0"
    )
    .set(
      ".p-subtitle",
      {
        opacity: 0,
      },
      "phase-0"
    )
    .set(
      ".p-content-container",
      {
        top: "50%",
        height: 0,
        background: "rgba(255, 255, 255, 0.5)",
      },
      "phase-0"
    )
    .to(
      ".p-title-container",
      {
        duration: 0.5,
        delay: 1,
        top: 0,
        ease: "power2.in",
      },
      "phase-1"
    )
    .to(
      ".p-subtitle",
      {
        duration: 0.5,
        opacity: 1,
        ease: "power2.out",
      },
      "phase-2"
    )
    .to(
      ".p-content-container",
      {
        duration: 0.75,
        top: 0,
        height: "calc(100% - 8vmin - 12vmin)",
        background: "rgba(255, 255, 255, 0)",
        ease: "power2.out",
      },
      "phase-2"
    );

  return mainContentEntrance;
}
