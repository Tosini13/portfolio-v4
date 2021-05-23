import { createContext } from "react";
import { observable, makeObservable } from "mobx";
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

  constructor() {
    makeObservable(this, {
      technologies: observable,
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
