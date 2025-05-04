import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function TextCage() {
  const { t } = useTranslation();
  return (
    <motion.div className="space-y-6" variants={textVariants}>
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold text-slate-800 font-bebas"
        variants={textVariants}
      >
        {t("about.title")}
      </motion.h2>
      <motion.div className="space-y-4" variants={textVariants}>
        <motion.p 
          className="text-base md:text-lg text-slate-600 leading-relaxed font-roboto"
          variants={textVariants}
        >
          {t("about.first-text")}
        </motion.p>
        <motion.p 
          className="text-base md:text-lg text-slate-600 leading-relaxed font-roboto"
          variants={textVariants}
        >
          {t("about.second-text")}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}