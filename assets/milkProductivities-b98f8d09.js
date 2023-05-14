const title = "Registros productivos";
const add = "Agregar registro productivo";
const addMany = "Agregar varios registros productivos";
const many = {
  "new": "Agregar registros productivos"
};
const steps = {
  selectDateTime: {
    title: "Seleccionar fecha y hora"
  },
  selectDate: {
    title: "Seleccionar fecha"
  },
  selectTime: {
    title: "Seleccionar hora"
  },
  selectBovines: {
    title: "Seleccionar bovinos",
    description: "Selecciona los bovinos a los que se les realizó el registro productivo"
  }
};
const buttons = {
  back: "Volver",
  next: "Siguiente",
  finish: "Finalizar"
};
const milkProductivities = {
  title,
  add,
  addMany,
  "new": "Nuevo registro productivo",
  many,
  steps,
  buttons
};
export {
  add,
  addMany,
  buttons,
  milkProductivities as default,
  many,
  steps,
  title
};
