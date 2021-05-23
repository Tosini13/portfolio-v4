import { createContext } from "react";
import { observable, makeObservable } from "mobx";
import { IProject } from "../models/project";
import { Id } from "../models/general";
import { mockPortfolio } from "../components/portfolio/mockPortfolio";

export class Project implements IProject {
  id: Id;
  logoSrc: string;
  title: string;
  description?: string;
  www?: string;
  github?: string;
  technologies?: Id[];

  constructor(tech: IProject) {
    makeObservable(this, {
      id: observable,
      logoSrc: observable,
      title: observable,
      description: observable,
      www: observable,
      github: observable,
      technologies: observable,
    });
    this.id = tech.id;
    this.logoSrc = tech.logoSrc;
    this.title = tech.title;
    this.description = tech.description;
    this.www = tech.www;
    this.github = tech.github;
    this.technologies = tech.technologies;
  }
}

export class ProjectsStore {
  projects: Project[] = [];

  getTechnologies() {
    return this.projects;
  }

  constructor() {
    makeObservable(this, {
      projects: observable,
    });

    this.projects = mockPortfolio.map((project) => new Project(project));
  }
}

const projectsStore = new ProjectsStore();
export const ProjectsStoreContext = createContext(projectsStore);
export const ProjectsStoreProvider: React.FC<{}> = ({ children }) => (
  <ProjectsStoreContext.Provider value={projectsStore}>
    {children}
  </ProjectsStoreContext.Provider>
);
