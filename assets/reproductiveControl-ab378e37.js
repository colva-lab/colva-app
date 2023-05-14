const title = "Controles reproductivos";
const selectReproductiveStatus = "Seleccionar estado reproductivo";
const reproductiveState = "Estado reproductivo";
const date = "Fecha";
const notes = "Notas";
const noData = "Sin datos";
const add = "Agregar controles reproductivos";
const addDescription = "Seleccione el estado reproductivo de su animal e ingrese la fecha del control reproductivo";
const types = {
  aborted: "Abortada",
  calved: "Parida",
  confirmed: "Confirmada",
  served: "Servida"
};
const predictions = {
  calved: "Próximo parto",
  confirmed: "Próximo chequeo",
  served: "Próximo servicio"
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
