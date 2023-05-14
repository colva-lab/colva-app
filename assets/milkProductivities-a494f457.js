const title = "Productive records";
const add = "Add productive record";
const addMany = "Add many productive records";
const many = {
  "new": "New productive records"
};
const steps = {
  selectDateTime: {
    title: "Seleccionar fecha y hora"
  },
  selectDate: {
    title: "Select date"
  },
  selectTime: {
    title: "Select time"
  },
  selectBovines: {
    title: "Select bovines",
    description: "Select bovines of productive record"
  }
};
const buttons = {
  back: "Back",
  next: "Next",
  finish: "Finish"
};
const milkProductivities = {
  title,
  add,
  addMany,
  "new": "New productive record",
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
