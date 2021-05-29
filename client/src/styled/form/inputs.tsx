import { TextField, TextFieldProps } from "@material-ui/core";

const TextFieldRC: React.FC<TextFieldProps> = ({ children, ...props }) => {
  return (
    <TextField color="secondary" {...props}>
      {children}
    </TextField>
  );
};

export default TextFieldRC;
