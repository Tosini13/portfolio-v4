import { Id } from "./general";

export type TEndDate = string | "PRESENT";

export enum EExperienceType {
  "EDUCATION" = "EDUCATION",
  "JOB" = "JOB",
}

export interface IExperience {
  id: Id;
  title: string;
  fromDate: string;
  toDate: TEndDate;
  description?: string;
  institution?: string;
  technologies?: string[];
  type: EExperienceType;
}
