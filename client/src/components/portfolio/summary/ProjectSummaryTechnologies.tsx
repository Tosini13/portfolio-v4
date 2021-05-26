import { Grid, Tooltip } from "@material-ui/core";
import { Technology } from "../../../stores/TechnologiesStore";
import { SkillLogoStyled } from "../../skills/SkillSummary";

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
            <Grid item>
              <SkillLogoStyled src={tech.logoSrc} alt={tech.title} />
            </Grid>
          </Tooltip>
        );
      })}
    </Grid>
  );
};

export default ProjectSummaryTechnologies;
