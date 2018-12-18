//only Firefox
let result, name, lastname;

function get_data() {
  result = prompt("Enter name and lastname");
  name = result.substring(0, result.indexOf(" "));
  lastname = result.substring(result.indexOf(" ") + 1);

  frames.first.get_name(name);
  frames.second.get_lastname(lastname);
}
