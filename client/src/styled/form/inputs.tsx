import { TextField, TextFieldProps } from "@material-ui/core";
import styled from "styled-components";
import { parseStyledBoolean, TBooleanStyled } from "../booleanParser";

const TextFieldStyled = styled(TextField)<{
  fullwidth: TBooleanStyled;
}>`
  ${(props) => (props.fullwidth ? `width: 100%;` : "")}
`;

type TextFieldRCProps = TextFieldProps & {
  fullWidth?: boolean;
};

const TextFieldRC: React.FC<TextFieldRCProps> = ({
  children,
  fullWidth,
  ...props
}) => {
  return (
    <TextFieldStyled
      color="secondary"
      {...props}
      fullwidth={parseStyledBoolean(Boolean(fullWidth))}
    >
      {children}
    </TextFieldStyled>
  );
};

export default TextFieldRC;
