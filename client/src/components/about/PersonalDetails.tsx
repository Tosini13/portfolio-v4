import { Grid, GridSize, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { mainTheme } from "../../styled/config";

const gridSize = {
  lg: 6 as GridSize,
  md: 12 as GridSize,
};

export interface PersonalDetailsProps {}

const PersonalDetails: React.FC<PersonalDetailsProps> = () => {
  return (
    <>
      <Typography variant="h6">WEB DEVELOPER</Typography>
      <Grid container>
        <Grid item {...gridSize}>
          <PersonalDetailsItem title="Birthday" content="20.07.1997" />
        </Grid>
        <Grid item {...gridSize}>
          <PersonalDetailsItem title="Age" content="24" />
        </Grid>
        <Grid item {...gridSize}>
          <PersonalDetailsItem title="Website" content="jakub.bartosik.eu" />
        </Grid>
        <Grid item {...gridSize}>
          <PersonalDetailsItem
            title="Degree"
            content="Engineer (Computer Science)"
          />
        </Grid>
        <Grid item {...gridSize}>
          <PersonalDetailsItem title="Phone" content="+48 696 993 916" />
        </Grid>
        <Grid item {...gridSize}>
          <PersonalDetailsItem title="Email" content="jbartos13@gmail.com" />
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalDetails;

type TPersonalDetailsItemProps = {
  title: string;
  content: string;
};

const PersonalDetailsItem: React.FC<TPersonalDetailsItemProps> = ({
  title,
  content,
}) => (
  <Grid container spacing={1} alignItems="center" wrap="nowrap">
    <Grid item>
      <KeyboardArrowRightIcon
        fontSize="small"
        style={{ color: mainTheme.palette.secondary.light }}
      />
    </Grid>
    <Grid item>
      <Typography style={{ fontWeight: "bold" }}>{title}:</Typography>
    </Grid>
    <Grid item>
      <Typography>{content}</Typography>
    </Grid>
  </Grid>
);
