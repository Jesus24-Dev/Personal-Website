import { motion } from 'framer-motion';

interface ButtonProps {
  img: string;
  text: string;
  color: 'red' | 'blue' | 'gray';
  link: string;
}

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function Button({img, text, color, link}: ButtonProps) {
  const colorClasses = {
    red: 'bg-red-500 hover:bg-red-600 active:bg-red-700',
    blue: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700',
    gray: 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700'
  };

  return (
    <motion.div variants={buttonVariants}>
      <motion.a 
        href={link}
        target="_blank" 
        className={`${colorClasses[color]} font-roboto rounded-lg py-2 px-5 sm:py-3 sm:px-6 w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 transition-all duration-200`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src={`/svg/${img}.svg`} 
          alt={`${text} icon`} 
          className="w-5 sm:w-6" 
        />
        <span className="font-medium sm:font-semibold text-white text-sm sm:text-base">
          {text}
        </span>            
      </motion.a>
    </motion.div>
  );
}