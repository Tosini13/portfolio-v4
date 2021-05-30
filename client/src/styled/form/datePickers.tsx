import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { pl } from "date-fns/locale";
import styled from "styled-components";

const KeyboardDatePickerStyled = styled(KeyboardDatePicker)``;

const KeyboardDatePickerRC: React.FC<KeyboardDatePickerProps> = ({
  children,
  ...props
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pl}>
      <KeyboardDatePickerStyled color="secondary" {...props}>
        {children}
      </KeyboardDatePickerStyled>
    </MuiPickersUtilsProvider>
  );
};

export default KeyboardDatePickerRC;
