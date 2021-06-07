import { Grid, GridSize } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { differenceInYears, format } from "date-fns";
import styled from "styled-components";
import { mainTheme } from "../../styled/config";
import TypographyRC, { SubTitleTypography } from "../../styled/typography";

const birthday = "1997/07/20";

const gridSize = {
  lg: 6 as GridSize,
  md: 12 as GridSize,
  sm: 12 as GridSize,
  xs: 12 as GridSize,
};

export interface PersonalDetailsProps {}

const PersonalDetails: React.FC<PersonalDetailsProps> = () => {
  return (
    <>
      <SubTitleTypography>Web Developer</SubTitleTypography>
      <Grid container spacing={2}>
        <Grid item {...gridSize}>
          <PersonalDetailsItem
            title="Birthday"
            content={format(new Date(birthday), "dd MMMM yyyy")}
          />
        </Grid>
        <Grid item {...gridSize}>
          <PersonalDetailsItem
            title="Age"
            content={`${differenceInYears(new Date(), new Date(birthday))}`}
          />
        </Grid>
        <Grid item {...gridSize}>
          <PersonalDetailsItem
            title="Website"
            content="www.jakubbartosik.com"
            href="http://www.jakubbartosik.com"
          />
        </Grid>
        <Grid item {...gridSize}>
          <PersonalDetailsItem title="Phone" content="+48 696 993 916" />
        </Grid>
        <Grid item {...gridSize}>
          <PersonalDetailsItem title="Email" content="jbartos13@gmail.com" />
        </Grid>
        <Grid item xs={12}>
          <PersonalDetailsItem
            title="Degree"
            content="Engineer (Computer Science and Information Technology)"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalDetails;

const MenuIconStyled = styled(KeyboardArrowRightIcon)`
  color: ${mainTheme.palette.secondary.light};
`;

const AStyled = styled.a`
  color: ${mainTheme.palette.secondary.light};
`;
type TPersonalDetailsItemProps = {
  title: string;
  content: string;
  href?: string;
};

const PersonalDetailsItem: React.FC<TPersonalDetailsItemProps> = ({
  title,
  content,
  href,
}) => (
  <Grid container spacing={1} alignItems="flex-start" wrap="nowrap">
    <Grid item style={{ position: "relative" }}>
      <MenuIconStyled />
    </Grid>
    <Grid item>
      <TypographyRC style={{ fontWeight: "bold" }}>{title}:</TypographyRC>
    </Grid>
    <Grid item>
      {href ? (
        <TypographyRC>
          <AStyled href={href} target="_blank" rel="noreferrer">
            {content}
          </AStyled>
        </TypographyRC>
      ) : (
        <TypographyRC>{content}</TypographyRC>
      )}
    </Grid>
  </Grid>
);
