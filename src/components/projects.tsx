import React, {FC, useState, useEffect} from 'react';
import Proportion from './proportion';
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
  // if (fullPageAPI) fullPageAPI.reBuild();
  useEffect(() => {
    axios.get('https://api.github.com/users/xiaoxigua-1/repos')
        .then((data) => {
          // console.log(fullPageAPI); fullPageAPI.reBuild();
          setProjects(data.data);
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
                  <div>
                    <li className="fas fa-star"></li>
                    <span>{project['stargazers_count']}</span>
                  </div>
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
