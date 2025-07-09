import { useState } from 'react';
import Button from './Button';
import ProjectCard from './cards/ProjectCard';

const projects = [
  {
    projectType: 'mobile',
    img: 'img/project/1.jpg',
    title: 'Rupismart',
    type: 'Team Project',
    sub: 'Bangkit Academy Capstone Project',
    lang: ['kotlin'],
  },
  {
    projectType: 'web',
    img: 'img/project/smkn.png',
    title: 'SMKN 1 KAWALI',
    type: 'Team Project',
    sub: 'Internship Project',
    lang: ['laravel', 'vue.js', 'bootstrap'],
  },
  {
    projectType: 'web',
    img: 'img/project/bukahuni.png',
    title: 'Bukahuni',
    type: 'Freelance Project',
    sub: 'Freelance Project (UI)',
    lang: ['bootstrap'],
  },
  {
    projectType: 'other',
    img: 'img/project/refisiku.jpg',
    title: 'Refisiku Page',
    type: 'Personal Project',
    sub: 'Personal Project',
    lang: ['Figma'],
  },
  {
    projectType: 'other',
    img: 'img/project/podcast.jpg',
    title: 'Podcast Level Up Your Work Life',
    type: 'Academic Project',
    sub: 'Academic Project',
    lang: ['capcut'],
  },
  {
    projectType: 'web',
    img: 'img/project/genply.png',
    title: 'Genply Landing Page',
    type: 'Freelance Project',
    sub: 'Freelance Project (UI)',
    lang: ['bootstrap'],
  },
];

const projectType = ['web', 'mobile', 'other'];

const buttons = [
  { text: 'Web', index: 0, isActive: true },
  { text: 'Mobile', index: 1, isActive: false },
  { text: 'Other', index: 2, isActive: false },
];

const Project = () => {
  const [filteredProject, setFilteredProject] = useState(
    projects.filter((p) => p.projectType === projectType[0])
  );
  const [currentProjectButton, setCurrentProjectButton] = useState(0);

  const projectButtonHandler = (index) => {
    setCurrentProjectButton(index);
    const filter = projects.filter((p) => p.projectType === projectType[index]);
    setFilteredProject(filter);
  };

  return (
    <section id="projectMenu" className="projectSection px-4 sm:px-8 my-8">
      <h1 className="text-center my-5 font-extrabold text-3xl">Projects</h1>
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              text={btn.text}
              isActive={currentProjectButton === index}
              onClick={() => projectButtonHandler(index)}
            />
          ))}
        </div>

        {/* Project Grid */}
        <div
          className={`w-full ${
            filteredProject.length > 0 ? 'grid' : 'flex'
          } gap-6 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
        >
          {filteredProject.length > 0 ? (
            filteredProject.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))
          ) : (
            <p className="text-gray-400 italic">No project available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
