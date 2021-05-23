import { createContext } from "react";
import { observable, makeObservable, computed } from "mobx";
import { Id } from "../models/general";
import mockTechnologies from "../components/skills/mockSkills";
import { ETechnologyField, ITechnology } from "../models/technology";

export class Technology implements ITechnology {
  id: Id;
  logoSrc: string;
  title: string;
  field: ETechnologyField;

  constructor(tech: ITechnology) {
    makeObservable(this, {
      id: observable,
      logoSrc: observable,
      title: observable,
      field: observable,
    });
    this.id = tech.id;
    this.logoSrc = tech.logoSrc;
    this.title = tech.title;
    this.field = tech.field;
  }
}

export class TechnologiesStore {
  technologies: Technology[] = [];

  getTechnologies() {
    return this.technologies;
  }

  get getFrontend() {
    return this.technologies.filter(
      (tech) => tech.field === ETechnologyField.FRONTEND
    );
  }

  get getBackend() {
    return this.technologies.filter(
      (tech) => tech.field === ETechnologyField.BACKEND
    );
  }

  get getTools() {
    return this.technologies.filter(
      (tech) => tech.field === ETechnologyField.TOOLS
    );
  }

  constructor() {
    makeObservable(this, {
      technologies: observable,
      getFrontend: computed,
      getBackend: computed,
      getTools: computed,
    });

    this.technologies = mockTechnologies.map((tech) => new Technology(tech));
  }
}

const technologiesStore = new TechnologiesStore();
export const TechnologiesStoreContext = createContext(technologiesStore);
export const TechnologiesStoreProvider: React.FC<{}> = ({ children }) => (
  <TechnologiesStoreContext.Provider value={technologiesStore}>
    {children}
  </TechnologiesStoreContext.Provider>
);
