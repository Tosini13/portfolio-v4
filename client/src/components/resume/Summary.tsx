import { Typography } from "@material-ui/core";
import { Bullet, TimeStampContainer } from "../layout/TimeLineWrapper";

export interface SummaryProps {}

const Summary: React.FC<SummaryProps> = () => {
  return (
    <TimeStampContainer>
      <Bullet>Jakub Bartosik</Bullet>
      <Typography>
        Innovative and deadline-driven Graphic Designer with 3+ years of
        experience designing and developing user-centered digital/print
        marketing material from initial concept to final, polished deliverable.
      </Typography>
    </TimeStampContainer>
  );
};

export default Summary;
