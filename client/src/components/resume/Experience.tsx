import { Typography } from "@material-ui/core";
import { format, isSameMonth, isValid } from "date-fns";
import styled from "styled-components";
import { EEndDate, FORMAT_DATE_EXP, TEndDate } from "../../models/experience";
import { Experience } from "../../stores/TimeStore";
import { Bullet, TimeStampContainer } from "../layout/TimeLineWrapper";

export const DatesTypography = styled(Typography)`
  background-color: rgba(0, 0, 0, 0.3);
  width: fit-content;
  padding: 2px 5px;
  font-size: 12px;
  font-weight: bold;
`;

const showToDate = (fromDate: string, toDate: TEndDate) => {
  if (isSameMonth(new Date(fromDate), new Date(toDate))) {
    return null;
  }
  if (toDate === EEndDate.PRESENT) {
    return " - " + EEndDate.PRESENT;
  }
  if (isValid(new Date(toDate))) {
    return " - " + format(new Date(toDate), FORMAT_DATE_EXP);
  }
  return " - " + toDate;
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
          <DatesTypography>
            {format(new Date(exp.fromDate), FORMAT_DATE_EXP)}
            {showToDate(exp.fromDate, exp.toDate)}
          </DatesTypography>
          <Typography>{exp.description}</Typography>
        </TimeStampContainer>
      ))}
    </>
  );
};

export default ExperienceComponent;
