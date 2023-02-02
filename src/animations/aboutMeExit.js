import { gsap } from "gsap";

export function aboutMeExitAnimation() {
  let aboutMeExit = gsap.timeline({ paused: true });

  // cat paw roll in with paint roller
  aboutMeExit
    .set(
      ".exit-paw",
      {
        display: "flex",
        left: "125%",
      },
      "phase-0.0"
    )
    .to(
      ".photo-stick",
      {
        duration: 0.5,
        translateY: "50vh",
        translateX: "10vh",
      },
      "phase-1"
    )
    .to(
      ".exit-paw",
      {
        duration: 1,
        translateX: "-90vw",
        ease: "power2.out",
      },
      "phase-1"
    )
    .to(
      ".am-paper",
      {
        delay: 0.15,
        duration: 0.85,
        width: 0,
        ease: "power2.out",
        color: "transparent",
      },
      "phase-1"
    )
    .to(
      ".am-paper",
      {
        delay: 0.6,
        duration: 0.4,
        opacity: 0,
      },
      "phase-1"
    )
    .to(
      ".exit-paw",
      {
        duration: 0.5,
        translateX: "80vw",
        ease: "power2.in",
      },
      "phase-2"
    );

  return aboutMeExit;
}
