import { motion } from 'framer-motion';
const hoverVariants = {
  hover: {
    y: -10,
    transition: { 
      type: 'spring',
      stiffness: 300,
      damping: 10
    }
  }
};

export interface ProjectCardProps {
  title: string;
  category: string;
  link: string;
  description: string;
  imageUrl: string;
}

export default function ProjectCard({ title, category, link, description, imageUrl }: ProjectCardProps) {
  return (
    <motion.article 
      className="relative h-72 w-64 sm:h-80 sm:w-72 md:h-96 md:w-80 rounded-2xl overflow-hidden shadow-lg"
      variants={hoverVariants}
      whileHover="hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.6 }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/80 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-300 rounded-2xl" />
      
      <div className="relative h-full flex flex-col justify-between p-5 sm:p-6">
        <div>
          <motion.h2 
            className="text-xl sm:text-2xl font-bold text-white mb-2"
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h2>
          
          <motion.span 
            className="inline-block bg-lime-500/20 text-lime-300 text-xs sm:text-sm font-medium px-2.5 py-0.5 rounded-full mb-3"
            whileHover={{ scale: 1.05 }}
          >
            {category}
          </motion.span>

          <motion.p 
            className="text-gray-200 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4"
            whileHover={{ y: -2 }}
          >
            {description}
          </motion.p>
        </div>
        
        <motion.div 
          className="flex flex-wrap justify-end gap-2 sm:gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
            <div className="flex flex-wrap justify-end gap-2 sm:gap-3">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lime-50 font-medium bg-lime-600 hover:bg-lime-700 active:bg-lime-800 py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            View Demo
          </a>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-medium bg-transparent border border-lime-400 hover:bg-lime-600/30 hover:border-lime-600 active:bg-lime-700/40 py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-center gap-1"
          >
            Code
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </a>
        </div> 
        </motion.div>
      </div>                               
    </motion.article>
  );
}