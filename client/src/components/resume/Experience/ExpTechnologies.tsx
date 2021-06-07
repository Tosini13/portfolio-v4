import { Grid, Tooltip } from "@material-ui/core";
import { useContext } from "react";
import styled from "styled-components";
import { Id } from "../../../models/general";
import { TechnologiesStoreContext } from "../../../stores/TechnologiesStore";
import { SkillLogoStyled } from "../../skills/SkillSummary";

const GridItem = styled(Grid)`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface ExpTechnologiesProps {
  expTechnologies?: Id[];
}

const ExpTechnologies: React.FC<ExpTechnologiesProps> = ({
  expTechnologies,
}) => {
  const techStore = useContext(TechnologiesStoreContext);

  if (!expTechnologies) {
    return null;
  }

  const frontEnd = techStore.getFrontend.filter((tech) =>
    expTechnologies.includes(tech.id)
  );

  const backEnd = techStore.getBackend.filter((tech) =>
    expTechnologies.includes(tech.id)
  );

  const tools = techStore.getTools.filter((tech) =>
    expTechnologies.includes(tech.id)
  );

  const fields = [frontEnd, backEnd, tools];
  return (
    <Grid container direction="column" spacing={1}>
      {fields.map((field) => (
        <Grid item>
          <Grid container alignItems="center" justify="flex-start" spacing={1}>
            {field.map((tech) => {
              return (
                <Tooltip title={tech.title} key={tech.id}>
                  <GridItem item>
                    <SkillLogoStyled src={tech.logoSrc} alt={tech.title} />
                  </GridItem>
                </Tooltip>
              );
            })}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default ExpTechnologies;
