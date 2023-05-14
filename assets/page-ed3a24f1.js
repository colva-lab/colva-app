import { b0 as parseImages, az as requireCreateSvgIcon, aA as interopRequireDefaultExports, aB as require$$2, u as useTranslation, aD as useMutation, ad as FARMS_QUERY, a5 as produce, n as jsx, ax as DialogSimple, as as React, bx as DialogContentText, bp as useApolloClient, C as jsxs, at as Fragment, cD as Menu, cE as MenuItem, cF as FARM_USER, bW as ListItemIcon, b1 as default_1$1, bF as ListItemText, bf as default_1$2, O as alpha, G as emphasize, cp as useNavigate, r as reactExports, bU as createRouteFarm, cG as Zoom, a2 as Grid, P as Paper, a0 as Box, aT as Button, bT as Link, T as Typography, $ as isOptimistic, bQ as default_1$3, aG as useQuery, aj as orderImages, L as useTheme, bP as useFields, bl as MessagesTranslate, a4 as Divider, aW as IconButton, cH as default_1$4, cI as Checkbox, cJ as FabAbsolute } from "./index-60a9ad09.js";
import { c as createAPIImageRoute, D as DELETE_FARM, u as useFarmFields, w as withTranslation, s as subscribeToMoreMessage, a as subscribeToDeletedMessage, b as subscribeToFarmUserCreated, d as subscribeToDeleteFarmUser, I as ImagesStepper, C as CosvaFarm, e as Card, f as CardActionArea, S as SkeletonFarms, F as FarmFieldsProvider, L as ListItem, g as FarmFieldsConsumer, h as Form, i as initialState } from "./index-9ab0c8c5.js";
import { C as CardOptions } from "./CardOptions-cd475336.js";
import "./Save-95d94cd2.js";
const parseFarmImages = (images) => {
  return parseImages(images, (file) => createAPIImageRoute(`farms/${file}`, {
    width: 200
  }));
};
var WatchLater = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(WatchLater, "__esModule", {
  value: true
});
var default_1 = WatchLater.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = require$$2;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"
}), "WatchLater");
default_1 = WatchLater.default = _default;
const DialogRemove = (props) => {
  const {
    t
  } = useTranslation("farms");
  const [deleteFarm, {
    loading
  }] = useMutation(DELETE_FARM, {
    update: (previousResult, newData) => {
      var _a;
      const data = previousResult.readQuery({
        query: FARMS_QUERY
      });
      if (data) {
        const {
          edges
        } = data.farms;
        const id = (_a = newData.data) == null ? void 0 : _a.deleteFarm.id;
        const index = edges.findIndex((edge) => edge.id === id);
        if (index !== -1) {
          previousResult.writeQuery({
            query: FARMS_QUERY,
            data: produce(data, (draft) => {
              const {
                farms
              } = draft;
              farms.edges.splice(index, 1);
            })
          });
        }
      }
    }
  });
  return /* @__PURE__ */ jsx(DialogSimple, { open: props.open, ...{
    loading: loading && !props.isCreating,
    ns: "farms",
    maxWidth: "sm",
    fullScreen: false,
    title: t("deleteFarm.title"),
    body: /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsx(DialogContentText, { children: t("deleteFarm.content") }) }),
    onClose: () => props.handleDialog(false),
    actions: [{
      color: "inherit",
      action: () => {
        props.handleDialog(false);
      },
      title: "close",
      disabled: loading
    }, {
      disabled: loading,
      title: "delete",
      color: "primary",
      action: () => {
        if (props.farmSelect) {
          deleteFarm({
            variables: {
              id: props.farmSelect.id
            },
            optimisticResponse: {
              __typename: "Mutation",
              deleteFarm: {
                id: props.farmSelect.id,
                __typename: "DeleteFarm"
              }
            }
          }).catch((e) => {
            console.error(e);
          });
        }
        props.handleDialog(false);
      }
    }]
  } });
};
function MenuFarm(props) {
  const {
    t
  } = useTranslation("farms");
  const [open, handleDialogRemove] = React.useState(false);
  const {
    fieldsRender,
    isCreating,
    setIsCreating
  } = useFarmFields();
  const {
    anchorMenuFarm,
    closeAnchorMenuFarm,
    farmSelect,
    handleDialog
  } = props;
  const client = useApolloClient();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Menu, { anchorEl: anchorMenuFarm, open: !!anchorMenuFarm, onClose: closeAnchorMenuFarm, children: [
      /* @__PURE__ */ jsxs(MenuItem, { onClick: () => {
        if (farmSelect) {
          if (isCreating)
            fieldsRender.saveData();
          setIsCreating(false);
          fieldsRender.onChangeFields([{
            name: "name",
            value: farmSelect.name
          }, {
            name: "files",
            value: parseFarmImages(farmSelect.images || [])
          }]);
          closeAnchorMenuFarm();
          handleDialog({
            open: true,
            loading: true,
            farm: farmSelect
          });
          client && client.query({
            query: FARM_USER,
            variables: {
              id: farmSelect.id
            }
          }).then(({
            data
          }) => {
            if (data) {
              const {
                farm
              } = data;
              fieldsRender.changeValues([{
                name: "name",
                value: farm.name
              }, {
                name: "users",
                value: farm.users.map(({
                  user,
                  id
                }) => ({
                  id,
                  user,
                  permissions: []
                }))
              }, {
                name: "files",
                value: parseFarmImages(farm.images || [])
              }]);
              handleDialog({
                loading: false
              });
            } else {
              throw new Error("No data");
            }
          }).catch(() => {
            handleDialog({
              loading: false
            });
          });
        }
      }, children: [
        /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(default_1$1, {}) }),
        /* @__PURE__ */ jsx(ListItemText, { children: t("menuItems.edit") })
      ] }),
      /* @__PURE__ */ jsxs(MenuItem, { onClick: () => {
        handleDialogRemove(true);
        closeAnchorMenuFarm();
      }, children: [
        /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(default_1$2, {}) }),
        /* @__PURE__ */ jsx(ListItemText, { children: t("menuItems.remove") })
      ] })
    ] }),
    /* @__PURE__ */ jsx(DialogRemove, { handleDialog: (open2) => handleDialogRemove(open2), isCreating, farmSelect, open })
  ] });
}
const imageSx = {
  height: 125,
  width: 220
};
const imgSx = {
  borderRadius: "10px",
  display: "block",
  margin: "auto",
  maxHeight: "100%",
  maxWidth: "100%"
};
const paperSx = {
  position: "relative",
  height: "100%"
};
const rootImagesSx = {
  paddingBottom: 1
};
const buttonLinkSx = {
  padding: (theme) => theme.spacing(2, 2, 1, 2)
};
const pendingBackgroundColorSx = (theme) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "1em"
  },
  position: "absolute",
  top: 0,
  alignItems: "center",
  backgroundColor: alpha(theme.palette.background.default, 0.6),
  bottom: "0",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  left: "0",
  right: "0"
});
const iconOfflineSx = {
  fontSize: "100px",
  color: (theme) => emphasize(theme.palette.background.default, 0.6)
};
function FarmList(props) {
  const navigate = useNavigate();
  const [anchorMenuFarm, setAnchorMenuFarm] = reactExports.useState(null);
  const [farmSelect, setFarmSelect] = reactExports.useState();
  reactExports.useEffect(() => {
    const subscriptions = [subscribeToMoreMessage(props.subscribeToMore), subscribeToDeletedMessage(props.subscribeToMore), subscribeToFarmUserCreated(props.subscribeToMore), subscribeToDeleteFarmUser(props.subscribeToMore)];
    return () => {
      subscriptions.forEach((subscription) => subscription());
    };
  }, [props.subscribeToMore]);
  const closeAnchorMenuFarm = () => {
    setAnchorMenuFarm(null);
  };
  const {
    farms: edges,
    handleDialog,
    autoPlayImages,
    breakpoints
  } = props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    edges.map((farm) => {
      const {
        name,
        id,
        images
      } = farm;
      const to = createRouteFarm({
        id
      });
      return /* @__PURE__ */ jsx(Zoom, { in: true, children: /* @__PURE__ */ jsx(Grid, { item: true, ...breakpoints, children: /* @__PURE__ */ jsxs(Paper, { elevation: 4, sx: paperSx, children: [
        /* @__PURE__ */ jsx(Grid, { container: true, children: /* @__PURE__ */ jsx(CardOptions, { label: name, onClickOptions: (e) => {
          setAnchorMenuFarm(e.currentTarget);
          setFarmSelect(farm);
          e.preventDefault();
        }, to }) }),
        /* @__PURE__ */ jsx(Box, { sx: rootImagesSx, children: /* @__PURE__ */ jsxs(Grid, { container: true, justifyContent: "center", alignItems: "center", style: {
          height: "170px",
          position: "relative",
          padding: "10px"
        }, children: [
          !!images.length && /* @__PURE__ */ jsx(ImagesStepper, { onClick: () => {
            navigate(to);
          }, ...{
            images,
            autoPlayImages,
            backCaption: true
          }, sourceImages: (path) => createAPIImageRoute(`farms/${path}`, {
            width: 900
          }) }),
          !images.length && /* @__PURE__ */ jsx(Button, { fullWidth: true, sx: buttonLinkSx, component: Link, to, children: /* @__PURE__ */ jsx(Box, { sx: imageSx, style: {
            display: "flex"
          }, children: /* @__PURE__ */ jsx(Box, { sx: imgSx, children: /* @__PURE__ */ jsx(Typography, { color: "textSecondary", align: "center", variant: "h1", children: /* @__PURE__ */ jsx(CosvaFarm, {}) }) }) }) })
        ] }) }),
        isOptimistic(id) && /* @__PURE__ */ jsx(Box, { sx: pendingBackgroundColorSx, children: /* @__PURE__ */ jsx(default_1, { sx: iconOfflineSx }) })
      ] }) }) }, id);
    }),
    /* @__PURE__ */ jsx(MenuFarm, { closeAnchorMenuFarm, handleDialog, anchorMenuFarm, farmSelect })
  ] });
}
const FarmList$1 = withTranslation("farms")(FarmList);
const AddFarmCard = (props) => {
  const {
    t
  } = useTranslation("farms");
  const form = useFarmFields();
  return /* @__PURE__ */ jsx(Card, { sx: {
    height: "100%"
  }, onClick: () => {
    form.setIsCreating(true);
    props.onClick();
  }, elevation: 4, children: /* @__PURE__ */ jsxs(CardActionArea, { sx: {
    height: "100%",
    padding: (theme) => theme.spacing(4, 0, 4, 0)
  }, children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", align: "center", children: /* @__PURE__ */ jsx(default_1$3, { fontSize: "inherit", color: "action" }) }),
    /* @__PURE__ */ jsx(Typography, { variant: "h5", align: "center", children: t("newFarm") })
  ] }) });
};
const QueryFarms = ({
  limit,
  handleDialog,
  open,
  onAdd
}) => {
  const {
    t
  } = useTranslation("farms");
  const {
    data,
    loading,
    subscribeToMore
  } = useQuery(FARMS_QUERY, {
    variables: {
      pagination: {
        limit
      }
    },
    fetchPolicy: "cache-and-network"
  });
  let edges = data && data.farms && data.farms.edges;
  if (!edges && loading)
    return /* @__PURE__ */ jsx(SkeletonFarms, {});
  edges = (edges || []).map((edge) => ({
    ...edge,
    images: orderImages(edge.images)
  }));
  const breakpoints = {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4,
    xl: 3
  };
  return /* @__PURE__ */ jsx(Fragment, { children: edges.length && /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 4, children: [
    /* @__PURE__ */ jsx(FarmList$1, { ...{
      subscribeToMore,
      farms: edges,
      autoPlayImages: !open,
      handleDialog,
      breakpoints
    } }),
    /* @__PURE__ */ jsx(Grid, { item: true, ...breakpoints, children: /* @__PURE__ */ jsx(AddFarmCard, { onClick: onAdd }) })
  ] }) || /* @__PURE__ */ jsx(Grid, { container: true, alignItems: "center", sx: {
    height: "100%"
  }, spacing: 2, children: /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
    /* @__PURE__ */ jsx(Typography, { color: "textSecondary", align: "center", variant: "h1", sx: {
      display: "flex",
      justifyContent: "center"
    }, children: /* @__PURE__ */ jsx(CosvaFarm, {}) }),
    /* @__PURE__ */ jsx(Typography, { color: "textSecondary", variant: "h5", align: "center", children: t("placeHolder") }),
    /* @__PURE__ */ jsx(Grid, { container: true, sx: {
      marginTop: 4
    }, justifyContent: "center", children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, xl: 2, children: /* @__PURE__ */ jsx(AddFarmCard, { onClick: onAdd }) }) })
  ] }) }) });
};
const Farms = () => {
  const theme = useTheme();
  const [state, setState] = reactExports.useState({
    checked: [1],
    limit: 100,
    anchorEl: null,
    open: false,
    farm: void 0,
    loading: false
  });
  const fieldsRender = useFields(() => initialState());
  const handleToggle = (value) => {
    return () => {
      const {
        checked: checkedState
      } = state;
      const currentIndex = checkedState.indexOf(value);
      const checked = [...checkedState];
      if (currentIndex === -1)
        checked.push(value);
      else
        checked.splice(currentIndex, 1);
      setState((prev) => ({
        ...prev,
        checked
      }));
    };
  };
  const {
    enteringScreen: enter,
    leavingScreen: exit
  } = theme.transitions.duration;
  const transitionDuration = {
    enter,
    exit
  };
  const {
    anchorEl,
    limit,
    open,
    farm,
    loading
  } = state;
  const onAdd = () => {
    fieldsRender.restoreLast();
    setState((prev) => ({
      ...prev,
      open: true
    }));
  };
  return /* @__PURE__ */ jsx(Box, { sx: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100%",
    padding: 1
  }, children: /* @__PURE__ */ jsxs(FarmFieldsProvider, { fieldsRender, children: [
    /* @__PURE__ */ jsxs(Grid, { container: true, children: [
      /* @__PURE__ */ jsxs(Typography, { style: {
        flex: "1"
      }, variant: "h5", gutterBottom: true, children: [
        /* @__PURE__ */ jsx(MessagesTranslate, { ns: "farms", i18nKey: "title" }),
        /* @__PURE__ */ jsx(Divider, { variant: "fullWidth" })
      ] }),
      /* @__PURE__ */ jsx(IconButton, { "aria-owns": anchorEl ? "simple-menu" : void 0, "aria-haspopup": "true", onClick: (event) => setState((prev) => ({
        ...prev,
        anchorEl: event.currentTarget
      })), sx: {
        padding: "10px"
      }, "aria-label": "Menu", size: "large", children: /* @__PURE__ */ jsx(default_1$4, {}) }),
      /* @__PURE__ */ jsx(Menu, { anchorEl, open: !!anchorEl, onClose: () => setState((prev) => ({
        ...prev,
        anchorEl: null
      })), children: [0, 1, 2, 3].map((value) => /* @__PURE__ */ jsxs(ListItem, { button: true, onClick: handleToggle(value), children: [
        /* @__PURE__ */ jsx(Checkbox, { style: {
          padding: "2px"
        }, onChange: handleToggle(value), checked: state.checked.indexOf(value) !== -1 }),
        /* @__PURE__ */ jsx(ListItemText, { primary: `Line item ${value + 1}` })
      ] }, value)) })
    ] }),
    /* @__PURE__ */ jsx(Box, { sx: {
      padding: 1,
      flex: "1"
    }, children: /* @__PURE__ */ jsx(QueryFarms, { limit, handleDialog: (newState) => setState((prev) => ({
      ...prev,
      ...newState
    })), open, onAdd }) }),
    /* @__PURE__ */ jsx(FarmFieldsConsumer, { children: ({
      setIsCreating
    }) => /* @__PURE__ */ jsx(Zoom, { in: true, timeout: transitionDuration, style: {
      transitionDelay: `${exit}ms`
    }, unmountOnExit: true, children: /* @__PURE__ */ jsx(FabAbsolute, { onClick: () => {
      setIsCreating(true);
      onAdd();
    } }) }) }),
    /* @__PURE__ */ jsx(Form, { ...{
      open,
      farm,
      loading,
      handleDialog: (newState) => {
        setState((prev) => ({
          ...prev,
          ...newState
        }));
      }
    } })
  ] }) });
};
export {
  Farms as default
};
