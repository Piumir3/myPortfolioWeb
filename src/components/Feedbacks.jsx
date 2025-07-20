import { motion } from "framer-motion";

import { blogPosts } from "../constants"; // replace `testimonials` with `blogPosts`
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const BlogCard = ({ index, title, url, thumbnail }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-5 rounded-2xl xs:w-[320px] w-full hover:shadow-lg transition-all duration-300"
  >
    <img
      src={thumbnail}
      alt={title}
      className="w-full h-40 object-cover rounded-lg mb-4"
    />
    <h3 className="text-white text-[18px] font-semibold">{title}</h3>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-block text-sm text-secondary hover:underline"
    >
      Read Full Post →
    </a>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
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
