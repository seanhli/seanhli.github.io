import { gsap } from "gsap";

export function projectsExitAnimation(posts) {
  let projectsExit = gsap.timeline({ paused: true });

  for (let i = 1; i <= posts; i++) {
    projectsExit.to(
      `.project-card:nth-child(${i})`,
      {
        duration: 0.6,
        delay: 0.1*(i-1),
        translateY: "-100vh",
        ease: "power2.in",
      },
      "phase-1"
    );
  }

  return projectsExit;
}
