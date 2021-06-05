import { useState } from "react";

export enum EAction {
  "CREATE" = "CREATE",
  "EDIT" = "EDIT",
  "DELETE" = "DELETE",
}

const useFormManager = <T>() => {
  const [selected, setSelected] = useState<T | undefined>();
  const [action, setAction] = useState<EAction | undefined>();

  return {
    handleCreate: () => setAction(EAction.CREATE),
    handleEdit: () => setAction(EAction.EDIT),
    handleDelete: () => setAction(EAction.DELETE),
    handleCancel: () => {
      setSelected(undefined);
      setAction(undefined);
    },
    isFormOpened:
      action === EAction.CREATE ||
      (action === EAction.EDIT && selected !== undefined),
    isEdit: action === EAction.EDIT,
    isDelete: action === EAction.DELETE,
    isCreate: action === EAction.CREATE,
    selected,
    setSelected,
    isAction:
      action === EAction.CREATE ||
      action === EAction.EDIT ||
      action === EAction.DELETE,
  };
};

export default useFormManager;
