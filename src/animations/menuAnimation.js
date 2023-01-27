import { gsap } from "gsap";

export function menuAnimation() {
  let openBook = gsap.timeline({ paused: true });
  let closeBook = gsap.timeline({ paused: true });
  let openMenuTL = gsap.timeline({ paused: true });
  let closeMenuTL = gsap.timeline({ paused: true });

  openBook
    .to(
      "#closed-book",
      {
        duration: 0.25,
        rotateY: "-=135deg",
      },
      "phase-0"
    )
    .set(
      "#closed-book",
      {
        display: "none",
        rotateY: "-=225deg",
      },
      "phase-1"
    )
    .set(
      "#opened-book",
      {
        display: "block",
      },
      "phase-1"
    );

  closeBook
    .to(
      "#opened-book",
      {
        duration: 0.25,
        rotateY: "+=135deg",
      },
      "phase-0"
    )
    .set(
      "#opened-book",
      {
        display: "none",
        rotateY: "+=225deg",
      },
      "phase-1"
    )
    .set(
      "#closed-book",
      {
        display: "block",
      },
      "phase-1"
    );

  openMenuTL
    .set(
      ".menu-bar-line",
      {
        display: "block",
        height: 0,
      },
      "phase-0"
    )
    .set(
      ".menu-icon",
      {
        display: "block",
        opacity: 0,
      },
      "phase-0"
    );

  for (let i = 1; i <= 3; i++) {
    openMenuTL
      .to(
        `#bar-${i}`,
        {
          duration: 0.15,
          height: "max(6.5vh, 30px)",
        },
        `phase-${i}`
      )
      .to(
        `#menu-icon-${i}`,
        {
          duration: 0.1,
          opacity: 1,
          ease: "power2.out",
        },
        `phase-${i}.1`
      );
  }

  for (let i = 3; i >= 1; i--) {
    closeMenuTL
      .to(
        `#menu-icon-${i}`,
        {
          duration: 0.025,
          opacity: 0,
          ease: "power2.out",
        },
        `phase-${i}`
      )
      .to(
        `#bar-${i}`,
        {
          duration: 0.05,
          height: 0,
        },
        `phase-${i}.1`
      )
      .set(
        `#menu-icon-${i}`,
        {
          display: "none",
          opacity: 0,
        },
        `cleanup-${i}`
      )
      .set(
        `#bar-${i}`,
        {
          display: "none",
        },
        `cleanup-${i}`
      );
  }

  return [openBook, closeBook, openMenuTL, closeMenuTL];
}
