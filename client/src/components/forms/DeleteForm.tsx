import { Button, DialogActions, DialogTitle } from "@material-ui/core";
import useAction from "../../hooks/useAction";
import DialogRC from "../../styled/dialog";

export interface DeleteFormProps {
  open: boolean;
  deleteTitleItem: string;
  handleDelete: () => Promise<void>;
  callbackSuccess: () => void;
}

const DeleteForm: React.FC<DeleteFormProps> = ({
  deleteTitleItem,
  open,
  handleDelete,
  callbackSuccess,
}) => {
  const { isProcessing, execute } = useAction();

  const handleDeleteFunc = async () => {
    try {
      const promise = handleDelete();
      await execute(promise);
      callbackSuccess();
    } catch (e) {
      console.log("e", e);
    }
  };

  return (
    <DialogRC open={open} isProcessing={isProcessing}>
      <DialogTitle>{`Do you want to delete ${deleteTitleItem}?`}</DialogTitle>
      <DialogActions>
        <Button onClick={handleDeleteFunc}>Yes</Button>
        <Button>No</Button>
      </DialogActions>
    </DialogRC>
  );
};

export default DeleteForm;
