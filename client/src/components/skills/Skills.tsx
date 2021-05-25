import { useContext } from "react";
import { Grid, GridSize, Paper } from "@material-ui/core";
import styled from "styled-components";
import SkillSummary from "./SkillSummary";
import {
  E_SECTION_BACKGROUND,
  SectionHeader,
  SectionWrapper,
} from "../layout/SectionWrapper";
import { mainTheme } from "../../styled/config";
import { TechnologiesStoreContext } from "../../stores/TechnologiesStore";

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

const Skills: React.FC<SkillsProps> = () => {
  const techStore = useContext(TechnologiesStoreContext);
  return (
    <SectionWrapper background={E_SECTION_BACKGROUND.ODD}>
      <SectionHeader>Skills</SectionHeader>
      <div style={{ padding: "0px 10px" }}>
        <Grid container justify="space-evenly" spacing={3}>
          <Grid item sm={5}>
            <FrontendBox variant="elevation">
              <BoxTitle>FrontEnd</BoxTitle>
              <Grid container spacing={1} justify="space-evenly">
                {techStore.getFrontend.map((technology) => (
                  <Grid item {...gridSizeSkills} key={technology.id}>
                    <SkillSummary
                      logoSrc={technology.logoSrc}
                      title={technology.title}
                    />
                  </Grid>
                ))}
              </Grid>
            </FrontendBox>
          </Grid>
          <Grid item sm={5}>
            <BackendBox variant="elevation" style={{ marginBottom: "25px" }}>
              <BoxBackendTitle>BackEnd</BoxBackendTitle>
              <Grid container spacing={1} justify="space-evenly">
                {techStore.getBackend.map((technology) => (
                  <Grid item {...gridSizeSkills} key={technology.id}>
                    <SkillSummary
                      logoSrc={technology.logoSrc}
                      title={technology.title}
                    />
                  </Grid>
                ))}
              </Grid>
            </BackendBox>
            <BackendBox variant="elevation">
              <BoxBackendTitle>Tools</BoxBackendTitle>
              <Grid container spacing={1} justify="space-evenly">
                {techStore.getTools.map((technology) => (
                  <Grid item {...gridSizeSkills} key={technology.id}>
                    <SkillSummary
                      logoSrc={technology.logoSrc}
                      title={technology.title}
                    />
                  </Grid>
                ))}
              </Grid>
            </BackendBox>
          </Grid>
        </Grid>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
