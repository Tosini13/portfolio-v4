import { Typography } from "@material-ui/core";
import { format } from "date-fns";
import { Bullet, TimeStampContainer } from "../layout/TimeLineWrapper";
import { DatesTypography, FORMAT_DATE_EXP } from "./Experience";

export interface EducationProps {}

const Education: React.FC<EducationProps> = () => {
  return (
    <>
      {educations.map((education) => (
        <TimeStampContainer key={education.title}>
          <Bullet>{education.title}</Bullet>
          <DatesTypography>
            {format(new Date(education.fromDate), FORMAT_DATE_EXP)} -{" "}
            {format(new Date(education.toDate), FORMAT_DATE_EXP)}
          </DatesTypography>
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
    fromDate: "2016/09/01",
    toDate: "2020/09/01",
    description: "Studied in Szczecin in Poland Computer Science",
  },
  {
    title: "PA College, Larnaca, Cyprus",
    fromDate: "2018/09/01",
    toDate: "2019/05/23",
    description: "Studied Computer Science within Erasmus Programme",
  },
];
