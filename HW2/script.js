let x = "string";
let result;
let type = typeof(x);

if (type == 'number') {
  result = ("The variable is number - " + (++x));
} 
else if(type == 'string') {
  result = ("The variable is string - " + '"' +x+ '"');
} 
else { 
  result = ("The variable has nothing");
}

document.write("<p>" +result+ "</p><br>");

let date = 1;
let left_date = 31 - date;
let len = String(left_date);
    len = len[len.length - 1];

if (left_date > 4 && left_date < 21) {
  left_date = left_date + " дней";
} 
else if (len == 1) {
  left_date = left_date + " день";
} 
else if (len == 2 || len == 3 || len == 4) {
  left_date = left_date + " дня";
}
else {
  left_date = left_date + " дней";
}

document.write("<p>" +left_date+ "</p>");
