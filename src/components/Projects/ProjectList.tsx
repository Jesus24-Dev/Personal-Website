import { motion } from 'framer-motion';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import projects from '../../data/projects.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
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

function ProjectList() {

  return (
    <motion.div
      className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center max-w-6xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {projects.map((project: ProjectCardProps, index) => (
        <motion.div
          key={`project-${index}`}
          variants={itemVariants}
          whileHover={{
            y: -8,
            transition: { type: 'spring', stiffness: 300 }
          }}
        >
          <ProjectCard 
            id={project.id}
            category={project.category}
            link={project.link}
            imageUrl={project.imageUrl}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectList;