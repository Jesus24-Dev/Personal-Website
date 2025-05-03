import { motion } from 'framer-motion';

export default function Presentation() {
  return (
    <div className="text-center space-y-2 sm:space-y-4 px-4">
      <motion.h3 
        className="text-white text-2xl sm:text-3xl md:text-5xl opacity-90"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello World! <span className="text-lime-200">It's me</span>
      </motion.h3>
      
      <motion.h1 
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-emerald-400 cursor-default"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        Jesus Sirit
      </motion.h1>
      
      <motion.h3 
        className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.4 }}
      >
        FullStack <span className="font-medium text-lime-200">Developer</span>
      </motion.h3>
    </div>
  );
}