import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function TextCage() {
  return (
    <motion.div className="space-y-6" variants={textVariants}>
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold text-slate-800"
        variants={textVariants}
      >
        About me
      </motion.h2>
      <motion.div className="space-y-4" variants={textVariants}>
        <motion.p 
          className="text-base md:text-lg text-slate-600 leading-relaxed"
          variants={textVariants}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Quidem soluta magni atque aspernatur? Consequatur a nesciunt 
          veritatis eum repudiandae dolorum mollitia cumque rerum molestiae 
          maiores consectetur neque architecto, maxime accusamus.
        </motion.p>
        <motion.p 
          className="text-base md:text-lg text-slate-600 leading-relaxed"
          variants={textVariants}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis 
          nam ipsam consequatur, inventore quas ad error quae architecto ab! Mollitia 
          libero odio alias voluptates a iure dolorem consequuntur dolor repudiandae.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}