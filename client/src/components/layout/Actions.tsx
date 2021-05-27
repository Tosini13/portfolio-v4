import { Grid, IconButton } from "@material-ui/core";
import { Edit, Add, Delete, Cancel } from "@material-ui/icons";

export interface TActionsProps {
  handleCreate?: () => void;
  handleEdit?: () => void;
  handleDelete?: () => void;
  handleCancel?: () => void;
}

const Actions: React.FC<TActionsProps> = ({
  handleCreate,
  handleEdit,
  handleDelete,
  handleCancel,
}) => {
  return (
    <Grid container spacing={1} alignItems="center">
      {handleCreate && (
        <Grid item>
          <IconButton onClick={handleCreate}>
            <Add />
          </IconButton>
        </Grid>
      )}

      {handleEdit && (
        <Grid item>
          <IconButton onClick={handleEdit}>
            <Edit />
          </IconButton>
        </Grid>
      )}

      {handleDelete && (
        <Grid item>
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
        </Grid>
      )}

      {handleCancel && (
        <Grid item>
          <IconButton onClick={handleCancel}>
            <Cancel />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default Actions;
