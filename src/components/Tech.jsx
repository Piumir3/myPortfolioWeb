import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, icon, name }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="w-28 h-28 glass-panel rounded-full flex justify-center items-center cursor-pointer hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 group relative"
  >
    <div className="w-16 h-16 relative z-10">
      <img
        src={icon}
        alt={name}
        className="w-full h-full object-contain filter group-hover:brightness-125 transition-all"
      />
    </div>

    {/* Tooltip-like name on hover */}
    <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-secondary text-sm font-mono whitespace-nowrap">
      {name}
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-14 text-center">
        <p className={`${styles.sectionSubText} text-accent-cyan`}>My Tools</p>
        <h2 className={`${styles.sectionHeadText} text-gradient-blue`}>
          Technologies.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
