import { motion } from 'framer-motion';

interface SkillCardProps {
  img: string;
  name: string;
}

const cardVariants = {
  hover: {
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.6
    }
  }
};

export default function SkillCard({ img, name }: SkillCardProps) {
  return (
    <motion.article 
      className="relative bg-slate-800/90 hover:bg-slate-700/90 h-40 w-full flex flex-col justify-center items-center gap-3 p-4 shadow-lg overflow-hidden group"
      variants={cardVariants}
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/30 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.4 }}
      />
      
      <motion.div 
        className="relative z-10 h-16 w-16 flex items-center justify-center p-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/10 group-hover:border-white/20"
        variants={iconVariants}
      >
        <motion.img 
          src={`/svg/tech/${img}.svg`}
          alt={`${name} logo`}
          className="h-10 w-10 object-contain" 
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>           
      
      <motion.h3 
        className="relative z-10 text-white font-bold text-xl md:text-2xl tracking-tight text-center font-roboto"
        whileHover={{ scale: 1.05 }}
      >
        {name}
      </motion.h3>
    </motion.article>
  );
}