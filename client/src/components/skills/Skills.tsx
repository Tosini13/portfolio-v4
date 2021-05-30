import { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { Grid, GridSize, Paper } from "@material-ui/core";
import styled from "styled-components";
import SkillSummary from "./SkillSummary";
import {
  E_SECTION_BACKGROUND,
  SectionHeader,
  SectionTitle,
  SectionWrapper,
} from "../layout/SectionWrapper";
import { mainTheme } from "../../styled/config";
import {
  TechnologiesStoreContext,
  Technology,
} from "../../stores/TechnologiesStore";
import TechnologyForm from "./form/TechnologyForm";
import useFormManager from "../../hooks/useFormManager";
import DeleteForm from "../forms/DeleteForm";
import { deleteImage } from "../../stores/actions/resources";
import { E_ROUTES } from "../menu/useRoutes";

const gridSizeSkills = {
  lg: 5 as GridSize,
  md: 9 as GridSize,
};

const FrontendBox = styled(Paper)`
  border: ${mainTheme.palette.secondary.light} solid 1px;
  padding: 20px 0px;
  padding-right: 20px;
  position: relative;
  overflow: hidden;
`;

const BackendBox = styled(FrontendBox)`
  border-color: rgba(0, 0, 0, 0.3);
`;

const BoxTitle = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 14px;
  letter-spacing: 0.7px;
  font-weight: bold;
  background-color: ${mainTheme.palette.secondary.light};
  color: white;
  transform: translate(34%, 65%) rotate(45deg);
  padding: 1px 40px;
`;

const BoxBackendTitle = styled(BoxTitle)`
  background-color: rgba(0, 0, 0, 0.3);
`;

export interface SkillsProps {}

const Skills: React.FC<SkillsProps> = observer(() => {
  const techStore = useContext(TechnologiesStoreContext);
  const {
    isDelete,
    isFormOpened,
    handleCreate,
    handleEdit,
    handleDelete,
    handleCancel,
    selected,
    setSelected,
  } = useFormManager<Technology>();

  useEffect(() => {
    techStore.fetch();
  }, [techStore]);

  const handleDeleteTech = async () => {
    if (selected) {
      await techStore.deleteTechnology(selected?.id ?? "");
      await deleteImage(selected?.logoSrc);
    }
  };

  const frontEnd = techStore.getFrontend;
  const backEnd = techStore.getBackend;
  const tools = techStore.getTools;

  const isAdmin = true; // TODO: auth
  return (
    <SectionWrapper background={E_SECTION_BACKGROUND.ODD} id={E_ROUTES.skills}>
      <SectionHeader
        isInAction={isAdmin}
        handleCreate={handleCreate}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleCancel={handleCancel}
      >
        <SectionTitle>Skills</SectionTitle>
      </SectionHeader>
      <div style={{ padding: "0px 10px" }}>
        <Grid container justify="space-evenly" spacing={3}>
          {frontEnd.length ? (
            <Grid item sm={5}>
              <FrontendBox variant="elevation">
                <BoxTitle>FrontEnd</BoxTitle>
                <Grid container spacing={1} justify="space-evenly">
                  {frontEnd.map((technology) => (
                    <Grid
                      item
                      {...gridSizeSkills}
                      key={technology.id}
                      onClick={() => setSelected(technology)}
                    >
                      <SkillSummary
                        logoSrc={technology.logoSrc}
                        title={technology.title}
                      />
                    </Grid>
                  ))}
                </Grid>
              </FrontendBox>
            </Grid>
          ) : null}
          {backEnd.length || tools.length ? (
            <Grid item sm={5}>
              {backEnd.length ? (
                <BackendBox
                  variant="elevation"
                  style={{ marginBottom: "25px" }}
                >
                  <BoxBackendTitle>BackEnd</BoxBackendTitle>
                  <Grid container spacing={1} justify="space-evenly">
                    {backEnd.map((technology) => (
                      <Grid
                        item
                        {...gridSizeSkills}
                        key={technology.id}
                        onClick={() => setSelected(technology)}
                      >
                        <SkillSummary
                          logoSrc={technology.logoSrc}
                          title={technology.title}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </BackendBox>
              ) : null}
              {tools.length ? (
                <BackendBox variant="elevation">
                  <BoxBackendTitle>Tools</BoxBackendTitle>
                  <Grid container spacing={1} justify="space-evenly">
                    {tools.map((technology) => (
                      <Grid
                        item
                        {...gridSizeSkills}
                        key={technology.id}
                        onClick={() => setSelected(technology)}
                      >
                        <SkillSummary
                          logoSrc={technology.logoSrc}
                          title={technology.title}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </BackendBox>
              ) : null}
            </Grid>
          ) : null}
        </Grid>
      </div>
      <TechnologyForm
        open={isFormOpened}
        handleClose={handleCancel}
        selectedTechnology={selected}
      />
      <DeleteForm
        open={Boolean(isDelete && selected)}
        deleteTitleItem={selected?.title ?? ""}
        handleDelete={() => handleDeleteTech()}
        callbackSuccess={handleCancel}
      />
    </SectionWrapper>
  );
});

export default Skills;
