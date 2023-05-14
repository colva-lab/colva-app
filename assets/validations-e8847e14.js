const accepted = "Este campo {{ attribute }} debe ser aceptado";
const active_url = "Este campo {{ attribute }} no es una URL válida";
const after = "Este campo {{ attribute }} debe ser una fecha posterior a {{ date }}";
const after_or_equal = "Este campo {{ attribute }} debe ser una fecha posterior o igual a {{ date }}";
const alpha = "Este campo {{ attribute }} sólo puede contener letras";
const alpha_small = "Solo letras";
const alpha_dash = "Este campo {{ attribute }} sólo puede contener letras, números y guiones (a-z, 0-9, -_)";
const alpha_num = "Este campo {{ attribute }} sólo puede contener letras y números";
const array = "Este campo {{ attribute }} debe ser un array";
const before = "Este campo {{ attribute }} debe ser una fecha anterior a {{ date }}";
const before_or_equal = "Este campo {{ attribute }} debe ser una fecha anterior o igual a {{ date }}";
const between = {
  array: "Este campo {{ attribute }} debe contener entre {{ min }} y {{ max }} elementos",
  file: "El archivo {{ attribute }} debe pesar entre {{ min }} y {{ max }} kilobytes",
  numeric: "Este campo {{ attribute }} debe ser un valor entre {{ min }} y {{ max }}",
  string: "Este campo {{ attribute }} debe contener entre {{ min }} y {{ max }} caracteres"
};
const boolean = "Este campo {{ attribute }} debe ser verdadero o falso";
const confirmed = "Este campo confirmación de {{ attribute }} no coincide";
const custom = {
  "attribute-name": {
    "rule-name": "custom-message"
  }
};
const date = "Este campo {{ attribute }} no corresponde con una fecha válida";
const date_format = "Este campo {{ attribute }} no corresponde con el formato de fecha {{ format }}";
const different = "Los campos {{ attribute }} y {{ other }} deben ser diferentes";
const digits = "Este campo {{ attribute }} debe ser un número de {{ digits }} dígitos";
const digits_between = "Este campo {{ attribute }} debe contener entre {{ min }} y {{ max }} dígitos";
const dimensions = "Este campo {{ attribute }} tiene dimensiones inválidas";
const distinct = "Este campo {{ attribute }} tiene un valor duplicado";
const email = "Este campo {{ attribute }} debe ser una dirección de correo válida";
const exists = "Este campo {{ attribute }} seleccionado no existe";
const file = "Este campo {{ attribute }} debe ser un archivo";
const filled = "Este campo {{ attribute }} debe tener algún valor";
const image = "Este campo {{ attribute }} debe ser una imagen";
const in_array = "Este campo {{ attribute }} no existe en {{ other }}";
const integer = "Este campo {{ attribute }} debe ser un número entero";
const ip = "Este campo {{ attribute }} debe ser una dirección IP válida";
const ipv4 = "Este campo {{ attribute }} debe ser una dirección IPv4 válida";
const ipv6 = "Este campo {{ attribute }} debe ser una dirección IPv6 válida";
const isEmpty = "Este campo {{ attribute }} no puede estar vacio";
const json = "Este campo {{ attribute }} debe ser una cadena de texto JSON válida";
const max = {
  array: "Este campo {{ attribute }} no debe contener más de {{ max }}",
  file: "El archivo {{ attribute }} no debe pesar más de {{ max }} kilobytes",
  numeric: "Este campo {{ attribute }} no debe ser mayor a {{ max }}",
  string: "Este campo {{ attribute }} no debe contener más de {{ max }} caracteres",
  date: "Este campo {{ attribute }} no debe tener una fecha superior a {{ max }}"
};
const mimes = "Este campo {{ attribute }} debe ser un archivo de tipo {{ values }}";
const mimetypes = "Este campo {{ attribute }} debe ser un archivo de tipo {{ values }}";
const min = {
  array: "Este campo {{ attribute }} debe contener al menos {{ min }} elementos",
  file: "El archivo {{ attribute }} debe pesar al menos {{ min }} kilobytes",
  numeric: "Este campo {{ attribute }} no puede ser menor que {{ min }}",
  string: "Este campo {{ attribute }} debe contener al menos {{ min }} caracteres",
  date: "Este campo {{ attribute }} no debe tener una fecha inferior a {{ min }}"
};
const not_in = "Este campo {{ attribute }} seleccionado es inválido";
const not_regex = "El formato de este campo {{ attribute }} es inválido";
const numeric = "Este campo {{ attribute }} debe ser un número";
const present = "Este campo {{ attribute }} debe estar presente";
const regex = "El formato de este campo {{ attribute }} es inválido";
const required = "Este campo {{attribute}} es obligatorio";
const required_small = "Obligatorio";
const required_if = "Este campo {{ attribute }} es obligatorio cuando Este campo {{ other }} es {{ value }}";
const required_unless = "Este campo {{ attribute }} es requerido a menos que {{ other }} se encuentre en {{ values }}";
const required_with = "Este campo {{ attribute }} es obligatorio cuando {{ values }} está presente";
const required_with_all = "Este campo {{ attribute }} es obligatorio cuando {{ values }} está presente";
const required_without = "Este campo {{ attribute }} es obligatorio cuando {{ values }} no está presente";
const required_without_all = "Este campo {{ attribute }} es obligatorio cuando ninguno de los campos {{ values }} está presente";
const same = "Los campos {{ attribute }} y {{ other }} deben coincidir";
const size = {
  array: "Este campo {{ attribute }} debe contener {{ size }} elementos",
  file: "El archivo {{ attribute }} debe pesar {{ size }} kilobytes",
  numeric: "Este campo {{ attribute }} debe ser {{ size }}",
  string: "Este campo {{ attribute }} debe contener {{ size }} caracteres"
};
const string = "Este campo {{ attribute }} debe ser una cadena de caracteres";
const timezone = "Este campo {{ attribute }} debe contener una zona válida";
const unique = "El valor de este campo {{ attribute }} ya está en uso";
const uploaded = "Este campo {{ attribute }} falló al subir";
const url = "El formato de este campo {{ attribute }} es inválido";
const validations = {
  accepted,
  active_url,
  after,
  after_or_equal,
  alpha,
  alpha_small,
  alpha_dash,
  alpha_num,
  array,
  before,
  before_or_equal,
  between,
  boolean,
  confirmed,
  custom,
  date,
  date_format,
  different,
  digits,
  digits_between,
  dimensions,
  distinct,
  email,
  exists,
  file,
  filled,
  image,
  "in": "Este campo {{ attribute }} es inválido",
  in_array,
  integer,
  ip,
  ipv4,
  ipv6,
  isEmpty,
  json,
  max,
  mimes,
  mimetypes,
  min,
  not_in,
  not_regex,
  numeric,
  present,
  regex,
  required,
  required_small,
  required_if,
  required_unless,
  required_with,
  required_with_all,
  required_without,
  required_without_all,
  same,
  size,
  string,
  timezone,
  unique,
  uploaded,
  url
};
export {
  accepted,
  active_url,
  after,
  after_or_equal,
  alpha,
  alpha_dash,
  alpha_num,
  alpha_small,
  array,
  before,
  before_or_equal,
  between,
  boolean,
  confirmed,
  custom,
  date,
  date_format,
  validations as default,
  different,
  digits,
  digits_between,
  dimensions,
  distinct,
  email,
  exists,
  file,
  filled,
  image,
  in_array,
  integer,
  ip,
  ipv4,
  ipv6,
  isEmpty,
  json,
  max,
  mimes,
  mimetypes,
  min,
  not_in,
  not_regex,
  numeric,
  present,
  regex,
  required,
  required_if,
  required_small,
  required_unless,
  required_with,
  required_with_all,
  required_without,
  required_without_all,
  same,
  size,
  string,
  timezone,
  unique,
  uploaded,
  url
};
