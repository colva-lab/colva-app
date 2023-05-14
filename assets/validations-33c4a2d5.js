const accepted = "The {{ attribute }} field must be accepted";
const active_url = "The {{ attribute }} field is not a valid URL";
const after = "The {{ attribute } field } must be a date after {{ date }}";
const after_or_equal = "The {{ attribute }} field must be a date later or equal to {{ date }}";
const alpha = "The {{ attribute }} field only may contain letters";
const alpha_small = "Only letters";
const alpha_dash = "The field {{ attribute }} can only contain letters, numbers and hyphens (az, 0-9, -_)";
const alpha_num = "The field {{ attribute } } can only contain letters and numbers";
const array = "The {{ attribute }} field must be an array";
const before = "The {{ attribute }} field must be a date before {{ date }}";
const before_or_equal = "The {{ attribute }} field must be a date before or equal to {{ date }}";
const between = {
  array: "The field {{ attribute }} must contain between {{ min }} and {{ max }} elements",
  file: "The {{ attribute }} file must weigh between {{ min }} and {{ max }} kilobytes",
  numeric: "The {{ attribute }} field must be a value between {{ min }} and {{ max }}",
  string: "The {{ attribute }} field must contain between {{ min }} and {{ max }} characters"
};
const boolean = "The {{ attribute }} field must be true or false";
const confirmed = "The confirmation field of {{ attribute}} does not match";
const custom = {
  "attribute-name": {
    "rule-name": "custom-message"
  }
};
const date = "The {{ attribute }} field does not correspond to a valid date";
const date_format = "The {{ attribute }} field does not correspond to the date format {{ format }}";
const different = "The {{ attribute }} and {{ other }} fields must be different";
const digits = "The {{ attribute }} field must be a number of: digits digits";
const digits_between = "The {{ attribute }} field must contain between {{ min }} and {{max}} digits";
const dimensions = "The {{ attribute }} field has invalid dimensions";
const distinct = "The {{ attribute }} field has a duplicate value";
const email = "The {{ attribute }} field must be a valid email address";
const exists = "The selected {{ attribute }} field does not exist";
const file = "The field {{ attribute }} must be a file";
const filled = "The {{ attribute }} field must have some value";
const image = "The {{ attribute }} field must be an image";
const in_array = "The {{ attribute }} field does not exist in {{ other }}";
const integer = "The {{ attribute }} field must be an integer";
const ip = "The {{ attribute }} field must be a valid IP address";
const ipv4 = "The field {{ attribute}} must be a valid IPv4 address";
const ipv6 = "The {{ attribute }} field must be a valid IPv6 address";
const isEmpty = "This {{ attribute }} field can not be empty";
const json = "The {{ attribute }} field must be a string of valid JSON text";
const max = {
  array: "The {{ attribute }} field must not contain more than {{ max }}",
  file: "The {{ attribute }} file must not weigh more than  {{ max }} kilobytes",
  numeric: "The {{ attribute }} field must not be greater than {{ max }}",
  string: "The {{ attribute }} field must not contain more than {{ max }} characters",
  date: "The {{ attribute }} field must not have a date greater than {{ max }}"
};
const mimes = "The field {{ attribute }} must be a file of type {{values}}";
const mimetypes = "The field {{ attribute }} must be a file of type {{values}}";
const min = {
  array: "The {{ attribute }} field must contain at least {{ min }} elements",
  file: "The {{ attribute }} file must weigh at least {{ min }} kilobytes",
  numeric: "The field {{ attribute }} must have at least  {{ min }}",
  string: "The {{ attribute }} field must contain at least {{ min }} characters",
  date: "The {{ attribute }} field must not have a date less than {{ min }}"
};
const not_in = "The selected {{ attribute }} field is invalid";
const not_regex = "The field format {{attribute}} is invalid";
const numeric = "The {{ attribute }} field must be a number";
const present = "The {{ attribute }} field must be present";
const regex = "The format of the {{ attribute }} field is invalid";
const required_small = "Required";
const required = "The {{ attribute }} field is required";
const required_if = "The field {{ attribute }} is mandatory when the field {{ other }} is {{value}}";
const required_unless = "The {{ attribute }} field is required unless {{ other }} is in {{values}}";
const required_with = "The {{ attribute }} field is required when {{values}} ​​is present";
const required_with_all = "The field {{ attribute }} is mandatory when {{values}} ​​is present";
const required_without = "The field {{ attribute }} is mandatory when {{values}} ​​is not present";
const required_without_all = "The field {{ attribute }} is mandatory when none of the fields {{values}} ​​is present";
const same = "The fields {{ attribute }} and {{ other }} must match";
const size = {
  array: "The {{ attribute }} field must contain {{ size }} elements",
  file: "The file {{ attribute }} must weigh {{ size }} kilobytes",
  numeric: "The {{ attribute }} field must be {{ size }}",
  string: "The {{ attribute }} field must contain {{ size }} characters"
};
const string = "The {{ attribute }} field must be a string of characters";
const timezone = "The {{ attribute }} field must contain a valid zone";
const unique = "The value of the {{ attribute }} field is already in use";
const uploaded = "Field {{ attribute }} failed to upload";
const url = "The format of the {{ attribute }} field is invalid";
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
  "in": "The {{ attribute }} field is invalid",
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
  required_small,
  required,
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
