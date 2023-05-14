import { cT as writeBovine, aD as useMutation, dN as BOVINE_MILK_PRODUCTIVITIES, a5 as produce, dV as CreateBovineMilkProductivityDocument, dW as EditBovineMilkProductivityDocument, dX as DeleteBovineMilkProductivityDocument } from "./index-60a9ad09.js";
const CREATE_BOVINE_MILK_PRODUCTIVITY = CreateBovineMilkProductivityDocument;
const EDIT_BOVINE_MILK_PRODUCTIVITY = EditBovineMilkProductivityDocument;
function writeBovineMilkProductivities({
  proxy,
  variables,
  recipe
}) {
  try {
    let data = proxy.readQuery({
      query: BOVINE_MILK_PRODUCTIVITIES,
      variables
    });
    if (!data)
      return;
    data = produce(data, recipe);
    proxy.writeQuery({
      query: BOVINE_MILK_PRODUCTIVITIES,
      data,
      variables
    });
  } catch (error) {
  }
}
const mutationUpdaterCreateBovineMilkProductivity = ({
  variables
}) => (proxy, newData) => {
  const {
    createBovineMilkProductivity
  } = {
    ...newData.data
  };
  if (createBovineMilkProductivity) {
    const writersArgs = {
      proxy,
      variables
    };
    writeBovineMilkProductivities({
      ...writersArgs,
      recipe: (draft) => {
        draft.bovineMilkProductivities.edges.unshift(createBovineMilkProductivity);
      }
    });
    const bovine = variables.bovine;
    if (bovine)
      writeBovine({
        proxy,
        variables: {
          id: bovine
        },
        recipe: (draft) => {
          draft.bovine.milkProductivities.unshift(createBovineMilkProductivity);
        }
      });
  }
};
const mutationUpdaterEditBovineMilkProductivity = ({
  variables
}) => (proxy, newData) => {
  const {
    editBovineMilkProductivity
  } = {
    ...newData.data
  };
  if (editBovineMilkProductivity) {
    const writersArgs = {
      proxy,
      variables
    };
    writeBovineMilkProductivities({
      ...writersArgs,
      recipe: (draft) => {
        const {
          edges
        } = draft.bovineMilkProductivities;
        edges.forEach((edge, index) => {
          if (edge.id === editBovineMilkProductivity.id)
            edges[index] = editBovineMilkProductivity;
        });
      }
    });
    const bovine = variables.bovine;
    if (bovine)
      writeBovine({
        proxy,
        variables: {
          id: bovine
        },
        recipe: (draft) => {
          const milkProductivities = draft.bovine.milkProductivities;
          milkProductivities.forEach((milkProductivity, index) => {
            if (milkProductivity.id === editBovineMilkProductivity.id)
              milkProductivities[index] = editBovineMilkProductivity;
          });
        }
      });
  }
};
const useCreateBovineMilkProductivity = ({
  readQueryVariables
}) => {
  return useMutation(CREATE_BOVINE_MILK_PRODUCTIVITY, {
    update: mutationUpdaterCreateBovineMilkProductivity({
      variables: readQueryVariables
    })
  });
};
const useEditBovineMilkProductivity = ({
  readQueryVariables
}) => {
  return useMutation(EDIT_BOVINE_MILK_PRODUCTIVITY, {
    update: mutationUpdaterEditBovineMilkProductivity({
      variables: readQueryVariables
    })
  });
};
const DELETE_BOVINE_MILK_PRODUCTIVITY = DeleteBovineMilkProductivityDocument;
const mutationUpdaterDeleteBovineMilkProductivity = ({
  queryVariables,
  variables
}) => (proxy) => {
  if (variables) {
    const writersArgs = {
      proxy,
      variables: queryVariables
    };
    writeBovineMilkProductivities({
      ...writersArgs,
      recipe: (draft) => {
        draft.bovineMilkProductivities.edges = draft.bovineMilkProductivities.edges.filter(({
          id
        }) => id !== variables.id);
      }
    });
    writeBovine({
      proxy,
      variables: variables && {
        id: variables.bovine
      },
      recipe: (draft) => {
        draft.bovine.milkProductivities = draft.bovine.milkProductivities.filter(({
          id
        }) => id !== variables.id);
      }
    });
  }
};
const useDeleteBovineMilkProductivity = ({
  queryVariables
}) => {
  return useMutation(DELETE_BOVINE_MILK_PRODUCTIVITY, {
    update: (cache, result, options) => {
      const {
        data
      } = result;
      if (queryVariables && data && options.variables)
        mutationUpdaterDeleteBovineMilkProductivity({
          queryVariables,
          variables: options.variables
        })(cache, result);
    }
  });
};
export {
  CREATE_BOVINE_MILK_PRODUCTIVITY as C,
  useEditBovineMilkProductivity as a,
  useCreateBovineMilkProductivity as b,
  mutationUpdaterCreateBovineMilkProductivity as c,
  mutationUpdaterDeleteBovineMilkProductivity as m,
  useDeleteBovineMilkProductivity as u
};
