const title = "Reproductive Controls";
const selectReproductiveStatus = "Select reproductive status";
const reproductiveState = "Reproductive state";
const date = "Date";
const notes = "Notes";
const noData = "No data";
const add = "Add reproductive controls";
const addDescription = "Select the reproductive state of your animal and enter the date of the reproductive control";
const types = {
  aborted: "Aborted",
  calved: "Calved",
  confirmed: "Confirmed",
  served: "Served"
};
const predictions = {
  calved: "Next delivery",
  confirmed: "Next checkup",
  served: "Next service"
};
const reproductiveControl = {
  title,
  selectReproductiveStatus,
  reproductiveState,
  date,
  notes,
  noData,
  add,
  addDescription,
  types,
  predictions
};
export {
  add,
  addDescription,
  date,
  reproductiveControl as default,
  noData,
  notes,
  predictions,
  reproductiveState,
  selectReproductiveStatus,
  title,
  types
};
