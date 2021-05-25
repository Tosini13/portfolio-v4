import { createContext } from "react";
import { observable, makeObservable, computed } from "mobx";
import { Id } from "../models/general";
import { EExperienceType, IExperience, TEndDate } from "../models/experience";
import { educations, experiences } from "./mock/mockExperience";

export class Experience implements IExperience {
  id: Id;
  title: string;
  fromDate: string;
  toDate: TEndDate;
  description?: string;
  institution?: string;
  technologies?: string[];
  type: EExperienceType;

  constructor(tech: IExperience) {
    makeObservable(this, {
      id: observable,
      title: observable,
      description: observable,
      fromDate: observable,
      toDate: observable,
      institution: observable,
      technologies: observable,
      type: observable,
    });
    this.id = tech.id;
    this.title = tech.title;
    this.description = tech.description;
    this.fromDate = tech.fromDate;
    this.toDate = tech.toDate;
    this.institution = tech.institution;
    this.technologies = tech.technologies;
    this.type = tech.type;
  }
}

export class TimeStore {
  experiences: Experience[] = [];

  get getJobs() {
    return this.experiences.filter((exp) => exp.type === EExperienceType.JOB);
  }

  get getEducation() {
    return this.experiences.filter(
      (exp) => exp.type === EExperienceType.EDUCATION
    );
  }

  constructor() {
    makeObservable(this, {
      experiences: observable,
      getJobs: computed,
      getEducation: computed,
    });

    this.experiences = [
      ...educations.map((experience) => new Experience(experience)),
      ...experiences.map((experience) => new Experience(experience)),
    ];
  }
}

const timeStore = new TimeStore();
export const TimeStoreContext = createContext(timeStore);
export const TimeStoreProvider: React.FC<{}> = ({ children }) => (
  <TimeStoreContext.Provider value={timeStore}>
    {children}
  </TimeStoreContext.Provider>
);
