import { useContext } from "react";
import { observer } from "mobx-react";
import { Grid, GridSize, Typography } from "@material-ui/core";
import { TimeStoreContext } from "../../stores/TimeStore";
import { SectionTitle, SectionWrapper } from "../layout/SectionWrapper";
import TimeLineWrapper from "../layout/TimeLineWrapper";
import { E_ROUTES } from "../menu/useRoutes";
import Education from "./Education";
import ExperienceComponent from "./Experience";
import Summary from "./Summary";

const gridSize = {
  sm: 5 as GridSize,
  xs: 12 as GridSize,
};

export interface ResumeProps {}

const Resume: React.FC<ResumeProps> = observer(() => {
  const timeStore = useContext(TimeStoreContext);
  return (
    <SectionWrapper id={E_ROUTES.resume}>
      <SectionTitle>Resume</SectionTitle>
      <Grid container spacing={1} justify="space-evenly">
        <Grid item xs={gridSize.xs} sm={gridSize.sm}>
          <Typography>Summary</Typography>
          <TimeLineWrapper>
            <Summary />
          </TimeLineWrapper>
          <Typography>Education</Typography>
          <TimeLineWrapper>
            <Education education={timeStore.getEducation} />
          </TimeLineWrapper>
        </Grid>
        <Grid item xs={gridSize.xs} sm={gridSize.sm}>
          <Typography>Professional Experience</Typography>
          <TimeLineWrapper>
            <ExperienceComponent jobs={timeStore.getJobs} />
          </TimeLineWrapper>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
});

export default Resume;
