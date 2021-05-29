import mongoose, { Document } from "mongoose";
import { Id } from "./general";

export type TEndDate = string | "PRESENT";

export enum EExperienceType {
  "EDUCATION" = "EDUCATION",
  "JOB" = "JOB",
}

const Schema = mongoose.Schema;

const SExperience = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  fromDate: {
    type: String,
    required: [true, "fromDate is required"],
  },
  toDate: {
    type: String,
    required: [true, "toDate is required"],
  },
  description: {
    type: String,
    required: false,
  },
  institution: {
    type: String,
    required: false,
  },
  technologies: {
    type: [String],
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
});

export type TExperience = {
  title: string;
  fromDate: string;
  toDate: TEndDate;
  description?: string;
  institution?: string;
  technologies?: string[];
  type: EExperienceType;
};

export type TExperienceRes = TExperience & {
  id: Id;
};

export interface IExperience extends Document {
  title: string;
  fromDate: string;
  toDate: TEndDate;
  description?: string;
  institution?: string;
  technologies?: string[];
  type: EExperienceType;
}

const Experience = mongoose.model<IExperience>("experience", SExperience);

export default Experience;
