import { Variants } from "framer-motion";
const FloatUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const FloatRight: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const FloatLeft: Variants = {
  hidden: { opacity: 0, x: 15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export { FloatUp, FloatRight, FloatLeft };
