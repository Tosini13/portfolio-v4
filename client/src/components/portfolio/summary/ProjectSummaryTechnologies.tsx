import { Grid, Tooltip } from "@material-ui/core";
import styled from "styled-components";
import { Technology } from "../../../stores/TechnologiesStore";
import { SkillLogoStyled } from "../../skills/SkillSummary";

const GridItem = styled(Grid)`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface ProjectSummaryTechnologiesProps {
  technologies: Technology[];
}

const ProjectSummaryTechnologies: React.FC<ProjectSummaryTechnologiesProps> = ({
  technologies,
}) => {
  return (
    <Grid container alignItems="center" justify="center" spacing={2}>
      {technologies?.map((tech) => {
        return (
          <Tooltip title={tech.title} key={tech.id}>
            <GridItem item>
              <SkillLogoStyled src={tech.logoSrc} alt={tech.title} />
            </GridItem>
          </Tooltip>
        );
      })}
    </Grid>
  );
};

export default ProjectSummaryTechnologies;
