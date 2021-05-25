import HTML from "../../images/technologies/html5.png";
import CSS from "../../images/technologies/css3.jpg";
import JS from "../../images/technologies/javaScript.jpg";
import TS from "../../images/technologies/typeScript.png";
import FIREBASE from "../../images/technologies/firebase.webp";
import PHP from "../../images/technologies/php.webp";
import FIGMA from "../../images/technologies/figma.png";
import GITHUB from "../../images/technologies/githubIcon.webp";
import GITLAB from "../../images/technologies/gitLab.png";
import LEAFLET from "../../images/technologies/leaflet.png";
import LESS from "../../images/technologies/less.png";
import MATERIAL_UI from "../../images/technologies/materialUi.png";
import MOBX from "../../images/technologies/mobX.png";
import REACT from "../../images/technologies/react.png";
import REDUX from "../../images/technologies/redux.webp";
import SASS from "../../images/technologies/sass.png";
import SQL from "../../images/technologies/sql.webp";
import JIRA from "../../images/technologies/jira.png";
import NODE_JS from "../../images/technologies/nodeJs.png";
import GRAPH_QL from "../../images/technologies/GraphQL_Logo.png";
import MONGO_DB from "../../images/technologies/mongoDB.png";
import { ETechnologyField, ITechnology } from "../../models/technology";

type MockTechnology = Omit<ITechnology, "id" | "field">;

const frontEndTechnologies: MockTechnology[] = [
  {
    logoSrc: HTML,
    title: "HTML 5",
  },
  {
    logoSrc: CSS,
    title: "CSS 3",
  },
  {
    logoSrc: JS,
    title: "JavaScript",
  },
  {
    logoSrc: TS,
    title: "TypeScript",
  },
  {
    logoSrc: SASS,
    title: "Sass",
  },
  {
    logoSrc: LESS,
    title: "Less",
  },
  {
    logoSrc: REACT,
    title: "React.js",
  },
  {
    logoSrc: REDUX,
    title: "Redux",
  },
  {
    logoSrc: MOBX,
    title: "MobX",
  },
  {
    logoSrc: MATERIAL_UI,
    title: "Material UI",
  },
  {
    logoSrc: LEAFLET,
    title: "Leaflet.js",
  },
];

const backEndTechnologies: MockTechnology[] = [
  // 12
  {
    logoSrc: NODE_JS,
    title: "Node.js",
  },
  {
    logoSrc: FIREBASE,
    title: "Firebase",
  },
  {
    logoSrc: PHP,
    title: "PHP",
  },
  {
    logoSrc: SQL,
    title: "SQL",
  },
  {
    logoSrc: GRAPH_QL,
    title: "Graph QL",
  },
  {
    logoSrc: MONGO_DB,
    title: "Mongo DB",
  },
];

const tools: MockTechnology[] = [
  // 18
  {
    logoSrc: FIGMA,
    title: "Figma",
  },
  {
    logoSrc: GITHUB,
    title: "GitHub",
  },
  {
    logoSrc: GITLAB,
    title: "GitLab",
  },
  {
    logoSrc: JIRA,
    title: "Jira",
  },
];

let i = 1;
const mockTechnologies: ITechnology[] = [
  ...frontEndTechnologies.map((tech) => ({
    id: Number(i++).toString(),
    title: tech.title,
    logoSrc: tech.logoSrc,
    field: ETechnologyField.FRONTEND,
  })),
  ...backEndTechnologies.map((tech) => ({
    id: Number(i++).toString(),
    title: tech.title,
    logoSrc: tech.logoSrc,
    field: ETechnologyField.BACKEND,
  })),
  ...tools.map((tech) => ({
    id: Number(i++).toString(),
    title: tech.title,
    logoSrc: tech.logoSrc,
    field: ETechnologyField.TOOLS,
  })),
];

export default mockTechnologies;
