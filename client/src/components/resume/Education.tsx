import { Typography } from "@material-ui/core";
import { format } from "date-fns";
import styled from "styled-components";
import { EEndDate, FORMAT_DATE_EXP } from "../../models/experience";
import { Experience } from "../../stores/TimeStore";
import { mainTheme } from "../../styled/config";
import { Bullet, TimeStampContainer } from "../layout/TimeLineWrapper";
import { DatesTypography } from "./Experience";

const AStyled = styled.a`
  color: ${mainTheme.palette.secondary.light};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export interface EducationProps {
  education: Experience[];
  isSelectable: boolean;
  setSelected: (exp: Experience | undefined) => void;
}

const Education: React.FC<EducationProps> = ({
  education,
  isSelectable,
  setSelected,
}) => {
  return (
    <>
      {education.map((edu) => (
        <TimeStampContainer key={edu.title}>
          <Bullet
            isSelectable={isSelectable}
            handleClick={() => setSelected(edu)}
          >
            {edu.title}
          </Bullet>
          <DatesTypography>
            {format(new Date(edu.fromDate), FORMAT_DATE_EXP)} -{" "}
            {edu.toDate === EEndDate.PRESENT
              ? EEndDate.PRESENT
              : format(new Date(edu.toDate), FORMAT_DATE_EXP)}
          </DatesTypography>
          <Typography>{edu.description}</Typography>
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
