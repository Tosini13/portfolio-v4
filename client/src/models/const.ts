import { Id } from "./general";

// ======================== URL ===========================
const SERVER_URL = "";
const API_URL = `${SERVER_URL}/api`;
export const PROJECTS_API_URL = `${API_URL}/projects`;
export const TECHNOLOGIES_API_URL = `${API_URL}/technologies`;
export const EXPERIENCES_API_URL = `${API_URL}/experiences`;
export const IMAGES_API_URL = `${API_URL}/images`;

export const projectsIdUrl = (projectId: Id) =>
  `${PROJECTS_API_URL}/${projectId}`;

export const technologiesIdUrl = (techId: Id) =>
  `${TECHNOLOGIES_API_URL}/${techId}`;

export const experiencesIdUrl = (expId: Id) =>
  `${EXPERIENCES_API_URL}/${expId}`;

export const imagesPathUrl = (imgPath: Id) =>
  `${IMAGES_API_URL}?path=${imgPath}`;
