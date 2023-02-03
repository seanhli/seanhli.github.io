import { gsap } from "gsap";

export function contactExitAnimation() {
  let contactExit = gsap.timeline({ paused: true });

  // tug of war vertical while exiting right
  contactExit
    .set(
      ".cm-cat-paw",
      {
        display: "block",
        translateX: "-20vw",
        translateY: "-60vh",
      },
      "phase-0.0"
    )
    .set(
      ".cm-cat-paw-2",
      {
        display: "block",
        translateX: "20vw",
        translateY: "60vh",
      },
      "phase-0.0"
    )
    .to(
      ".cm-cat-paw",
      {
        duration: 0.5,
        translateY: "0",
        translateX: "0",
      },
      "phase-1"
    )
    .to(
      ".cm-cat-paw-2",
      {
        duration: 0.5,
        translateY: "0",
        translateX: "0",
      },
      "phase-1"
    );

  for (let i = 0; i <= 5; i++) {
    contactExit.to(
      ".contact-page",
      {
        duration: 0.3,
        delay: 0.3 * i,
        translateY: `${(-1) ** i * (5 + 3 * (i === 5 ? i * 30 : i))}vh`,
        ease: "power2.out",
      },
      "phase-2"
    );
  }

  return contactExit;
}
