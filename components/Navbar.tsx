import { motion } from "framer-motion";
import React from "react";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import Icons from "./Icons";
// import Searchbar from "./Searchbar";
// import ToggleNav from "./Toggle/ToggleNav";

const Navbar = ({ darkMode, toggleMode }: any) => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8`}>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] dark:text-white text-primary-black">
        Hyperrealms
      </h2>
    </div>
    <div className="fixed top-0 right-0  z-50">
      {darkMode ? (
        <Icons type="sun" onClick={toggleMode} />
      ) : (
        <Icons type="moon" onClick={toggleMode} />
      )}
    </div>
  </motion.nav>
);

export default Navbar;
