import { format } from "date-fns";

import { Typography } from "@material-ui/core";

import { SectionTitle, SectionWrapper } from "../layout/SectionWrapper";
import TimeLineWrapper, {
  Bullet,
  TimeStampContainer,
} from "../layout/TimeLineWrapper";
import { FromDateTypography } from "../resume/Experience";
import { FORMAT_DATE_EXP } from "../../models/experience";
import { Dates } from "../resume/Layout";

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
          <Dates fromDate={"2021/05/15"} />
          <Typography>I am going to learn it soon!</Typography>
        </TimeStampContainer>
      </TimeLineWrapper>
    </SectionWrapper>
  );
};

export default Perfection;
