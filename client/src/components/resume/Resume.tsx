import { useContext } from "react";
import { observer } from "mobx-react";
import { Grid, GridSize } from "@material-ui/core";
import { Experience, TimeStoreContext } from "../../stores/TimeStore";
import {
  SectionHeader,
  SectionTitle,
  SectionWrapper,
} from "../layout/SectionWrapper";
import TimeLineWrapper from "../layout/TimeLineWrapper";
import { E_ROUTES } from "../../hooks/useRoutes";
import Education from "./Education";
import ExperienceComponent from "./Experience";
import Summary from "./Summary";
import useFormManager from "../../hooks/useFormManager";
import DeleteForm from "../forms/DeleteForm";
import ExperienceForm from "./form/ExperienceForm";
import SubTitleTypography from "../../styled/typography";

const gridSize = {
  sm: 5 as GridSize,
  xs: 12 as GridSize,
};

export interface ResumeProps {}

const Resume: React.FC<ResumeProps> = observer(() => {
  const timeStore = useContext(TimeStoreContext);

  const {
    isAction,
    isDelete,
    isCreate,
    isEdit,
    handleCreate,
    handleEdit,
    handleDelete,
    handleCancel,
    selected,
    setSelected,
  } = useFormManager<Experience>();

  const handleDeleteExp = async () => {
    if (selected) {
      await timeStore.deleteExperience(selected?.id ?? "");
      handleCancel();
    }
  };

  return (
    <SectionWrapper id={E_ROUTES.resume}>
      <SectionHeader
        handleCreate={handleCreate}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleCancel={isAction ? handleCancel : undefined}
      >
        <SectionTitle>Resume</SectionTitle>
      </SectionHeader>
      <Grid container spacing={1} justify="space-evenly">
        <Grid item xs={gridSize.xs} sm={gridSize.sm}>
          <SubTitleTypography>Summary</SubTitleTypography>
          <TimeLineWrapper>
            <Summary />
          </TimeLineWrapper>
          <SubTitleTypography>Education</SubTitleTypography>
          <TimeLineWrapper>
            <Education
              education={timeStore.getEducation}
              isSelectable={isEdit || isDelete}
              setSelected={setSelected}
            />
          </TimeLineWrapper>
        </Grid>
        <Grid item xs={gridSize.xs} sm={gridSize.sm}>
          <SubTitleTypography>Professional Experience</SubTitleTypography>
          <TimeLineWrapper>
            <ExperienceComponent
              jobs={timeStore.getJobs}
              isSelectable={isEdit || isDelete}
              setSelected={setSelected}
            />
          </TimeLineWrapper>
        </Grid>
      </Grid>
      <ExperienceForm
        open={Boolean(isCreate || (isEdit && selected))}
        handleCloseForm={handleCancel}
        selectedProject={selected}
      />
      <DeleteForm
        open={Boolean(isDelete && selected)}
        deleteTitleItem={selected?.title ?? ""}
        handleDelete={() => handleDeleteExp()}
        callbackSuccess={handleCancel}
      />
    </SectionWrapper>
  );
});

export default Resume;
