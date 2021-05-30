import { TextField, TextFieldProps } from "@material-ui/core";
import styled from "styled-components";

const TextFieldStyled = styled(TextField)<{
  fullwidth: boolean;
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
      fullwidth={Boolean(fullWidth)}
    >
      {children}
    </TextFieldStyled>
  );
};

export default TextFieldRC;
