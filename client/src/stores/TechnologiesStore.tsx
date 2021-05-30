import { createContext } from "react";
import { observable, makeObservable, computed, action } from "mobx";
import { Id } from "../models/general";
import {
  ETechnologyField,
  ITechnology,
  TCreateTechnology,
  TTechGroup,
} from "../models/technology";
import axios from "axios";
import { technologiesIdUrl, TECHNOLOGIES_API_URL } from "../models/const";

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

  get getTechGroups(): TTechGroup[] {
    const techGroups: TTechGroup[] = [
      {
        field: ETechnologyField.FRONTEND,
        technologies: this.getFrontend,
      },
      {
        field: ETechnologyField.BACKEND,
        technologies: this.getBackend,
      },
      {
        field: ETechnologyField.TOOLS,
        technologies: this.getTools,
      },
    ];

    return techGroups;
  }

  async fetch() {
    const res = await axios.get<ITechnology[]>(TECHNOLOGIES_API_URL);
    this.technologies = res.data.map((techData) => new Technology(techData));
  }

  async createTechnology(tech: TCreateTechnology) {
    console.log("tech", tech);
    const res = await axios.post<ITechnology>(TECHNOLOGIES_API_URL, tech);
    this.technologies = [...this.technologies, new Technology(res.data)];
  }

  async updateTechnology({ id, ...tech }: ITechnology) {
    const res = await axios.put<ITechnology>(technologiesIdUrl(id), tech);
    this.technologies = this.technologies.map((tech) =>
      tech.id === res.data.id ? new Technology(res.data) : tech
    );
  }

  async deleteTechnology(techId: Id) {
    const res = await axios.delete<ITechnology>(technologiesIdUrl(techId));
    this.technologies = this.technologies.filter(
      (tech) => tech.id !== res.data.id
    );
  }

  constructor() {
    makeObservable(this, {
      technologies: observable,
      getFrontend: computed,
      getBackend: computed,
      getTools: computed,
      getTechGroups: computed,
      fetch: action,
      createTechnology: action,
      updateTechnology: action,
      deleteTechnology: action,
    });
    this.fetch();
  }
}

const technologiesStore = new TechnologiesStore();
export const TechnologiesStoreContext = createContext(technologiesStore);
export const TechnologiesStoreProvider: React.FC<{}> = ({ children }) => (
  <TechnologiesStoreContext.Provider value={technologiesStore}>
    {children}
  </TechnologiesStoreContext.Provider>
);
