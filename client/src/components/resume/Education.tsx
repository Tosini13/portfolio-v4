import { Typography } from "@material-ui/core";
import { Bullet, TimeStampContainer } from "../layout/TimeLineWrapper";

export interface EducationProps {}

const Education: React.FC<EducationProps> = () => {
  return (
    <>
      {educations.map((education) => (
        <TimeStampContainer>
          <Bullet>{education.title}</Bullet>
          <Typography>
            {education.fromDate} - {education.toDate}
          </Typography>
          <Typography>{education.description}</Typography>
        </TimeStampContainer>
      ))}
    </>
  );
};

export default Education;

type TEducation = {
  title: string;
  fromDate: string;
  toDate: string;
  description: string;
};

const educations: TEducation[] = [
  {
    title: "West Pomeranian University of Technology in Szczecin",
    fromDate: new Date("2016/09/01").toISOString(),
    toDate: new Date("2020/09/01").toISOString(),
    description: "Studied in Szczecin in Poland Computer Science",
  },
  {
    title: "PA College, Larnaca, Cyprus",
    fromDate: new Date("2018/09/01").toISOString(),
    toDate: new Date("2019/05/23").toISOString(),
    description: "Studied Computer Science within Erasmus Programme",
  },
];
