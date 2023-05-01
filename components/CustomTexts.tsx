import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";
import { ReactNode } from "react";

type TextProps = {
  title: string | ReactNode;
  textStyles?: string;
};

export const TypingText = ({ title, textStyles }: TextProps) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] dark:text-secondary-white text-gray-600 ${textStyles}`}
  >
    {Array.from(title as string).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: TextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] dark:text-white text-primary-black ${textStyles}`}
  >
    {title}
  </motion.h2>
);
