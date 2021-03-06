import { useContext } from "react";
import { observer } from "mobx-react";

import { Grid } from "@material-ui/core";
import { Project, ProjectsStoreContext } from "../../stores/ProjectsStore";
import {
  E_SECTION_BACKGROUND,
  SectionHeader,
  SectionTitle,
  SectionWrapper,
} from "../layout/SectionWrapper";
import { E_ROUTES } from "../../hooks/useRoutes";
import ProjectDetails from "./details/ProjectDetails";
import ProjectSummary from "./ProjectSummary";
import useFormManager from "../../hooks/useFormManager";
import ProjectForm from "./form/ProjectForm";
import styled from "styled-components";
import DeleteForm from "../forms/DeleteForm";
import { deleteImage } from "../../stores/actions/resources";

const GridItem = styled(Grid)`
  position: relative;
  width: 500px;
  height: 250px;
  @media only screen and (max-width: 550px) {
    width: 300px;
    height: 150px;
  }
`;

export interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = observer(() => {
  const projectsStore = useContext(ProjectsStoreContext);

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
  } = useFormManager<Project>();

  const handleDeleteProject = async () => {
    if (selected) {
      await projectsStore.deleteProject(selected?.id ?? "");
      await deleteImage(selected?.logoSrc);
      handleCancel();
    }
  };

  const handleActionSelect = (project: Project) => {
    if (isEdit && isDelete) {
      setSelected(project);
    }
  };

  return (
    <SectionWrapper
      id={E_ROUTES.portfolio}
      background={E_SECTION_BACKGROUND.ODD}
    >
      <SectionHeader
        handleCreate={handleCreate}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleCancel={isAction ? handleCancel : undefined}
      >
        <SectionTitle>Portfolio</SectionTitle>
      </SectionHeader>
      <Grid container justify="space-evenly" spacing={3}>
        {projectsStore.projects.map((project) => (
          <GridItem
            item
            key={project.id}
            onClick={() => handleActionSelect(project)}
          >
            <ProjectSummary
              project={project}
              selectProject={() => setSelected(project)}
            />
          </GridItem>
        ))}
      </Grid>
      <ProjectDetails
        open={Boolean(selected && !isEdit && !isDelete)}
        handleClose={() => setSelected(undefined)}
        project={selected}
      />
      <ProjectForm
        open={Boolean(isCreate || (isEdit && selected))}
        handleCloseForm={handleCancel}
        selectedProject={selected}
      />
      <DeleteForm
        open={Boolean(isDelete && selected)}
        deleteTitleItem={selected?.title ?? ""}
        handleDelete={() => handleDeleteProject()}
        callbackSuccess={handleCancel}
      />
    </SectionWrapper>
  );
});

export default Portfolio;
