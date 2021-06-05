import { Grid } from "@material-ui/core";
import { format, isSameMonth, isValid } from "date-fns";
import styled from "styled-components";

import { EEndDate, FORMAT_DATE_EXP, TEndDate } from "../../models/experience";
import TypographyRC from "../../styled/typography";

export const FromDateTypography = styled(TypographyRC)`
  background-color: gray;
  color: white;
  letter-spacing: 1px;
  width: fit-content;
  padding: 2px 20px;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  margin-left: -10px;
  &::after {
    content: "";
    position: absolute;
    right: -5px;
    top: -2px;
    height: calc(100% + 4px);
    width: 10px;
    transform: skew(-25deg, 0deg);
    background-color: white;
    z-index: 2;
  }
`;

export const ToDateTypography = styled(FromDateTypography)`
  margin-left: 0px;
  &::after {
    content: "";
    right: -5px;
    width: 11px;
  }
`;

const showToDate = (toDate?: TEndDate) => {
  if (toDate === EEndDate.PRESENT) {
    return EEndDate.PRESENT;
  }
  if (toDate && isValid(new Date(toDate))) {
    return format(new Date(toDate), FORMAT_DATE_EXP);
  }
  return toDate;
};

const shouldShowToDate = (fromDate: string, toDate?: TEndDate) => {
  if (!toDate) {
    return false;
  }

  if (isSameMonth(new Date(fromDate), new Date(toDate))) {
    return false;
  }

  return true;
};

export type TDatesParams = {
  fromDate: string;
  toDate?: string;
};

export const Dates: React.FC<TDatesParams> = ({ fromDate, toDate }) => (
  <Grid container style={{ margin: "10px 0px" }}>
    <Grid item>
      <FromDateTypography variant="h5">
        {isValid(new Date(fromDate))
          ? format(new Date(fromDate), FORMAT_DATE_EXP)
          : fromDate}
      </FromDateTypography>
    </Grid>
    {shouldShowToDate(fromDate, toDate) ? (
      <Grid item>
        <ToDateTypography variant="h5">{showToDate(toDate)}</ToDateTypography>
      </Grid>
    ) : null}
  </Grid>
);
