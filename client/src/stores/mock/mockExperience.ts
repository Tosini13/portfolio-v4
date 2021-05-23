import { EExperienceType, IExperience } from "../../models/experience";

export const educations: IExperience[] = [
  {
    id: "1",
    title: "West Pomeranian University of Technology in Szczecin",
    fromDate: "2016/09/01",
    toDate: "2020/09/01",
    description: "Studied in Szczecin in Poland Computer Science",
    type: EExperienceType.EDUCATION,
  },
  {
    id: "2",
    title: "PA College, Larnaca, Cyprus",
    fromDate: "2018/09/01",
    toDate: "2019/05/23",
    description: "Studied Computer Science within Erasmus Programme",
    type: EExperienceType.EDUCATION,
  },
];

export const experiences: IExperience[] = [
  {
    id: "3",
    title: "FrontEnd Developer (Internship)",
    institution: "DOREA international Institute, Limassol, Cyprus",
    fromDate: "2019/06/01",
    toDate: "2019/07/31",
    description: "Development of the REaCT website - fro refugees",
    technologies: ["Wordpress", "HTML 5", "CSS 3"],
    type: EExperienceType.JOB,
  },
  {
    id: "4",
    title: "FrontEnd Developer (Internship)",
    institution: "IAI Szczecin, Poland",
    fromDate: "2020/03/01",
    toDate: "2020/03/31",
    description:
      "Development of the company's product. Used JavaSCript, HTML, CSS, less, gulp",
    technologies: ["HTML 5", "CSS 3", "JavaScript", "Less"],
    type: EExperienceType.JOB,
  },
  {
    id: "5",
    title: "PHP Developer",
    institution: "Mayeryn Warsaw, Poland",
    fromDate: "2019/06/01",
    toDate: "2019/07/15",
    description: "Development of the company's product in Wordpress",
    technologies: ["HTML 5", "CSS 3", "Wordpress", "PHP", "GitLab"],
    type: EExperienceType.JOB,
  },
  {
    id: "6",
    title: "Web Developer",
    institution: "Apptimia Szczecin, Poland",
    fromDate: "2020/07/01",
    toDate: "present",
    description:
      "I am developing professional website with company based in California, United States",
    technologies: [
      "TypeScript",
      "React.js",
      "MobX",
      "Material UI",
      "Leaflet.js",
      "Sass",
      "HTML 5",
      "CSS 3",
      "Graph QL",
      "GitHub",
      "Jira",
    ],
    type: EExperienceType.JOB,
  },
];
