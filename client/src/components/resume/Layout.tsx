import { Grid, Typography } from "@material-ui/core";
import { format, isSameMonth, isValid } from "date-fns";
import styled from "styled-components";

import { EEndDate, FORMAT_DATE_EXP, TEndDate } from "../../models/experience";

export const FromDateTypography = styled(Typography)`
  background-color: gray;
  color: white;
  letter-spacing: 1px;
  width: fit-content;
  padding: 2px 20px 2px 14px;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  margin-left: -10px;
  &::after {
    content: "";
    position: absolute;
    right: -4px;
    top: 0px;
    height: 100%;
    width: 7px;
    transform: skew(-25deg, 0deg);
    background-color: white;
    z-index: 2;
  }
`;

export const ToDateTypography = styled(FromDateTypography)`
  margin-left: 0px;
  padding-right: 10px;
  &::after {
    content: "";
    background-color: gray;
    right: -5px;
    width: 11px;
  }
`;

const showToDate = (fromDate: string, toDate: TEndDate) => {
  if (isSameMonth(new Date(fromDate), new Date(toDate))) {
    return null;
  }
  if (toDate === EEndDate.PRESENT) {
    return EEndDate.PRESENT;
  }
  if (isValid(new Date(toDate))) {
    return format(new Date(toDate), FORMAT_DATE_EXP);
  }
  return toDate;
};

export type TDatesParams = {
  fromDate: string;
  toDate?: string;
};

export const Dates: React.FC<TDatesParams> = ({ fromDate, toDate }) => (
  <Grid container>
    <Grid item>
      <FromDateTypography>
        {format(new Date(fromDate), FORMAT_DATE_EXP)}
      </FromDateTypography>
    </Grid>
    {toDate ? (
      <Grid item>
        <ToDateTypography>{showToDate(fromDate, toDate)}</ToDateTypography>
      </Grid>
    ) : null}
  </Grid>
);
