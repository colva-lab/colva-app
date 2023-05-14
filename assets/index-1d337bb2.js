import { az as requireCreateSvgIcon, aA as interopRequireDefaultExports, aB as require$$2, u as useTranslation, bR as useCosva, n as jsx, ax as DialogSimple, as as React, bx as DialogContentText, at as Fragment, dY as ActionColumn, r as reactExports, aw as Variants, C as jsxs, au as Snackbar, av as SnackBarVariant, du as CosvaTable, b1 as default_1$2, bf as default_1$3, b$ as __vitePreload, a2 as Grid, dM as idOptimistic, cY as AppBar, D as Collapse, bk as CircularProgress } from "./index-60a9ad09.js";
import { u as useDeleteBovineMilkProductivity, m as mutationUpdaterDeleteBovineMilkProductivity, a as useEditBovineMilkProductivity, b as useCreateBovineMilkProductivity, c as mutationUpdaterCreateBovineMilkProductivity } from "./mutations-a19b80cd.js";
import { f as format, p as parseISO, Y as BovineMilkProductionForm } from "./index-3848f05e.js";
import { T as Tabs, a as Tab, b as TabPanel } from "./index-d23e1910.js";
import "./ErrorOutline-27089ca2.js";
import "./index-9ab0c8c5.js";
import "./Save-95d94cd2.js";
var TableChart = {};
var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(TableChart, "__esModule", {
  value: true
});
var default_1$1 = TableChart.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = require$$2;
var _default$1 = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z"
}), "TableChart");
default_1$1 = TableChart.default = _default$1;
var ShowChart = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(ShowChart, "__esModule", {
  value: true
});
var default_1 = ShowChart.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = require$$2;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"
}), "ShowChart");
default_1 = ShowChart.default = _default;
const DialogRemove = (props) => {
  const {
    milkProduction,
    bovine
  } = props;
  const {
    t
  } = useTranslation("milkProductivity");
  const {
    farm
  } = useCosva();
  const updateVariables = {
    bovine: bovine.id,
    farm: farm.value
  };
  const [deleteBovineMilkProductivity, {
    loading
  }] = useDeleteBovineMilkProductivity({
    queryVariables: updateVariables
  });
  return /* @__PURE__ */ jsx(DialogSimple, { open: props.open, ...{
    loading,
    maxWidth: "sm",
    fullScreen: false,
    title: t("delete.title"),
    body: /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsx(DialogContentText, { children: t("delete.content") }) }),
    onClose: () => props.onClose(),
    actions: [{
      color: "inherit",
      action: () => {
        props.onClose();
      },
      title: "close",
      disabled: loading
    }, {
      disabled: loading,
      title: "delete",
      color: "primary",
      action: async () => {
        if (milkProduction) {
          const variables = {
            id: milkProduction.id,
            bovine: bovine.id,
            farm: farm.value
          };
          await deleteBovineMilkProductivity({
            variables,
            optimisticResponse: {
              __typename: "Mutation",
              deleteBovineMilkProductivity: true
            },
            update: mutationUpdaterDeleteBovineMilkProductivity({
              queryVariables: updateVariables,
              variables
            })
          }).catch((e) => {
            console.error(e);
          });
        }
        props.onClose();
      }
    }]
  } });
};
const Table = ({
  milkProductivities,
  bovine
}) => {
  const {
    t
  } = useTranslation("milkProductivity");
  const [milkProductionDelete, setMilkProductionDelete] = React.useState(null);
  const {
    farm
  } = useCosva();
  const [editBovineMilkProductivity, {
    loading: loadingEditBovineMilkProductivity
  }] = useEditBovineMilkProductivity({
    readQueryVariables: {
      farm: farm.value,
      bovine: bovine.id
    }
  });
  const [form, setForm] = React.useState({
    open: false,
    values: void 0
  });
  const columns = [{
    title: t("date"),
    field: "milkProductionDate.date",
    component: ({
      date
    }) => {
      return /* @__PURE__ */ jsx(Fragment, { children: format(parseISO(date), "yyyy-MM-dd h:m a") });
    }
  }, {
    title: t("liters"),
    field: "value",
    component: ({
      value
    }) => {
      return /* @__PURE__ */ jsx(Fragment, { children: value });
    },
    tableCellProps: {
      align: "right"
    }
  }, {
    title: t("actions"),
    field: ActionColumn,
    tableCellProps: {
      align: "center"
    }
  }];
  const onCloseForm = () => {
    setForm({
      ...form,
      open: false
    });
  };
  const [variant, setVariant] = reactExports.useState(null);
  const messages = {
    [Variants.error]: t("messages.edit.success"),
    [Variants.success]: t("messages.edit.success")
  };
  const message = variant && messages[variant];
  const closeSnackbar = () => {
    setVariant(null);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Snackbar, { anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    }, open: !!variant, autoHideDuration: 6e3, onClose: closeSnackbar, children: /* @__PURE__ */ jsx(SnackBarVariant, { onClose: closeSnackbar, variant: variant || Variants.success, message }) }),
    /* @__PURE__ */ jsx(BovineMilkProductionForm, { isEditing: true, open: form.open, showIcon: false, showButton: false, onOpen: () => {
      setForm({
        ...form,
        open: true
      });
    }, onClose: onCloseForm, loading: loadingEditBovineMilkProductivity, onSave: async (milkProduction) => {
      var _a;
      const id = (_a = form.values) == null ? void 0 : _a.id;
      if (!id)
        return;
      setVariant(null);
      try {
        editBovineMilkProductivity({
          variables: {
            id,
            values: {
              value: {
                set: milkProduction.value
              },
              date: {
                set: milkProduction.date
              },
              observation: {
                set: milkProduction.observation
              }
            }
          }
        });
        setVariant(Variants.success);
        onCloseForm();
      } catch {
        setVariant(Variants.error);
      }
    }, values: form.values }),
    /* @__PURE__ */ jsx(DialogRemove, { ...{
      open: !!milkProductionDelete,
      bovine,
      milkProduction: milkProductionDelete,
      onClose: () => {
        setMilkProductionDelete(null);
      }
    } }),
    /* @__PURE__ */ jsx(CosvaTable, { columns, data: milkProductivities, actions: [{
      icon: /* @__PURE__ */ jsx(default_1$2, {}),
      onClick: (_event, {
        id,
        date,
        value,
        observation
      }) => {
        setForm({
          ...form,
          open: true,
          values: {
            id,
            value,
            date,
            observation
          }
        });
      }
    }, {
      icon: /* @__PURE__ */ jsx(default_1$3, {}),
      onClick: (_event, value) => {
        setMilkProductionDelete(value);
      }
    }], ToolbarProps: {
      variant: "dense"
    } })
  ] });
};
const Chart = React.lazy(() => __vitePreload(() => import("./Chart-7d509d19.js"), true ? ["assets/Chart-7d509d19.js","assets/index-60a9ad09.js","assets/index-02c96895.css","assets/index-3848f05e.js","assets/ErrorOutline-27089ca2.js","assets/index-9ab0c8c5.js","assets/Save-95d94cd2.js","assets/index-ceb7b8c1.css"] : void 0));
const MilkProductions = ({
  bovine
}) => {
  const {
    t
  } = useTranslation("milkProductivity");
  const {
    farm
  } = useCosva();
  const {
    milkProductivities
  } = bovine;
  const [showChart, setShowChart] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const [openForm, setOpenForm] = React.useState(false);
  const onCloseForm = () => setOpenForm(false);
  const handleChange = (_event, newValue) => {
    setValue(newValue);
    if (newValue === 1 && showChart === null)
      setShowChart(true);
  };
  const readQueryVariables = {
    farm: farm.value,
    bovine: bovine.id
  };
  const [createBovineMilkProductivity, bovineMilkProductivity] = useCreateBovineMilkProductivity({
    readQueryVariables
  });
  const [variant, setVariant] = reactExports.useState(null);
  const messages = {
    [Variants.error]: t("messages.create.success"),
    [Variants.success]: t("messages.create.success")
  };
  const message = variant && messages[variant];
  return /* @__PURE__ */ jsxs(Grid, { container: true, children: [
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
      /* @__PURE__ */ jsx(Snackbar, { anchorOrigin: {
        vertical: "top",
        horizontal: "right"
      }, open: !!variant, autoHideDuration: 6e3, onClose: () => setVariant(null), children: /* @__PURE__ */ jsx(SnackBarVariant, { onClose: () => setVariant(null), variant, message }) }),
      /* @__PURE__ */ jsx(BovineMilkProductionForm, { showIcon: false, loading: bovineMilkProductivity.loading, open: openForm, onClose: onCloseForm, onOpen: () => setOpenForm(true), onSave: async (milkProduction) => {
        setVariant(null);
        await createBovineMilkProductivity({
          variables: {
            bovine: bovine.id,
            farm: farm.value,
            milkProduction
          },
          update: (...props) => {
            mutationUpdaterCreateBovineMilkProductivity({
              variables: readQueryVariables
            })(...props);
          },
          optimisticResponse: {
            __typename: "Mutation",
            createBovineMilkProductivity: {
              id: idOptimistic,
              value: milkProduction.value,
              bovineId: bovine.id,
              bovine,
              date: milkProduction.date,
              createdAt: (/* @__PURE__ */ new Date()).toISOString(),
              updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
              __typename: "BovineMilkProductivity"
            }
          }
        }).then(() => {
          onCloseForm();
          setVariant(Variants.success);
        }).catch((e) => {
          console.log(e);
          setVariant(Variants.error);
        });
      } })
    ] }),
    /* @__PURE__ */ jsx(AppBar, { position: "static", color: "transparent", elevation: 0, children: /* @__PURE__ */ jsxs(Tabs, { value, onChange: handleChange, variant: "scrollable", scrollButtons: true, indicatorColor: "secondary", textColor: "secondary", "aria-label": "scrollable force tabs example", allowScrollButtonsMobile: true, children: [
      /* @__PURE__ */ jsx(Tab, { label: t("showTable"), icon: /* @__PURE__ */ jsx(default_1$1, {}) }),
      /* @__PURE__ */ jsx(Tab, { label: t(`showGraph`), icon: /* @__PURE__ */ jsx(default_1, {}) })
    ] }) }),
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
      /* @__PURE__ */ jsx(TabPanel, { value, index: 0, children: /* @__PURE__ */ jsx(Table, { ...{
        milkProductivities,
        bovine
      } }) }),
      /* @__PURE__ */ jsx(TabPanel, { value, index: 1, children: /* @__PURE__ */ jsx(Collapse, { in: value === 1, children: /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "center", children: /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", children: /* @__PURE__ */ jsx(CircularProgress, { size: 60 }) }) }), children: showChart !== null && /* @__PURE__ */ jsx(Chart, { bovines: [bovine] }) }) }) })
    ] })
  ] });
};
export {
  MilkProductions,
  MilkProductions as default
};
