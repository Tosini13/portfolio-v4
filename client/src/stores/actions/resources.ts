import axios from "axios";
import { IMAGES_API_URL, imagesPathUrl } from "../../models/const";

export const uploadImage = async (imageFile: any) => {
  let formData = new FormData();
  formData.append("img", imageFile);
  const res = await axios.post<string>(IMAGES_API_URL, formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return res.data;
};

type TUploadImage = {
  imageFile: any;
  oldPath: string;
};

export const updateImage = async ({ imageFile, oldPath }: TUploadImage) => {
  let formData = new FormData();
  formData.append("img", imageFile);
  const res = await axios.put<string>(imagesPathUrl(oldPath), formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return res.data;
};

export const deleteImage = async (path: string) => {
  const res = await axios.delete<string>(imagesPathUrl(path));
  return res.data;
};
