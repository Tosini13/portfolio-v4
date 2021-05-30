import { createContext } from "react";
import { observable, makeObservable, action } from "mobx";
import { IProject, TCreateProject } from "../models/project";
import { Id } from "../models/general";
import axios from "axios";
import { projectsIdUrl, PROJECTS_API_URL } from "../models/const";

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

  async fetch() {
    const res = await axios.get<IProject[]>(PROJECTS_API_URL);
    this.projects = res.data.map((techData) => new Project(techData));
  }

  async createProject(tech: TCreateProject) {
    const res = await axios.post<IProject>(PROJECTS_API_URL, tech);
    this.projects = [...this.projects, new Project(res.data)];
  }

  async updateProject({ id, ...tech }: IProject) {
    const res = await axios.put<IProject>(projectsIdUrl(id), tech);
    this.projects = this.projects.map((tech) =>
      tech.id === res.data.id ? new Project(res.data) : tech
    );
  }

  async deleteProject(techId: Id) {
    const res = await axios.delete<IProject>(projectsIdUrl(techId));
    this.projects = this.projects.filter((tech) => tech.id !== res.data.id);
  }

  constructor() {
    makeObservable(this, {
      projects: observable,
      fetch: action,
      createProject: action,
      updateProject: action,
      deleteProject: action,
    });
    this.fetch();
  }
}

const projectsStore = new ProjectsStore();
export const ProjectsStoreContext = createContext(projectsStore);
export const ProjectsStoreProvider: React.FC<{}> = ({ children }) => (
  <ProjectsStoreContext.Provider value={projectsStore}>
    {children}
  </ProjectsStoreContext.Provider>
);
