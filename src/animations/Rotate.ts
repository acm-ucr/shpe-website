// animations.ts
import { Variants } from "framer-motion";

const RotateClockwise: Variants = {
  hidden: {
    opacity: 0,
    rotate: "-30deg",
  },
  visible: {
    opacity: 1,
    rotate: "0deg",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
const RotateCounterClockwise: Variants = {
  hidden: {
    opacity: 0,
    rotate: "30deg",
  },
  visible: {
    opacity: 1,
    rotate: "0deg",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
export { RotateClockwise, RotateCounterClockwise };
