import { Button, DialogActions, DialogTitle, Grid } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAction from "../../../hooks/useAction";
import { Id } from "../../../models/general";
import { TCreateProject } from "../../../models/project";
import { updateImage, uploadImage } from "../../../stores/actions/resources";
import { Project, ProjectsStoreContext } from "../../../stores/ProjectsStore";
import DialogRC, { DialogContentRC } from "../../../styled/dialog";
import TextFieldRC from "../../../styled/form/inputs";
import UploadImage from "../../forms/UploadImage";
import ChooseTechnologies from "./ChooseTechnologies";

type TProjectForm = Omit<TCreateProject, "logoSrc" | "technologies">;

export interface ProjectFormProps {
  open: boolean;
  handleCloseForm: () => void;
  selectedProject?: Project;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  open,
  selectedProject,
  handleCloseForm,
}) => {
  const projectStore = useContext(ProjectsStoreContext);
  const { execute, isProcessing } = useAction();
  const [logo, setLogo] = useState<any>();
  const [logoError, setLogoError] = useState<string | undefined>();
  const [logoUrl, setLogoUrl] = useState<string | undefined>();
  const [selectedTechnologies, setSelectedTechnologies] = useState<Id[]>([]);
  const { register, handleSubmit, reset } = useForm<TProjectForm>();

  const clearForm = () => {
    reset({
      title: "",
      description: "",
      www: "",
      github: "",
    });
    setSelectedTechnologies([]);
    setLogo(undefined);
    setLogoUrl(undefined);
    setLogoError(undefined);
  };

  const handleClose = () => {
    clearForm();
    handleCloseForm();
  };

  const executeSubmit = async (data: TProjectForm) => {
    if (!logo && !logoUrl) {
      return;
    }
    if (selectedProject) {
      try {
        let uploadedLogoSrc = logoUrl ?? "no_logo";
        if (logo) {
          uploadedLogoSrc = await execute<string>(
            updateImage({
              imageFile: logo,
              oldPath: selectedProject.logoSrc,
            })
          );
        }
        const update = projectStore.updateProject({
          id: selectedProject.id,
          title: data.title,
          description: data.description,
          www: data.www,
          github: data.github,
          technologies: selectedTechnologies,
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
        const create = projectStore.createProject({
          title: data.title,
          description: data.description,
          www: data.www,
          github: data.github,
          technologies: selectedTechnologies,
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
    if (selectedProject) {
      setLogoUrl(selectedProject?.logoSrc);
      setSelectedTechnologies(selectedProject?.technologies ?? []);
      reset({
        title: selectedProject.title,
        description: selectedProject.description,
        www: selectedProject.www,
        github: selectedProject.github,
      });
    }
  }, [selectedProject, reset]);

  const handleRemoveLogo = () => {
    setLogo(null);
    setLogoUrl(undefined);
  };

  const { ref: titleRef, ...titleProps } = register("title");
  const { ref: descRef, ...descProps } = register("description");
  const { ref: wwwRef, ...wwwProps } = register("www");
  const { ref: githubRef, ...githubProps } = register("github");

  return (
    <DialogRC open={open} isProcessing={isProcessing}>
      <form onSubmit={handleSubmit(executeSubmit)}>
        <DialogTitle>Technology</DialogTitle>
        <DialogContentRC>
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
              <TextFieldRC
                fullWidth
                label="Title"
                inputRef={titleRef}
                {...titleProps}
              />
            </Grid>
            <Grid item>
              <TextFieldRC
                fullWidth
                multiline
                label="Description"
                inputRef={descRef}
                {...descProps}
              />
            </Grid>
            <Grid item>
              <TextFieldRC
                fullWidth
                label="Website url"
                inputRef={wwwRef}
                {...wwwProps}
              />
            </Grid>
            <Grid item>
              <TextFieldRC
                fullWidth
                label="GitHub url"
                inputRef={githubRef}
                {...githubProps}
              />
            </Grid>
            <Grid item>
              <ChooseTechnologies
                selected={selectedTechnologies}
                setSelected={setSelectedTechnologies}
              />
            </Grid>
          </Grid>
        </DialogContentRC>
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

export default ProjectForm;
