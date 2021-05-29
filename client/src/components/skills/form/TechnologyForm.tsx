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
import { useContext, useEffect, useState } from "react";
import DialogRC from "../../../styled/dialog";
import { updateImage, uploadImage } from "../../../stores/actions/resources";
import UploadImage from "../../forms/UploadImage";

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
  const [logo, setLogo] = useState<any>();
  const [logoError, setLogoError] = useState<string | undefined>();
  const [logoUrl, setLogoUrl] = useState<string | undefined>();

  const techstore = useContext(TechnologiesStoreContext);

  const clearForm = () => {
    reset();
    setLogo(undefined);
    setLogoUrl(undefined);
  };

  const executeSubmit = async (data: TTechForm) => {
    if (!logo && !logoUrl) {
      return;
    }
    if (selectedTechnology) {
      try {
        let uploadedLogoSrc = logoUrl ?? "no_logo";
        if (logo) {
          uploadedLogoSrc = await execute<string>(
            updateImage({
              imageFile: logo,
              oldPath: selectedTechnology.logoSrc,
            })
          );
        }
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
      try {
        const uploadedLogoSrc = await execute<string>(uploadImage(logo));
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
      setLogoUrl(selectedTechnology?.logoSrc);
      reset({
        title: selectedTechnology.title,
        field: selectedTechnology.field,
      });
    }
  }, [selectedTechnology, reset]);

  const handleRemoveLogo = () => {
    setLogo(null);
    setLogoUrl(undefined);
  };

  const { ref: titleRef, ...titleProps } = register("title");
  const { ref: fieldRef, ...fieldProps } = register("field");
  return (
    <DialogRC open={open} isProcessing={isProcessing}>
      <form onSubmit={handleSubmit(executeSubmit)}>
        <DialogTitle>Technology</DialogTitle>
        <DialogContent>
          <Grid container direction="column" spacing={2} alignItems="stretch">
            <Grid item>
              <UploadImage
                image={logo}
                imgUrl={logoUrl}
                imageError={logoError}
                setImage={setLogo}
                setImageError={setLogoError}
                setImageUrl={setLogoUrl}
                handleRemoveImage={handleRemoveLogo}
              />
            </Grid>
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
