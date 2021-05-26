import { format } from "date-fns";
import { Request, Response } from "express";
import { LeanDocument } from "mongoose";
import Technology, {
  ITechnology,
  TTechnology,
  TTechnologyRes,
} from "../models/technology";

const convertTechnology = (
  technology: LeanDocument<ITechnology>
): TTechnologyRes => ({
  id: technology._id,
  logoSrc: technology.logoSrc,
  title: technology.title,
  field: technology.field,
});

export const getTechnologies = (req: Request, res: Response) => {
  Technology.find({})
    .then((items) => res.send(items.map((item) => convertTechnology(item))))
    .catch((err) => console.log(err));
};

export const createTechnology = (req: Request, res: Response) => {
  const technology: TTechnology = {
    logoSrc: req.body.logoSrc,
    title: req.body.title,
    field: req.body.field,
  };

  Technology.create(technology)
    .then((createdItem) => res.send(convertTechnology(createdItem)))
    .catch((e) => console.log(e));
};

export const updateTechnology = async (req: Request, res: Response) => {
  const technology: TTechnology = {
    logoSrc: req.body.logoSrc,
    title: req.body.title,
    field: req.body.field,
  };

  try {
    await Technology.updateOne({ _id: req.params.id }, technology);
    res.send(technology);
  } catch (e) {
    res.send(e);
  }
};

export const deleteTechnology = (req: Request, res: Response) => {
  Technology.findByIdAndRemove({ _id: req.params.id })
    .then(
      (deletedItem) => deletedItem && res.send(convertTechnology(deletedItem))
    )
    .catch((e) => console.log(e));
};
