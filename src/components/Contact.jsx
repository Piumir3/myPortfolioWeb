import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  emailIcon,
  github,
  hackerrank,
  linkedin,
  medium,
  phoneIcon,
} from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Piumi Rathnayake",
          from_email: form.email,
          to_email: "piumirathnayake200@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        },
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] glass-panel p-8 rounded-2xl w-full xl:w-1/2"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="mt-10">
          <div className="flex flex-col gap-6 text-white">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
              <div className="w-12 h-12 bg-[#00f2ea]/20 rounded-full flex justify-center items-center">
                <img src={phoneIcon} alt="phone" className="w-6 h-6" />
              </div>
              <a
                href="tel:+94769636375"
                className="hover:text-[#00f2ea] transition-colors text-lg"
              >
                +(94) 76 963 6375
              </a>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
              <div className="w-12 h-12 bg-[#ff0055]/20 rounded-full flex justify-center items-center">
                <img src={emailIcon} alt="email" className="w-6 h-6" />
              </div>
              <a
                href="mailto:piumir52@gmail.com"
                className="hover:text-[#ff0055] transition-colors text-lg"
              >
                piumirathnayake200@gmail.com
              </a>
            </div>
          </div>

          <div className="flex gap-4 mt-8 justify-center">
            {[
              {
                link: "https://www.linkedin.com/in/-piumi-rathnayake/",
                icon: linkedin,
                name: "LinkedIn",
              },
              {
                link: "https://medium.com/@piumir4",
                icon: medium,
                name: "Medium",
              },
              {
                link: "https://www.hackerrank.com/profile/Piumir4",
                icon: hackerrank,
                name: "HackerRank",
              },
              {
                link: "https://github.com/Piumipr",
                icon: github,
                name: "GitHub",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110"
              >
                <img src={social.icon} alt={social.name} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="py-4 px-6 text-white rounded-lg outline-none font-medium bg-black/20 border border-white/10 focus:border-[#00f2ea] focus:bg-black/40 transition-all placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="py-4 px-6 text-white rounded-lg outline-none font-medium bg-black/20 border border-white/10 focus:border-[#00f2ea] focus:bg-black/40 transition-all placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="py-4 px-6 text-white rounded-lg outline-none font-medium bg-black/20 border border-white/10 focus:border-[#00f2ea] focus:bg-black/40 transition-all placeholder:text-secondary resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-[#00f2ea] text-primary py-3 px-8 rounded-xl outline-none w-full font-bold shadow-md shadow-primary hover:bg-[#00f2ea]/80 transition-all flex justify-center"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-full xl:w-1/2"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
