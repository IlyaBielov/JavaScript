//index.html?name=ilya&lastname=bielov

function get_params() {
  let params = location.search.substring(1).split("&");
  let object = {};
  for (let i = 0; i < params.length; i++) {
    let temp = params[i].split("=");
    object[temp[0]] = temp[1];
  }
  return object;
}

let str = get_params();
console.log(str.lastname);
console.log(str.name);

