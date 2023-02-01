import { gsap } from "gsap";

export function signSwipe() {
  let signSwipe = gsap.timeline({ paused: true });

  // cat paw swipe in
  signSwipe
    .set(
      ".sign-cat-paw",
      {
        display: "block",
      },
      "phase-0.0"
    )
    .set(
      ".sign-cat-paw",
      {
        translateY: "60vh",
        scaleX: "200%",
        scaleY: "200%",
      },
      "phase-0"
    )
    .to(
      ".sign-cat-paw",
      {
        duration: 0.5,
        scaleX: "100%",
        scaleY: "100%",
        translateY: "-25vh",
        ease: "power2.in",
      },
      "phase-1"
    )
    .to(
      ".sign-cat-paw",
      {
        duration: 0.5,
        scaleX: "50%",
        scaleY: "50%",
        translateY: "60vh",
        ease: "power2.out",
      },
      "phase-2"
    );

  // sign flip back
  signSwipe
  .set(
    ".hanging-display",
      {
        animation: "none",
        translateY: 0,
      },
      "phase-2"
  )
  .to(
      ".hanging-display",
      {
        duration: 0.25,
        rotateX: "+=90deg",
        rotateY: "+=10deg",
        rotateZ: "-=15deg",
        translateY: "-35vh",
        ease: "power4.out",
      },
      "phase-2"
    )

  return signSwipe;
}
