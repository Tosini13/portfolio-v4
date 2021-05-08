import { Typography } from "@material-ui/core";
import { format } from "date-fns";
import styled from "styled-components";
import { mainTheme } from "../../styled/config";
import { Bullet, TimeStampContainer } from "../layout/TimeLineWrapper";
import { DatesTypography, FORMAT_DATE_EXP } from "./Experience";

const AStyled = styled.a`
  color: ${mainTheme.palette.secondary.light};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

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
      <TimeStampContainer>
        <Bullet>Skills improvement, Everywhere</Bullet>
        <DatesTypography>Always</DatesTypography>
        <Typography>
          I always tend to improve my skills by books, articles on internet or
          videos on YouTube. My favorite YT channel is{" "}
          <AStyled
            href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg"
            target="_blank"
          >
            The Net Ninja
          </AStyled>{" "}
          that contains plenty of diverse technologies' tutorials. I can also
          recommend{" "}
          <AStyled href="https://medium.com/" target="_blank">
            Medium Daily Digest
          </AStyled>{" "}
          becasue of their content of the very interesting topics.
        </Typography>
      </TimeStampContainer>
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
