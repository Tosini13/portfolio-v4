import { Grid, GridSize, Typography } from "@material-ui/core";
import { SectionHeader, SectionWrapper } from "../layout/SectionWrapper";
import TimeLineWrapper from "../layout/TimeLineWrapper";
import { E_ROUTES } from "../menu/useRoutes";
import Education from "./Education";
import Experience from "./Experience";
import Summary from "./Summary";

const gridSize = {
  sm: 5 as GridSize,
  xs: 12 as GridSize,
};

export interface ResumeProps {}

const Resume: React.SFC<ResumeProps> = () => {
  return (
    <SectionWrapper id={E_ROUTES.resume}>
      <SectionHeader>Resume</SectionHeader>
      <Grid container spacing={1} justify="space-evenly">
        <Grid item xs={gridSize.xs} sm={gridSize.sm}>
          <Typography>Summary</Typography>
          <TimeLineWrapper>
            <Summary />
          </TimeLineWrapper>
          <Typography>Education</Typography>
          <TimeLineWrapper>
            <Education />
          </TimeLineWrapper>
        </Grid>
        <Grid item xs={gridSize.xs} sm={gridSize.sm}>
          <Typography>Professional Experience</Typography>
          <TimeLineWrapper>
            <Experience />
          </TimeLineWrapper>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Resume;
