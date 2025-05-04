import { motion } from 'framer-motion';
import ProjectList from './ProjectList';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};


const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function Section() {
  const { t } = useTranslation();
  return (
    <motion.section 
      className="relative py-16 sm:py-20 lg:py-14 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          variants={titleVariants}
        >
          <motion.span 
            className="inline-block text-lime-200 font-medium mb-3 font-roboto"
            variants={titleVariants}
          >
            {t("projectPage.subtitle")}
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-bebas"
            variants={titleVariants}
          >
            {t("projectPage.prepo")} <span className="text-lime-200">{t("projectPage.title")}</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-lime-300 mx-auto"
            variants={titleVariants}
          />
        </motion.div>
        
        <ProjectList />
      </div>
    </motion.section>
  );
}