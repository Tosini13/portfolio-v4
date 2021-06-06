import { Typography } from "@material-ui/core";
import { Bullet } from "../layout/Bullet";
import { TimeStampContainer } from "../layout/TimeLineWrapper";

export interface SummaryProps {}

const Summary: React.FC<SummaryProps> = () => {
  return (
    <TimeStampContainer>
      <Bullet>Jakub Bartosik</Bullet>
      <Typography>
        Web developer with over a year of experience with professional teams as
        well as freelancing using useful and valuable tools or technologies for
        frontend and backend development.
      </Typography>
    </TimeStampContainer>
  );
};

export default Summary;
