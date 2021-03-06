import { createContext } from "react";
import axios from "axios";
import { observable, makeObservable, computed, action } from "mobx";
import { Id } from "../models/general";
import {
  EExperienceType,
  IExperience,
  TCreateExperience,
  TEndDate,
  EEndDate,
} from "../models/experience";
import { experiencesIdUrl, EXPERIENCES_API_URL } from "../models/const";
import { isAfter, isBefore } from "date-fns";

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

  sortByTime(expA: Experience, expB: Experience) {
    if (isAfter(new Date(expA.fromDate), new Date(expB.fromDate))) {
      return 1;
    }
    if (isBefore(new Date(expA.fromDate), new Date(expB.fromDate))) {
      return -1;
    }
    const expAToDate =
      expA.fromDate === EEndDate.PRESENT ? new Date() : expA.fromDate;
    const expBToDate =
      expB.fromDate === EEndDate.PRESENT ? new Date() : expB.fromDate;
    if (isAfter(new Date(expAToDate), new Date(expBToDate))) {
      return 1;
    }
    if (isBefore(new Date(expAToDate), new Date(expBToDate))) {
      return -1;
    }
    return 0;
  }

  get getJobs() {
    return this.experiences
      .filter((exp) => exp.type === EExperienceType.JOB)
      .sort(this.sortByTime);
  }

  get getEducation() {
    return this.experiences
      .filter((exp) => exp.type === EExperienceType.EDUCATION)
      .sort(this.sortByTime);
  }

  async fetch() {
    const res = await axios.get<IExperience[]>(EXPERIENCES_API_URL);
    this.experiences = res.data.map((techData) => new Experience(techData));
  }

  async createExperience(exp: TCreateExperience) {
    const res = await axios.post<IExperience>(EXPERIENCES_API_URL, exp);
    this.experiences = [...this.experiences, new Experience(res.data)];
  }

  async updateExperience({ id, ...exp }: IExperience) {
    const res = await axios.put<IExperience>(experiencesIdUrl(id), exp);
    this.experiences = this.experiences.map((tech) =>
      tech.id === res.data.id ? new Experience(res.data) : tech
    );
  }

  async deleteExperience(expId: Id) {
    const res = await axios.delete<IExperience>(experiencesIdUrl(expId));
    this.experiences = this.experiences.filter(
      (tech) => tech.id !== res.data.id
    );
  }

  constructor() {
    makeObservable(this, {
      experiences: observable,
      getJobs: computed,
      getEducation: computed,
      fetch: action,
      createExperience: action,
      updateExperience: action,
      deleteExperience: action,
    });
    this.fetch();
  }
}

const timeStore = new TimeStore();
export const TimeStoreContext = createContext(timeStore);
export const TimeStoreProvider: React.FC<{}> = ({ children }) => (
  <TimeStoreContext.Provider value={timeStore}>
    {children}
  </TimeStoreContext.Provider>
);
