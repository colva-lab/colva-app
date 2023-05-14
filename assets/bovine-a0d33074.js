const title = "Bovine";
const add = "Add bovine";
const newBovine = "New Bovine";
const editBovine = "Edit Bovine";
const name = "Name";
const image = "Image";
const plaque = "Plaque";
const breed = "Breed";
const developmentStage = "Development stage";
const dateBirth = "Date of birth";
const noData = "You don't have registered bovines";
const remove = "Remove";
const purposes = "Purposes";
const purposeTypes = {
  milk: "Milk",
  meat: "Meat",
  genetics: "Genetics"
};
const progenitors = "Progenitors";
const developmentStages = {
  veal: "Veal",
  veal_male: "Calf",
  weaned: "Weaned",
  heifer: "Heifer",
  adult: "Cow",
  adult_male: "Bull"
};
const filterButton = "Filter";
const filterTitle = "Filter bovines";
const filter = {
  none: "None",
  gender: "Filter by genre",
  breeds: "Filter by breeds",
  purposes: "Filter by purposes",
  developmentStage: "Filter by development stages"
};
const selectBovine = "Select a bovine";
const selectBovine_male = "Select a bull";
const selectBovine_female = "Select a cow";
const errors = {
  create: "Error creating bovine",
  update: "Error updating bovine"
};
const tooltips = {
  edit: "Edit bovine",
  "delete": "Remove bovine"
};
const dialogs = {
  deleteBovine: {
    title: "Remove bovine",
    message: "Are you sure you want to remove this bovine?"
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
