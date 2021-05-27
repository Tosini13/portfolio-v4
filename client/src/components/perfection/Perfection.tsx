import { format } from "date-fns";

import { Typography } from "@material-ui/core";

import { SectionTitle, SectionWrapper } from "../layout/SectionWrapper";
import TimeLineWrapper, {
  Bullet,
  TimeStampContainer,
} from "../layout/TimeLineWrapper";
import { DatesTypography, FORMAT_DATE_EXP } from "../resume/Experience";

export interface PerfectionProps {}

const Perfection: React.FC<PerfectionProps> = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Obsession for Perfection</SectionTitle>
      <Typography>
        What am I learning about and when I do it with description
      </Typography>
      <TimeLineWrapper>
        <TimeStampContainer>
          <Bullet>JWT Token</Bullet>
          <DatesTypography>
            {format(new Date("2021/05/15"), FORMAT_DATE_EXP)}
          </DatesTypography>
          <Typography>I am going to learn it soon!</Typography>
        </TimeStampContainer>
      </TimeLineWrapper>
    </SectionWrapper>
  );
};

export default Perfection;
