import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { mainTheme } from "../../styled/config";

export const BulletStyled = styled.div<{
  isselectable: boolean;
}>`
  position: absolute;
  left: 0px;
  border: ${mainTheme.palette.secondary.light} solid 1px;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  background-color: white;
  margin-top: 2px;
  transition: all 0.3s;
  ${(props) =>
    props.isselectable
      ? `
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
      border-color: rgba(0,0,0,0.8);
      background-color: rgba(0,0,0,0.8);
      cursor: pointer;
      &:hover{
        background-color: ${mainTheme.palette.secondary.light};
      }
      `
      : ""}
`;

export interface BulletProps {
  isSelectable?: boolean;
  handleClick?: () => void;
}

export const Bullet: React.FC<BulletProps> = ({
  children,
  isSelectable,
  handleClick,
}) => {
  return (
    <>
      <BulletStyled
        isselectable={Boolean(isSelectable)}
        onClick={handleClick}
      />
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
