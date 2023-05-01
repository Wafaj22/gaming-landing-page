import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import Icons from "./Icons";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] dark:text-white text-primary-black">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] dark:text-secondary-white text-gray-600">
          {subtitle}
        </p>
      </div>

      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] dark:border-white border-primary-black">
        <Icons
          type="arrow"
          color="w-[40%] h-[40%] object-contain dark:fill-white fill-black"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
