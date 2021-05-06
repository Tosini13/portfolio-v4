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

type TTechnology = {
  logoSrc: string;
  title: string;
};

export const frontEndTechnologies: TTechnology[] = [
  {
    logoSrc: HTML,
    title: "HTML 5",
  },
  {
    logoSrc: CSS,
    title: "CSS 5",
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
    title: "React",
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

export const backEndTechnologies: TTechnology[] = [
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
];

export const tools: TTechnology[] = [
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
