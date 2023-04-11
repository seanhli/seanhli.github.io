import { gsap } from "gsap";

export function mainContentExit() {
  let mainContentExit = gsap.timeline({ paused: true });

  mainContentExit
    .to(
      ".p-main-content",
      {
        duration: 0.5,
        top: "50%",
        height: "1px",
        ease: "power3.out",
        background: 'rgba(255, 255, 255, 0.5)'
      },
      "phase-1"
    )
    .to(
        ".p-main-content",
        {
          duration: 0.15,
          delay: 0.45,
          left: "50%",
          width: 0,
          ease: "power3.out",
        },
        "phase-1"
      )

  return mainContentExit;
}
