import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { useTranslation } from 'react-i18next';

const techData = [
    { img: 'n8n', name: 'n8n' },
    { img: 'typescript', name: 'TypeScript' },
    { img: 'make', name: 'Make' },
    { img: 'zapier', name: 'Zapier' },
    { img: 'python', name: 'Python' },   
    { img: 'java', name: 'Java' },
    { img: 'react', name: 'React' },
    { img: 'git', name: 'Git' },
    { img: 'mysql', name: 'MySQL' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 10
    }
  }
};

export default function Section() {
  const { t } = useTranslation();
  return (
    <motion.section 
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.header 
        className="text-center mb-12"
        variants={headerVariants}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-3 font-bebas"
          variants={headerVariants}
        >
          {t("skills.title")}
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-slate-800 mx-auto"
          variants={headerVariants}
        />
      </motion.header>
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-2.5 md:gap-3"
        variants={containerVariants}
      >
        {techData.map((tech, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -5,
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            <SkillCard img={tech.img} name={tech.name}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}