import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./Toggle";
import { Navigation } from "./Nav";

const sidebar = {
  open: (height = 9) => ({
    clipPath: `ellipse(${height * 8}% ${height * 5}% at 100% 0%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "ellipse(16% 10% at 100% 0%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function App() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom="100%"
    >
      <MenuToggle toggle={() => toggleOpen()} />
      <motion.div
        className="fixed top-0 right-0 dark:bg-darkMenu bg-menu bg-secondary-blue w-80 h-[600px] z-50"
        variants={sidebar}
      >
        <Navigation />
      </motion.div>
    </motion.nav>
  );
}
