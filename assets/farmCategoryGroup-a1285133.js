const add = "Add {{ type }}";
const edit = "Edit {{ type }}";
const types = {
  animals: "species"
};
const fields = {
  name: "Name",
  animals: {
    category: "Select a species"
  }
};
const bovines = {
  label: "Bovines",
  description: "Manage your bovines information"
};
const horses = {
  label: "Horses",
  description: "Manage your horses information"
};
const selectCategory = "Select a category";
const records = "Records";
const graphics = "Graphics";
const remove = "Remove";
const farmCategoryGroup = {
  add,
  "new": "New {{ type }}",
  edit,
  types,
  fields,
  bovines,
  horses,
  selectCategory,
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
  selectCategory,
  types
};
