import gsap from "gsap";

export default function animation() {
  gsap.to(".baby-womb", {
    rotation: 45,
    repeat: -1,
    yoyo: true,
    duration: 15,
    ease: "none",
  });
  gsap.fromTo(
    ".baby-womb",
    { y: 5 },
    {
      y: -5,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "none",
    }
  );
  gsap.fromTo(
    ".baby-womb",
    { x: -10 },
    {
      x: 10,
      repeat: -1,
      yoyo: true,
      duration: 5,
      ease: "none",
    }
  );
}
