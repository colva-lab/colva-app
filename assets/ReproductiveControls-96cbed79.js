import { aD as useMutation, dZ as mutationUpdaterCreateBovineReproductiveControl, d_ as mutationUpdaterEditBovineReproductiveControl, d$ as mutationUpdaterDeleteBovineReproductiveControl, e0 as CreateBovineReproductiveControlDocument, e1 as EditBovineReproductiveControlDocument, e2 as DeleteBovineReproductiveControlDocument, u as useTranslation, bR as useCosva, as as React, n as jsx, at as Fragment, c2 as getCode, aG as useQuery, C as jsxs, a2 as Grid, dM as idOptimistic, du as CosvaTable, b1 as default_1, bf as default_1$1 } from "./index-60a9ad09.js";
import { f as format, p as parseISO, Z as BovineReproductiveControlForm, _ as formatDatetimeLocal, $ as BOVINE_REPRODUCTIVE_STATES } from "./index-3848f05e.js";
import "./ErrorOutline-27089ca2.js";
import "./index-9ab0c8c5.js";
import "./Save-95d94cd2.js";
const CREATE_BOVINE_REPRODUCTIVE_CONTROL = CreateBovineReproductiveControlDocument;
const useCreateBovineReproductiveControl = ({
  readQueryVariables
}) => {
  return useMutation(CREATE_BOVINE_REPRODUCTIVE_CONTROL, {
    update: mutationUpdaterCreateBovineReproductiveControl({
      variables: readQueryVariables
    })
  });
};
const EDIT_BOVINE_REPRODUCTIVE_CONTROL = EditBovineReproductiveControlDocument;
const useEditBovineReproductiveControl = ({
  readQueryVariables
}) => {
  return useMutation(EDIT_BOVINE_REPRODUCTIVE_CONTROL, {
    update: mutationUpdaterEditBovineReproductiveControl({
      variables: readQueryVariables
    })
  });
};
const DELETE_BOVINE_REPRODUCTIVE_CONTROL = DeleteBovineReproductiveControlDocument;
const useDeleteBovineReproductiveControl = ({
  bovine
}) => {
  const parentVariables = {
    bovine
  };
  return useMutation(DELETE_BOVINE_REPRODUCTIVE_CONTROL, {
    update: mutationUpdaterDeleteBovineReproductiveControl({
      updateVariables: parentVariables,
      variables: {
        id: bovine
      }
    })
  });
};
const ReproductiveControls = ({
  bovine
}) => {
  const {
    t
  } = useTranslation("reproductiveControl");
  const {
    farm
  } = useCosva();
  const {
    reproductiveControls
  } = bovine;
  const [form, setForm] = React.useState({
    open: false,
    isEditing: false
  });
  const columns = [{
    title: t("date"),
    field: "date",
    component: ({
      date
    }) => {
      return /* @__PURE__ */ jsx(Fragment, { children: format(parseISO(date), "yyyy-MM-dd h:m a") });
    }
  }, {
    title: t("reproductiveState"),
    field: "bovineReproductiveState.code",
    component: ({
      bovineReproductiveState
    }) => {
      return /* @__PURE__ */ jsx(Fragment, { children: t(`types.${getCode(bovineReproductiveState)}`) });
    },
    tableCellProps: {
      align: "right"
    }
  }];
  const readQueryVariables = {
    farm: farm.value,
    bovine: bovine.id
  };
  const [createBovineReproductiveControl] = useCreateBovineReproductiveControl({
    readQueryVariables
  });
  const [editBovineReproductiveControl] = useEditBovineReproductiveControl({
    readQueryVariables
  });
  const [deleteBovineReproductiveControl] = useDeleteBovineReproductiveControl({
    bovine: bovine.id
  });
  const bovineReproductiveStatesResult = useQuery(BOVINE_REPRODUCTIVE_STATES);
  const {
    bovineReproductiveStates
  } = {
    ...bovineReproductiveStatesResult.data
  };
  return /* @__PURE__ */ jsxs(Grid, { container: true, children: [
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
      /* @__PURE__ */ jsx(BovineReproductiveControlForm, { showIcon: false, bovineReproductiveStates: bovineReproductiveStates || [], onSave: async (bovineReproductiveControl) => {
        const {
          date,
          notes
        } = bovineReproductiveControl;
        const bovineReproductiveState = bovineReproductiveStates == null ? void 0 : bovineReproductiveStates.find(({
          id
        }) => id === bovineReproductiveControl.bovineReproductiveState);
        const variables = {
          bovine: bovine.id,
          farm: farm.value,
          reproduction: bovineReproductiveControl
        };
        createBovineReproductiveControl({
          variables,
          update: mutationUpdaterCreateBovineReproductiveControl({
            variables: readQueryVariables
          }),
          optimisticResponse: bovineReproductiveState && {
            __typename: "Mutation",
            createBovineReproductiveControl: {
              id: idOptimistic,
              date,
              notes,
              bovine,
              bovineReproductiveState,
              bovineId: bovine.id,
              bovineReproductiveStateId: bovineReproductiveState.id,
              createdAt: (/* @__PURE__ */ new Date()).toISOString(),
              updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
              __typename: "BovineReproductiveControl"
            }
          }
        }).then(() => {
          console.log("Created");
        }).catch(console.log);
      } }),
      /* @__PURE__ */ jsx(BovineReproductiveControlForm, { open: form.isEditing, onClose: () => {
        setForm({
          open: false,
          isEditing: false
        });
      }, values: form.values, showIcon: false, showButton: false, bovineReproductiveStates: bovineReproductiveStates || [], onSave: async (reproduction) => {
        const reproductiveControl = reproductiveControls.find((item) => {
          var _a;
          return item.id === ((_a = form.values) == null ? void 0 : _a.id);
        });
        if (reproductiveControl) {
          const variables = {
            id: reproductiveControl.id,
            bovine: bovine.id,
            farm: farm.value,
            reproduction
          };
          const bovineReproductiveState = bovineReproductiveStates == null ? void 0 : bovineReproductiveStates.find(({
            id
          }) => id === reproduction.bovineReproductiveState);
          editBovineReproductiveControl({
            variables,
            update: mutationUpdaterEditBovineReproductiveControl({
              variables: {
                bovine: bovine.id,
                id: reproductiveControl.id
              }
            }),
            optimisticResponse: bovineReproductiveState && {
              __typename: "Mutation",
              editBovineReproductiveControl: {
                ...reproductiveControl,
                bovineReproductiveState,
                date: reproduction.date,
                notes: reproduction.notes
              }
            }
          });
        }
      } })
    ] }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(CosvaTable, { columns, data: reproductiveControls, actions: [{
      icon: /* @__PURE__ */ jsx(default_1, {}),
      onClick: (_event, {
        id,
        bovineReproductiveState,
        date,
        notes
      }) => {
        setForm({
          open: true,
          isEditing: true,
          values: {
            id,
            date: formatDatetimeLocal(parseISO(date)),
            bovineReproductiveState: bovineReproductiveState.id,
            notes
          }
        });
      }
    }, {
      icon: /* @__PURE__ */ jsx(default_1$1, {}),
      onClick: (_e, {
        id
      }) => {
        deleteBovineReproductiveControl({
          variables: {
            id
          },
          update: mutationUpdaterDeleteBovineReproductiveControl({
            variables: {
              id
            },
            updateVariables: {
              bovine: bovine.id
            }
          })
        });
      }
    }], ToolbarProps: {
      variant: "dense"
    } }) })
  ] });
};
export {
  ReproductiveControls,
  ReproductiveControls as default
};
