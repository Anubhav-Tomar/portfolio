import SingleProjectCard from './single-project';  // Import the single project card

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1a1a2e] rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/50 flex flex-col h-full">
      <SingleProjectCard project={project} />  
    </div>
  );
};

export default ProjectCard;

