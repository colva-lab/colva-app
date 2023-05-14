const add = "Agregar {{ type }}";
const edit = "Editar {{ type }}";
const types = {
  animals: "especie"
};
const fields = {
  name: "Nombre",
  animals: {
    category: "Selecciona una especie"
  }
};
const bovines = {
  label: "Bovinos",
  description: "Administra la información de tus vacas"
};
const horses = {
  label: "Caballos",
  description: "Administra la información de tus caballos"
};
const records = "Registros";
const graphics = "Gráficas";
const remove = "Eliminar";
const farmCategoryGroup = {
  add,
  "new": "Nueva {{ type }}",
  edit,
  types,
  fields,
  bovines,
  horses,
  records,
  graphics,
  remove
};
export {
  add,
  bovines,
  farmCategoryGroup as default,
  edit,
  fields,
  graphics,
  horses,
  records,
  remove,
  types
};
