const ProjectCard = ({ project }) => {
  return (
    <article className="w-full sm:w-[45%] md:w-[30%] lg:w-[270px] mx-auto">
      <div className="image-area relative">
        <img
          className="rounded-[12px] w-full h-[160px] object-cover shadow-md"
          src={project.img}
          alt={project.title}
        />
      </div>
      <div className="mt-3">
        <p className="text-sm font-semibold text-gray-900">{project.title}</p>
        <p className="text-xs font-light text-gray-500">{project.sub}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
