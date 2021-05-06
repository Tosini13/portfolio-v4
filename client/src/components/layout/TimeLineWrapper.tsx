import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { mainTheme } from "../../styled/config";

export const BulletStyled = styled.div`
  position: absolute;
  left: 0px;
  border: ${mainTheme.palette.secondary.light} solid 1px;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  background-color: white;
  margin-top: 2px;
`;

export interface BulletProps {}

export const Bullet: React.FC<BulletProps> = ({ children }) => {
  return (
    <>
      <BulletStyled />
      <Typography style={{ fontWeight: "bold", marginLeft: "5px" }}>
        {children}
      </Typography>
    </>
  );
};

export const TimeStampContainer = styled.div`
  padding-bottom: 15px;
`;

const TimeLine = styled.div`
  position: absolute;
  top: 2px;
  left: 8px;
  width: 2px;
  height: 100%;
  background-color: ${mainTheme.palette.secondary.light};
`;

export interface TimeLineWrapperProps {}

const TimeLineWrapper: React.FC<TimeLineWrapperProps> = ({ children }) => {
  return (
    <Grid container style={{ position: "relative", marginBottom: "30px" }}>
      <TimeLine />
      <Grid item style={{ paddingLeft: "20px" }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default TimeLineWrapper;
