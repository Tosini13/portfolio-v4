import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { Experience } from "../../stores/TimeStore";
import { TimeStampContainer } from "../layout/TimeLineWrapper";
import { Dates } from "./Layout";
import { Bullet, InstitutionTypography } from "../layout/Bullet";
import TypographyRC from "../../styled/typography";
import ExpTechnologies from "./Experience/ExpTechnologies";

export const FromDateTypography = styled(TypographyRC)`
  background-color: gray;
  width: fit-content;
  padding: 2px 20px 2px 14px;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  margin-left: -10px;
  &::after {
    content: "";
    position: absolute;
    right: -4px;
    top: 0px;
    height: 100%;
    width: 7px;
    transform: skew(-25deg, 0deg);
    background-color: white;
    z-index: 2;
  }
`;

export const ToDateTypography = styled(FromDateTypography)`
  margin-left: 0px;
  padding-right: 10px;
  &::after {
    content: "";
    background-color: gray;
    right: -5px;
    width: 11px;
  }
`;

export interface ExperienceProps {
  jobs: Experience[];
  isSelectable: boolean;
  setSelected: (exp: Experience | undefined) => void;
}

const ExperienceComponent: React.FC<ExperienceProps> = ({
  jobs,
  isSelectable,
  setSelected,
}) => {
  return (
    <>
      {jobs.map((exp) => (
        <TimeStampContainer key={exp.id}>
          <Bullet
            isSelectable={isSelectable}
            handleClick={() => setSelected(exp)}
          >
            {exp.title}
          </Bullet>
          <InstitutionTypography>{exp.institution}</InstitutionTypography>
          <Dates fromDate={exp.fromDate} toDate={exp.toDate} />
          <Typography style={{ marginBottom: "10px" }}>
            {exp.description}
          </Typography>
          <ExpTechnologies expTechnologies={exp.technologies} />
        </TimeStampContainer>
      ))}
    </>
  );
};

export default ExperienceComponent;
