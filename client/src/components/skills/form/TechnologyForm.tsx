import { useForm } from "react-hook-form";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
} from "@material-ui/core";
import {
  TechnologiesStoreContext,
  Technology,
} from "../../../stores/TechnologiesStore";
import TextFieldRC from "../../../styled/form/inputs";
import useAction from "../../../hooks/useAction";
import {
  ETechnologyField,
  TCreateTechnology,
} from "../../../models/technology";
import { useContext, useEffect } from "react";
import DialogRC from "../../../styled/dialog";

type TTechForm = Omit<TCreateTechnology, "logoSrc">;

export interface TechnologyFormProps {
  open: boolean;
  handleClose: () => void;
  selectedTechnology?: Technology;
}

const TechnologyForm: React.FC<TechnologyFormProps> = ({
  open,
  handleClose,
  selectedTechnology,
}) => {
  const { isProcessing, execute } = useAction();
  const { register, handleSubmit, reset } = useForm<TTechForm>();

  const techstore = useContext(TechnologiesStoreContext);

  const clearForm = () => {
    reset();
  };

  const executeSubmit = async (data: TTechForm) => {
    if (selectedTechnology) {
      const uploadedLogoSrc = "no_logo"; // TODO: add upload img method
      try {
        const update = techstore.updateTechnology({
          id: selectedTechnology.id,
          title: data.title,
          field: data.field,
          logoSrc: uploadedLogoSrc,
        });
        await execute(update);
        clearForm();
        handleClose();
      } catch (e) {
        console.log("e", e);
      }
    } else {
      const uploadedLogoSrc = "no_logo"; // TODO: add upload img method
      try {
        const create = techstore.createTechnology({
          title: data.title,
          field: data.field,
          logoSrc: uploadedLogoSrc,
        });
        await execute(create);
        clearForm();
        handleClose();
      } catch (e) {
        console.log("e", e);
      }
    }
  };

  useEffect(() => {
    if (selectedTechnology) {
      reset({
        title: selectedTechnology.title,
        field: selectedTechnology.field,
      });
    }
  }, [selectedTechnology, reset]);

  const { ref: titleRef, ...titleProps } = register("title");
  const { ref: fieldRef, ...fieldProps } = register("field");
  return (
    <DialogRC open={open} isProcessing={isProcessing}>
      <form onSubmit={handleSubmit(executeSubmit)}>
        <DialogTitle>Technology</DialogTitle>
        <DialogContent>
          <Grid container direction="column" spacing={2} alignItems="stretch">
            <Grid item>
              <TextFieldRC label="Title" inputRef={titleRef} {...titleProps} />
            </Grid>
            <Grid item>
              <Select
                inputRef={fieldRef}
                {...fieldProps}
                label="Field"
                defaultValue={ETechnologyField.FRONTEND}
                color="secondary"
                style={{ width: "100%" }}
              >
                <MenuItem value={ETechnologyField.FRONTEND}>
                  {ETechnologyField.FRONTEND}
                </MenuItem>
                <MenuItem value={ETechnologyField.BACKEND}>
                  {ETechnologyField.BACKEND}
                </MenuItem>
                <MenuItem value={ETechnologyField.TOOLS}>
                  {ETechnologyField.TOOLS}
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type="submit" disabled={isProcessing}>
            Save
          </Button>
          <Button onClick={handleClose} disabled={isProcessing}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </DialogRC>
  );
};

export default TechnologyForm;
