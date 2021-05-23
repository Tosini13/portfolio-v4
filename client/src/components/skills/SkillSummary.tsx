import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

export const SkillLogoStyled = styled.img`
  width: 30px;
`;

export interface SkillSummaryProps {
  logoSrc: string;
  title: string;
}

const SkillSummary: React.FC<SkillSummaryProps> = ({ logoSrc, title }) => {
  return (
    <Grid container spacing={1} alignItems="center" wrap="nowrap">
      <Grid item>
        <SkillLogoStyled src={logoSrc} alt="title" />
      </Grid>
      <Grid item>
        <Typography variant="h6">{title}</Typography>
      </Grid>
    </Grid>
  );
};

export default SkillSummary;
