import { Typography } from "@material-ui/core";
import { Bullet, TimeStampContainer } from "../layout/TimeLineWrapper";

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <>
      {experiences.map((experience) => (
        <TimeStampContainer>
          <Bullet>{experience.title}</Bullet>
          <Typography>
            {experience.fromDate} - {experience.toDate}
          </Typography>
          <Typography>{experience.description}</Typography>
        </TimeStampContainer>
      ))}
    </>
  );
};

export default Experience;

type TExperience = {
  title: string;
  company: string;
  fromDate: string;
  toDate: string;
  description: string;
};

const experiences: TExperience[] = [
  {
    title: "FrontEnd Developer - Internship",
    company: "DOREA international Institute, Limassol, Cyprus",
    fromDate: new Date("2019/06/01").toISOString(),
    toDate: new Date("2019/07/31").toISOString(),
    description: "Development of the REaCT website - fro refugees",
  },
  {
    title: "FrontEnd Developer - Internship",
    company: "IAI Szczecin, Poland",
    fromDate: new Date("2020/03/01").toISOString(),
    toDate: new Date("2020/03/31").toISOString(),
    description: "Development of the company's product",
  },
  {
    title: "PHP Developer",
    company: "Mayeryn Warsaw, Poland",
    fromDate: new Date("2020/06/01").toISOString(),
    toDate: new Date("2019/07/15").toISOString(),
    description: "Development of the company's product in Wordpress",
  },
  {
    title: "Web Developer",
    company: "Apptimia Szczecin, Poland",
    fromDate: new Date("2020/07/01").toISOString(),
    toDate: "present",
    description:
      "I am developing professional website with company based in California, United States",
  },
];
