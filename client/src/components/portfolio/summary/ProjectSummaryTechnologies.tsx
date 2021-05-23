import { Grid, Tooltip } from "@material-ui/core";
import { useContext } from "react";
import { Id } from "../../../models/general";
import { TechnologiesStoreContext } from "../../../stores/TechnologiesStore";
import { SkillLogoStyled } from "../../skills/SkillSummary";

export interface ProjectSummaryTechnologiesProps {
  technologiesId: Id[];
}

const ProjectSummaryTechnologies: React.FC<ProjectSummaryTechnologiesProps> = ({
  technologiesId,
}) => {
  const techStore = useContext(TechnologiesStoreContext);
  const technologies = techStore.technologies.filter((tech) =>
    technologiesId.includes(tech.id)
  );
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      spacing={2}
      style={{ marginTop: "20px" }}
    >
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
