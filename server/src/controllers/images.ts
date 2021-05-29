import fs from "fs";
import { format } from "date-fns";
import { Request, Response } from "express";
import { deleteImageAWS, uploadimageAWS } from "./actions/images";
import multer from "multer";
import { DATE_FILE_NAME } from "../models/general";

const galleryDir = "gallery";
export const AWS_GALLERY_ROOT = "amazonaws.com/";

export const initNodeGallery = () => {
  const galleryPath = `./${galleryDir}`;
  if (!fs.existsSync(galleryPath)) {
    fs.mkdirSync(galleryPath);
  }
};

const multerStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, galleryDir);
  },
  filename: (_req, file, cb) => {
    const extension = file.mimetype.replace("image/", "");
    const filename = `gallery_image_${format(new Date(), DATE_FILE_NAME)}`;
    cb(null, `${filename}.${extension}`);
  },
});

export const multerConfig = multer({
  storage: multerStorage,
});

export const uploadImage = async (req: Request, res: Response) => {
  const file = await uploadimageAWS({
    path: req.file.path,
    filename: req.file.filename,
    mimetype: req.file.mimetype,
  });
  res.send(file.Location);
};

export const updateImage = async (req: Request, res: Response) => {
  const key = req.body.deleteImage?.split(AWS_GALLERY_ROOT)[1];
  if (key) {
    await deleteImageAWS({ key });
  }
  const file = await uploadimageAWS({
    path: req.file.path,
    filename: req.file.filename,
    mimetype: req.file.mimetype,
  });
  res.send(file.Location);
};

export const deleteImage = async (req: Request, res: Response) => {
  const path = req?.query?.path as string | undefined;
  if (path) {
    const key = path.split(AWS_GALLERY_ROOT)[1];
    await deleteImageAWS({ key });
    res.send(req.query.path);
  } else {
    res.send(new Error("wrong path"));
  }
};
