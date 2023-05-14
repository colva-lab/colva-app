const selectDate = "Select a date";
const milkProduction = "Milk production";
const showGraph = "Show graph";
const hideGraph = "Hide graph";
const showTable = "Show table";
const hideTable = "Hide table";
const date = "Date";
const liters = "Liters";
const observation = "Observation";
const selectBovine = "Bovine";
const noData = "No data";
const add = "Add milk production";
const formDescription = "Select the date on which you measured your animal's milk and add the amount of milk produced in liters";
const dateProductionContent = "Enter the date and time of milk production";
const addDateProduction = {
  title: "Add production date",
  success: "Added successfully",
  error: "Could not save"
};
const edit = "Edit milk production";
const editDateProduction = {
  title: "Edit production date",
  success: "It was successfully edited",
  error: "Could not edit"
};
const actions = "Actions";
const messages = {
  create: {
    error: "Could not save",
    success: "Added successfully"
  },
  edit: {
    error: "Could not edit",
    success: "It was successfully edited"
  }
};
const milkProductivity = {
  selectDate,
  milkProduction,
  showGraph,
  hideGraph,
  showTable,
  hideTable,
  date,
  liters,
  observation,
  selectBovine,
  noData,
  add,
  formDescription,
  dateProductionContent,
  addDateProduction,
  edit,
  editDateProduction,
  "delete": {
    title: "Delete milk production",
    content: "Do you really want to eliminate the milk production?"
  },
  actions,
  messages
};
export {
  actions,
  add,
  addDateProduction,
  date,
  dateProductionContent,
  milkProductivity as default,
  edit,
  editDateProduction,
  formDescription,
  hideGraph,
  hideTable,
  liters,
  messages,
  milkProduction,
  noData,
  observation,
  selectBovine,
  selectDate,
  showGraph,
  showTable
};
