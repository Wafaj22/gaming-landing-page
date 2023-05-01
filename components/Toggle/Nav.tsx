import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./Items";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Items = [
  { id: "0", text: "About", link: "about" },
  { id: "1", text: "Explore", link: "explore" },
  { id: "2", text: "Services", link: "services" },
  { id: "3", text: "Feedback", link: "feedback" },
  { id: "4", text: "Get started", link: "get-started" },
  { id: "5", text: "News", link: "insights" },
];

export const Navigation = () => (
  <motion.div
    variants={variants}
    className="pt-8 pr-16 float-right flex flex-col gap-2"
  >
    {Items.map((item) => (
      <MenuItem id={item.id} key={item.id} text={item.text} link={item.link} />
    ))}
  </motion.div>
);
