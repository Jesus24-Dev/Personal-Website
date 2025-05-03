import Icon from './Icon';
import { motion } from 'framer-motion';

const icons = ['java', 'spring', 'ts', 'node', 'react', 'tailwind', 'git'];

export default function IconList() {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-[90vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      {icons.map((icon) => (
        <motion.div 
          key={icon}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400 }}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
        >
          <Icon imgName={icon} />
        </motion.div>
      ))}
    </motion.div>
  );
}