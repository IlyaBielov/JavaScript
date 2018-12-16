let str;
do {
  str = prompt("Ведите строку");

} while (!str || str == "" || str.indexOf("|") == -1);

if (str.lastIndexOf("|") == str.length -1) {
  str = str.substring(0, str.lastIndexOf("|"));
}

str = str.split("|");

for (let i = 0; i < str.length; i++) {
  document.write(`${str[i].toUpperCase()} <br>`);
}

document.write('----------------- <br>');

let string = `qwerty`;
string = string.split('').reverse().join('');
document.write(string);
