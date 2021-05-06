import { Typography } from "@material-ui/core";
import { format, isSameMonth } from "date-fns";
import styled from "styled-components";
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

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <>
      {experiences.map((experience) => (
        <TimeStampContainer key={experience.company}>
          {/* key change to id */}
          <Bullet>{experience.title}</Bullet>
          <Typography>{experience.company}</Typography>
          <DatesTypography>
            {format(new Date(experience.fromDate), FORMAT_DATE_EXP)}
            {showToDate(experience.fromDate, experience.toDate)}
          </DatesTypography>
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
    title: "FrontEnd Developer (Internship)",
    company: "DOREA international Institute, Limassol, Cyprus",
    fromDate: "2019/06/01",
    toDate: "2019/07/31",
    description: "Development of the REaCT website - fro refugees",
  },
  {
    title: "FrontEnd Developer (Internship)",
    company: "IAI Szczecin, Poland",
    fromDate: "2020/03/01",
    toDate: "2020/03/31",
    description: "Development of the company's product",
  },
  {
    title: "PHP Developer",
    company: "Mayeryn Warsaw, Poland",
    fromDate: "2020/06/01",
    toDate: "2019/07/15",
    description: "Development of the company's product in Wordpress",
  },
  {
    title: "Web Developer",
    company: "Apptimia Szczecin, Poland",
    fromDate: "2020/07/01",
    toDate: "present",
    description:
      "I am developing professional website with company based in California, United States",
  },
];
