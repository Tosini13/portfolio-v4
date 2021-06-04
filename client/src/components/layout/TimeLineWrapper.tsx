import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { mainTheme } from "../../styled/config";

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

const TimeStampsContainer = styled.div`
  & > div {
    margin-bottom: 20px;
  }
  & > div:last-child {
    margin-bottom: 0px;
  }
`;

export interface TimeLineWrapperProps {}

const TimeLineWrapper: React.FC<TimeLineWrapperProps> = ({ children }) => {
  return (
    <Grid container style={{ position: "relative", marginBottom: "30px" }}>
      <TimeLine />
      <Grid item style={{ paddingLeft: "20px" }}>
        <TimeStampsContainer>{children}</TimeStampsContainer>
      </Grid>
    </Grid>
  );
};

export default TimeLineWrapper;
