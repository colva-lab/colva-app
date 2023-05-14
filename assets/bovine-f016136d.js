const title = "Bovino";
const add = "Agregar bovino";
const newBovine = "Nuevo bovino";
const editBovine = "Editar bovino";
const name = "Nombre";
const image = "Imagen";
const plaque = "Placa";
const breed = "Raza";
const developmentStage = "Etapa de desarrollo";
const dateBirth = "Fecha de nacimiento";
const noData = "No tienes bovinos registradas";
const remove = "Eliminar";
const purposes = "Propósitos";
const purposeTypes = {
  milk: "Leche",
  meat: "Carne",
  genetics: "Genética"
};
const progenitors = "Progenitores";
const developmentStages = {
  veal: "Ternera",
  veal_male: "Ternero",
  veal_female: "Ternera",
  heifer: "Novilla",
  heifer_male: "Novillo",
  heifer_female: "Novilla",
  adult: "Bovino",
  adult_male: "Toro",
  adult_female: "Vaca",
  weaned: "Destetado",
  weaned_male: "Destetado",
  weaned_female: "Destetada"
};
const filterButton = "Filtrar";
const filterTitle = "Filtrar bovinos";
const filter = {
  none: "Ninguno",
  gender: "Filtrar por género",
  breeds: "Filtrar por raza",
  purposes: "Filtrar por propósitos",
  developmentStage: "Filtrar por etapas de desarrollo"
};
const selectBovine = "Selecciona un bovino";
const selectBovine_male = "Selecciona un toro";
const selectBovine_female = "Selecciona una vaca";
const errors = {
  create: "Error al crear un bovino",
  update: "Error al actualizar un bovino"
};
const tooltips = {
  edit: "Editar bovino",
  "delete": "Eliminar bovino"
};
const dialogs = {
  deleteBovine: {
    title: "Eliminar bovino",
    message: "¿Estás seguro de eliminar este bovino?"
  }
};
const bovine = {
  title,
  add,
  newBovine,
  editBovine,
  name,
  image,
  plaque,
  breed,
  developmentStage,
  dateBirth,
  noData,
  remove,
  purposes,
  purposeTypes,
  progenitors,
  developmentStages,
  filterButton,
  filterTitle,
  filter,
  selectBovine,
  selectBovine_male,
  selectBovine_female,
  errors,
  tooltips,
  dialogs
};
export {
  add,
  breed,
  dateBirth,
  bovine as default,
  developmentStage,
  developmentStages,
  dialogs,
  editBovine,
  errors,
  filter,
  filterButton,
  filterTitle,
  image,
  name,
  newBovine,
  noData,
  plaque,
  progenitors,
  purposeTypes,
  purposes,
  remove,
  selectBovine,
  selectBovine_female,
  selectBovine_male,
  title,
  tooltips
};
