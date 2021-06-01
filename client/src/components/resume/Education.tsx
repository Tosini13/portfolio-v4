import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { Experience } from "../../stores/TimeStore";
import { mainTheme } from "../../styled/config";
import { TimeStampContainer } from "../layout/TimeLineWrapper";
import { Dates } from "./Layout";
import { Bullet } from "../layout/Bullet";

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
          <Dates fromDate={edu.fromDate} toDate={edu.toDate} />
          <Typography>{edu.description}</Typography>
        </TimeStampContainer>
      ))}
      <TimeStampContainer>
        <Bullet>Skills improvement, Everywhere</Bullet>
        <Dates fromDate={"Always"} />
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
