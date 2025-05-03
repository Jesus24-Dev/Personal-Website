import { motion } from 'framer-motion';
import TextCage from './TextCage';
import Button from './Button';
import HeroImage from './HeroImage';

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

export default function Section() {
  return (
    <motion.section 
      className="py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[calc(100vh-4rem)]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.article 
            className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1"
            variants={containerVariants}
          >
            <TextCage/>            
            <motion.div 
              className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4"
              variants={containerVariants}
            >
              <Button link={'#'} color={'red'} img={'gmail'} text={'Gmail'}/>
              <Button link={'#'} color={'blue'} img={'linkedin'} text={'LinkedIn'}/>
              <Button link={'#'} color={'gray'} img={'github'} text={'Github'}/>
            </motion.div>
          </motion.article>                  
          <motion.aside 
            className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <HeroImage/>
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
}