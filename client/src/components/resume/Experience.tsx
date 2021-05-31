import { Grid, Typography } from "@material-ui/core";
import { format, isSameMonth, isValid } from "date-fns";
import styled from "styled-components";
import { EEndDate, FORMAT_DATE_EXP, TEndDate } from "../../models/experience";
import { Experience } from "../../stores/TimeStore";
import { Bullet, TimeStampContainer } from "../layout/TimeLineWrapper";
import { Dates } from "./Layout";

export const FromDateTypography = styled(Typography)`
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

const showToDate = (fromDate: string, toDate: TEndDate) => {
  if (isSameMonth(new Date(fromDate), new Date(toDate))) {
    return null;
  }
  if (toDate === EEndDate.PRESENT) {
    return EEndDate.PRESENT;
  }
  if (isValid(new Date(toDate))) {
    return format(new Date(toDate), FORMAT_DATE_EXP);
  }
  return toDate;
};

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
          <Typography>{exp.institution}</Typography>
          <Dates fromDate={exp.fromDate} toDate={exp.toDate} />
          <Typography>{exp.description}</Typography>
        </TimeStampContainer>
      ))}
    </>
  );
};

export default ExperienceComponent;
