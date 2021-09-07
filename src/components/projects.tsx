import React, {FC, useState, useEffect} from 'react';
import Proportion from './proportion';
import Star from './star';
import {Slide} from 'react-slideshow-image';
import axios from 'axios';
import './project.sass';

interface Project {
  id: number,
  name: string,
  description: string,
  language: string,
  fork: boolean
}

const Projects: FC = () => {
  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/xiaoxigua-1/repos')
        .then((data) => {
          const projectsData: Array<Project> = data.data;
          projectsData.sort((a, b) => {
            return b['stargazers_count'] - a['stargazers_count'];
          });
          projectsData.splice(10, projectsData.length);
          setProjects(projectsData);
        });
  }, []);

  return (
    <div className="section">
      <Slide
        easing="ease"
        className="projects"
        duration={6000}
        transitionDuration={500}
      >
        {projects.map((project) => {
          if (project.fork) return null;
          return (
            <div className="project" key={project.id}>
              <a className="box" href={project['html_url']}>
                <h1>{project.name}</h1>
                <p>
                  {
                    project.description ?
                      project.description : 'No description'
                  }
                </p>
                <div className="count">
                  <div>
                    <li className="fas fa-code"></li>
                    <span>{project.language ? project.language : 'None'}</span>
                  </div>
                  <Star
                    url={project['full_name']}
                    stargazersCount={project['stargazers_count']}
                  />
                  <div>
                    <li className="fas fa-code-branch"></li>
                    <span>{project['forks_count']}</span>
                  </div>
                </div>
                <Proportion url={project['full_name']}/>
              </a>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Projects;
