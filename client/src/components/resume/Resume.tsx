import { Grid, GridSize, Typography } from "@material-ui/core";
import { SectionHeader, SectionWrapper } from "../layout/SectionWrapper";
import TimeLineWrapper from "../layout/TimeLineWrapper";
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
    <SectionWrapper>
      <SectionHeader>Resume</SectionHeader>
      <Grid container spacing={1} justify="space-evenly">
        <Grid item xs={gridSize.xs} sm={gridSize.sm}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Typography>Summary</Typography>
              <TimeLineWrapper>
                <Summary />
              </TimeLineWrapper>
            </Grid>
            <Grid item>
              <Typography>Education</Typography>
              <TimeLineWrapper>
                <Education />
              </TimeLineWrapper>
            </Grid>
          </Grid>
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
