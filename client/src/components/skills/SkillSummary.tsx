import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

const GridItemTechLogo = styled(Grid)`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillLogoStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export interface SkillSummaryProps {
  logoSrc: string;
  title: string;
}

const SkillSummary: React.FC<SkillSummaryProps> = ({ logoSrc, title }) => {
  return (
    <Grid container spacing={1} alignItems="center" wrap="nowrap">
      <GridItemTechLogo item>
        <SkillLogoStyled src={logoSrc} alt="title" />
      </GridItemTechLogo>
      <Grid item>
        <Typography variant="h6">{title}</Typography>
      </Grid>
    </Grid>
  );
};

export default SkillSummary;
