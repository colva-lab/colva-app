const selectDate = "Selecciona una fecha";
const milkProduction = "Producción de leche";
const showGraph = "Mostrar gráfico";
const hideGraph = "Ocultar gráfico";
const showTable = "Mostrar tabla";
const hideTable = "Ocultar tabla";
const date = "Fecha";
const liters = "Litros";
const observation = "Observación";
const selectBovine = "Bovino";
const noData = "Sin datos";
const add = "Agregar producción de leche";
const formDescription = "Seleccione la fecha en la que midio la leche de su animal y agregue la cantidad de leche producida en litros";
const dateProductionContent = "Ingrese la fecha y hora de la producción de leche";
const addDateProduction = {
  title: "Agregar fecha de producción",
  success: "Se agregó correctamente",
  error: "No se pudo guardar"
};
const edit = "Editar producción de leche";
const editDateProduction = {
  title: "Editar fecha de producción",
  success: "Se editó correctamente",
  error: "No se pudo editar"
};
const actions = "Acciones";
const messages = {
  create: {
    error: "No se pudo guardar",
    success: "Se agregó correctamente"
  },
  edit: {
    error: "No se pudo editar",
    success: "Se editó correctamente"
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
    title: "Eliminar la producción de leche",
    content: "¿Realmente quieres eliminar la producción de leche?"
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
