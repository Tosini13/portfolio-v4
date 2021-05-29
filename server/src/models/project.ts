import mongoose, { Document } from "mongoose";
import { Id } from "./general";
const Schema = mongoose.Schema;

const SProject = new Schema({
  logoSrc: {
    type: String,
    required: [true, "logoSrc is required"],
  },
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: false,
  },
  www: {
    type: String,
    required: false,
  },
  github: {
    type: String,
    required: false,
  },
  technologies: {
    type: [String],
    required: false,
  },
});

export type TProject = {
  logoSrc: string;
  title: string;
  description?: string;
  www?: string;
  github?: string;
  technologies?: Id[];
};

export type TProjectRes = TProject & {
  id: Id;
};

export interface IProject extends Document {
  logoSrc: string;
  title: string;
  description?: string;
  www?: string;
  github?: string;
  technologies?: Id[];
}

const Project = mongoose.model<IProject>("project", SProject);

export default Project;
