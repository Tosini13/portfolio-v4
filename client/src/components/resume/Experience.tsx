import { Typography } from "@material-ui/core";
import { format, isSameMonth } from "date-fns";
import styled from "styled-components";
import { Experience } from "../../stores/TimeStore";
import { Bullet, TimeStampContainer } from "../layout/TimeLineWrapper";

export const FORMAT_DATE_EXP = "yyyy/MM";

export const DatesTypography = styled(Typography)`
  background-color: rgba(0, 0, 0, 0.3);
  width: fit-content;
  padding: 2px 5px;
  font-size: 12px;
  font-weight: bold;
`;

const showToDate = (fromDate: string, toDate: string) => {
  if (isSameMonth(new Date(fromDate), new Date(toDate))) {
    return null;
  }
  switch (toDate) {
    case "present":
      return "-" + toDate;
    default:
      return "-" + format(new Date(toDate), FORMAT_DATE_EXP);
  }
};

export interface ExperienceProps {
  jobs: Experience[];
}

const ExperienceComponent: React.FC<ExperienceProps> = ({ jobs }) => {
  return (
    <>
      {jobs.map((exp) => (
        <TimeStampContainer key={exp.institution}>
          {/* key change to id */}
          <Bullet>{exp.title}</Bullet>
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
