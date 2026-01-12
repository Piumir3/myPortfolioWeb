import { motion } from "framer-motion";

import { blogPosts } from "../constants"; // replace `testimonials` with `blogPosts`
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const BlogCard = ({ index, title, url, thumbnail }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-[#0f0c29]/50 backdrop-blur-md p-5 rounded-2xl xs:w-[320px] w-full border border-white/10 hover:border-accent-cyan/50 transition-colors"
  >
    <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>

    <h3 className="text-white text-[18px] font-semibold leading-[24px] min-h-[48px]">
      {title}
    </h3>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block text-sm text-accent-cyan hover:text-white transition-colors font-medium border-b border-accent-cyan/30 hover:border-white pb-1"
    >
      Read Full Post →
    </a>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div
      className={`mt-12 bg-black-100/30 rounded-[20px] glass-panel border-none`}
    >
      <div
        className={`bg-tertiary/40 rounded-t-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Latest from Medium</p>
          <h2 className={styles.sectionHeadText}>Tech Blog Posts.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {blogPosts.map((post, index) => (
          <BlogCard key={index} index={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
