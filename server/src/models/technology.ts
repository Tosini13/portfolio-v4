import mongoose, { Document } from "mongoose";
import { Id } from "./general";

export enum ETechnologyField {
  "FRONTEND" = "FRONTEND",
  "BACKEND" = "BACKEND",
  "TOOLS" = "TOOLS",
}

const Schema = mongoose.Schema;

const STechnology = new Schema({
  logoSrc: {
    type: String,
    required: [true, "logoSrc is required"],
  },
  title: {
    type: String,
    required: [true, "title is required"],
  },
  field: {
    type: String,
    required: [true, "field is required"],
  },
});

export type TTechnology = {
  logoSrc: string;
  title: string;
  field: ETechnologyField;
};

export type TTechnologyRes = TTechnology & {
  id: Id;
};

export interface ITechnology extends Document {
  logoSrc: string;
  title: string;
  field: ETechnologyField;
}

const Technology = mongoose.model<ITechnology>("technology", STechnology);

export default Technology;
