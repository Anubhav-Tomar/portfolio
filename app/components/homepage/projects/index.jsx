import { projectsData } from '@/utils/data/projects-data';  
import ProjectCard from './project-card';  

const Projects = () => {
  return (
    <section id="projects" className="pt-20 lg:pt-28 px-4 md:px-12 bg-[#0b0b1a]">
      {/* Header */}
      <div className="flex items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 text-transparent bg-clip-text">
          Projects
        </h2>
        <div className="flex-1 h-[2px] bg-gray-700 ml-6 mt-3"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"> 
        {projectsData.slice(0, 6).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
