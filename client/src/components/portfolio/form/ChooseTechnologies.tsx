import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useContext } from "react";
import styled from "styled-components";

import { Id } from "../../../models/general";
import { TechnologiesStoreContext } from "../../../stores/TechnologiesStore";
import { SkillLogoStyled } from "../../skills/SkillSummary";

const GridItem = styled(Grid)<{ selected: boolean }>`
  margin: 5px 5px;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  border: solid 2px transparent;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  ${(props) => (props.selected ? "border-color: green;" : "")}
`;

export interface ChooseTechnologiesProps {
  selected: Id[];
  setSelected: (id: Id[]) => void;
}

const ChooseTechnologies: React.FC<ChooseTechnologiesProps> = ({
  selected,
  setSelected,
}) => {
  const store = useContext(TechnologiesStoreContext);

  const handleChooseTech = (techId: Id) => {
    if (selected.includes(techId)) {
      setSelected(selected.filter((id) => id !== techId));
    } else {
      setSelected([...selected, techId]);
    }
  };

  return (
    <>
      {store.getTechGroups.map((group) => {
        if (!group.technologies.length) {
          return null;
        }
        return (
          <Accordion key={group.field}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>{group.field}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container alignItems="center" justify="center" spacing={2}>
                {group.technologies?.map((tech) => {
                  return (
                    <Tooltip title={tech.title} key={tech.id}>
                      <GridItem
                        item
                        onClick={() => handleChooseTech(tech.id)}
                        selected={selected.includes(tech.id)}
                      >
                        <SkillLogoStyled src={tech.logoSrc} alt={tech.title} />
                      </GridItem>
                    </Tooltip>
                  );
                })}
              </Grid>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default ChooseTechnologies;
