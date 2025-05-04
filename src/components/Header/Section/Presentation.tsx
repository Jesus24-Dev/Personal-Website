import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

export default function Presentation() {
  const { t } = useTranslation();
  return (
    <div className="text-center space-y-2 sm:space-y-4 px-4">
      <motion.h3 
        className="text-white text-2xl sm:text-3xl md:text-5xl opacity-90 font-bebas"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("header.welcome")} <span className="text-lime-200">{t("header.presentation")}</span>
      </motion.h3>
      
      <motion.h1 
        className="font-roboto text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-emerald-400 cursor-default"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        {t("header.name")}
      </motion.h1>
      
      <motion.h3 
        className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light font-bebas"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.4 }}
      >
        {t("header.description")} <span className="font-medium text-lime-200">{t("header.role")}</span>
      </motion.h3>
    </div>
  );
}