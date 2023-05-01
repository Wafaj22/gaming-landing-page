import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Socials from "./Socials";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] dark:text-white text-primary-black">
          Join Hyperrealms
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 dark:bg-primary-orange bg-secondary-blue rounded-[32px] gap-[12px]"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Join Hyperrealms
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] dark:text-white text-primary-black">
            Hyperrealms
          </h4>
          <p className="font-normal text-[14px] dark:text-white text-primary-black opacity-50">
            Copyright © 2023 - 2024 Hyperrealms. All rights reserved.
          </p>
          <Socials />
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
