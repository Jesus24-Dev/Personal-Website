import projects from '../../data/projects.json'
import ProjectCard, { ProjectCardProps } from './ProjectCard';


function ProjectList() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {projects.map((project: ProjectCardProps, index) => (
          <ProjectCard 
            key={`project-${index}`}
            title={project.title}
            description={project.description}
            category={project.category}
            link={project.link}
            imageUrl={project.imageUrl}
          />
        ))}           
      </div>
    </div>
  );
}

export default ProjectList;