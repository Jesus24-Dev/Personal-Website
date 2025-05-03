import { motion } from 'framer-motion';

export default function HeroImage() {
  return (
    <motion.div 
      className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.img 
        src="/img/Avatar.png" 
        alt="Jesus24-Dev" 
        className="w-full h-full rounded-2xl shadow-xl object-cover border-4 border-white"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
      <motion.div 
        className="absolute inset-0 rounded-2xl border-4 border-lime-200 opacity-0 hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}