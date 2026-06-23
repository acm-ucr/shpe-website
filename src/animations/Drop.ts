// animations.ts
import { Variants } from "framer-motion";

const DropDown: Variants = {
  hidden: {
    y: "-125%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};
const DropUp: Variants = {
  hidden: {
    y: "125%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};
export { DropDown, DropUp };
