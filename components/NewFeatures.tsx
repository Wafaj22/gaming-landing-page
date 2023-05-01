import styles from "../styles";

type NewFeaturesProps = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

const NewFeatures = ({ imgUrl, title, subtitle }: NewFeaturesProps) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] dark:bg-primary-orange bg-secondary-blue`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] dark:text-white text-primary-black\">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] dark:text-[#B0B0B0] text-gray-600 leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
