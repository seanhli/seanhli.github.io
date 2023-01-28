import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

export function backgroundSwitch(endInLM) {
  let bgTL = gsap.timeline({ paused: true });
  CustomEase.create(
    "resistance",
    "M0,0 C0,0 0.013,0.047 0.021,0.05 0.029,0.052 0.115,0.139 0.124,0.14 0.132,0.14 0.228,0.173 0.236,0.168 0.239,0.165 0.291,0.151 0.342,0.152 0.373,0.152 0.406,0.181 0.436,0.184 0.484,0.188 0.524,0.167 0.532,0.162 0.572,0.134 0.561,0.084 0.578,0.092 0.603,0.104 0.61,0.178 0.614,0.186 0.648,0.216 0.708,0.902 0.78,0.944 0.796,1.001 0.991,0.997 1,1 "
  );
  //cat paw
  bgTL
    .set(
      ".bg-cat-paw",
      {
        display: "block",
        bottom: "-50vh",
        right: "-30vh",
      },
      "phase-0"
    )
    .to(
      ".bg-cat-paw",
      {
        duration: 0.5,
        bottom: 0,
        right: 0,
      },
      "phase-1"
    )
    .to(
      ".bg-cat-paw",
      {
        delay: 0.5,
        duration: 1.25,
        right: "100%",
        ease: "resistance",
      },
      "phase-1"
    );

  //spin sign
  bgTL.to(
    `${endInLM ? ".dm-moon" : ".lm-sun"}`,
    {
      duration: 0.55,
      rotateY: "+=900deg",
      ease: "power1.in",
    },
    "phase-1"
  );

  //background slide
  bgTL
    .to(
      `.background-${endInLM ? "light" : "dark"}`,
      {
        delay: 0.5,
        duration: 1.25,
        width: "100%",
        ease: "resistance",
      },
      "phase-1"
    )
    .set(
      `.background-${endInLM ? "dark" : "light"}`,
      {
        width: 0,
        zIndex: -9,
      },
      "cleanup"
    )
    .set(
      `.background-${endInLM ? "light" : "dark"}`,
      {
        zIndex: -10,
      },
      "cleanup"
    )
    .set(
      ".bg-cat-paw",
      {
        display: "none",
      },
      "cleanup"
    );

  return bgTL;
}
