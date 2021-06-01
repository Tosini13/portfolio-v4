import "date-fns";

import {
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
} from "@material-ui/core";
import { isDate, subMonths } from "date-fns";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAction from "../../../hooks/useAction";
import {
  EEndDate,
  EExperienceType,
  TCreateExperience,
} from "../../../models/experience";
import { Id } from "../../../models/general";
import { Experience, TimeStoreContext } from "../../../stores/TimeStore";
import DialogRC from "../../../styled/dialog";
import TextFieldRC from "../../../styled/form/inputs";
import ChooseTechnologies from "../../portfolio/form/ChooseTechnologies";
import { FORMAT_DATE } from "../../../models/const";
import KeyboardDatePickerRC from "../../../styled/form/datePickers";

type TExperienceForm = Omit<TCreateExperience, "fromDate" | "toDate"> & {
  fromDate: Date | null;
  toDate: Date | EEndDate | null;
};

export interface ExperienceFormProps {
  open: boolean;
  handleCloseForm: () => void;
  selectedProject?: Experience;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({
  open,
  selectedProject,
  handleCloseForm,
}) => {
  const timeStore = useContext(TimeStoreContext);
  const { execute, isProcessing } = useAction();
  const { register, handleSubmit, reset, setValue, watch } =
    useForm<TExperienceForm>();

  const clearForm = () => {
    reset({
      title: "",
      description: "",
      fromDate: subMonths(new Date(), 1),
      toDate: EEndDate.PRESENT,
      institution: "",
      technologies: [],
      type: EExperienceType.JOB,
    });
    setValue("technologies", []);
  };

  const handleClose = () => {
    clearForm();
    handleCloseForm();
  };

  const executeSubmit = async (data: TExperienceForm) => {
    if (!data.fromDate || !data.toDate) {
      return;
    }
    const toDate =
      data.toDate === EEndDate.PRESENT
        ? EEndDate.PRESENT
        : data.toDate?.toISOString();
    if (selectedProject) {
      try {
        const update = timeStore.updateExperience({
          id: selectedProject.id,
          title: data.title,
          description: data.description,
          institution: data.institution,
          technologies: data.technologies,
          fromDate: data.fromDate?.toISOString(),
          toDate: toDate,
          type: data.type,
        });
        await execute(update);
        clearForm();
        handleClose();
      } catch (e) {
        console.log("e", e);
      }
    } else {
      try {
        const create = timeStore.createExperience({
          title: data.title,
          description: data.description,
          institution: data.institution,
          technologies: data.technologies,
          fromDate: data.fromDate?.toISOString(),
          toDate: toDate,
          type: data.type,
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
    if (selectedProject) {
      reset({
        title: selectedProject.title,
        description: selectedProject.description,
        fromDate: new Date(selectedProject.fromDate),
        toDate:
          selectedProject.toDate === EEndDate.PRESENT
            ? EEndDate.PRESENT
            : new Date(selectedProject.toDate),
        institution: selectedProject.institution,
        technologies: selectedProject.technologies,
        type: selectedProject.type,
      });
    }
  }, [selectedProject, reset]);

  const { ref: titleRef, ...titleProps } = register("title");
  const { ref: descRef, ...descProps } = register("description");
  const { ref: institutionRef, ...institutionProps } = register("institution");
  const { ref: typeRef, ...typeProps } = register("type");

  const toDateValue = isDate(watch("toDate")) ? watch("toDate") : null;
  const isPresent = watch("toDate") === EEndDate.PRESENT;
  return (
    <DialogRC open={open} isProcessing={isProcessing}>
      <form onSubmit={handleSubmit(executeSubmit)}>
        <DialogTitle>Experience</DialogTitle>
        <DialogContent
          style={{
            overflowY: "auto",
            maxHeight: "500px",
          }}
        >
          <Grid container direction="column" spacing={2} alignItems="stretch">
            <Grid item>
              <TextFieldRC
                label="Title"
                inputRef={titleRef}
                {...titleProps}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextFieldRC
                multiline
                label="Description"
                inputRef={descRef}
                {...descProps}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextFieldRC
                label="Institution"
                inputRef={institutionRef}
                {...institutionProps}
                fullWidth
              />
            </Grid>
            <Grid item>
              <KeyboardDatePickerRC
                required
                color="secondary"
                label="Choose Start Date"
                format={FORMAT_DATE}
                value={watch("fromDate") ?? null}
                //   onChange={handleDateChange}
                onChange={(date: Date | null) => setValue("fromDate", date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isPresent}
                    onChange={() =>
                      setValue(
                        "toDate",
                        isPresent ? new Date() : EEndDate.PRESENT
                      )
                    }
                    name="toDatePreset"
                  />
                }
                label="Present"
              />
            </Grid>
            <Grid item>
              <KeyboardDatePickerRC
                required
                color="secondary"
                label="Choose End Date"
                format={FORMAT_DATE}
                value={toDateValue}
                onChange={(date: Date | null) => setValue("toDate", date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                disabled={isPresent}
              />
            </Grid>
            <Grid item>
              <Select
                inputRef={typeRef}
                {...typeProps}
                label="Field"
                defaultValue={EExperienceType.JOB}
                color="secondary"
                style={{ width: "100%" }}
              >
                <MenuItem value={EExperienceType.EDUCATION}>
                  {EExperienceType.EDUCATION}
                </MenuItem>
                <MenuItem value={EExperienceType.JOB}>
                  {EExperienceType.JOB}
                </MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <ChooseTechnologies
                selected={watch("technologies") ?? []}
                setSelected={(ids: Id[]) => setValue("technologies", ids)}
              />
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

export default ExperienceForm;
