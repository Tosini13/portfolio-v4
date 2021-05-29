import { CircularProgress, Dialog, DialogProps } from "@material-ui/core";
import styled from "styled-components";

const DialogStyled = styled(Dialog)`
  .MuiDialog-paper {
    position: relative;
    overflow: hidden;
  }
`;

export type DialogRCProps = DialogProps & { isProcessing?: boolean };

const DialogRC: React.FC<DialogRCProps> = ({
  children,
  isProcessing,
  ...props
}) => {
  return (
    <DialogStyled {...props}>
      {children}
      {isProcessing && <Processing />}
    </DialogStyled>
  );
};

export default DialogRC;

const CircularProgressStyled = styled(CircularProgress)`
  position: absolute;
  bottom: 5px;
  left: 5px;
`;

const Processing = () => <CircularProgressStyled color="secondary" />;
