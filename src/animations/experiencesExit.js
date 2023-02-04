import { gsap } from "gsap";

export function expExitAnimation(posts) {
  let expExit = gsap.timeline({ paused: true });

  // fade out click note text and slide cards up
  expExit.to(
    ".learn-more",
    {
      duration: 1,
      opacity: 0,
    },
    "phase-1"
  );

  for (let i = 1; i <= posts; i++) {
    expExit.to(
      `.exp-post:nth-child(${i})`,
      {
        duration: 0.5,
        delay: 0.15*(i-1),
        translateY: "-100vh",
        ease: "power2.in",
      },
      "phase-1"
    );
  }

  return expExit;
}
