let x = 1024;

while (x > 0) {
  x = x/2;
  if (x%2 != 0) {
    continue;
  } else if (x == 0){
    break;
  }
  document.write(`${x} <br>`);
}

document.write(`<table border=1px>`);
for (let i = 1; i < 10; i++) {
  document.write(`<tr>`);

  for (let j = 1; j < 10; j++) {
    if (j == 1 || i == 1) {
      color_td = '#ccc';
    } else {
      color_td = '#fff';
    }
    document.write(`<td style=background-color:${color_td};width:30px;height:30px;text-align:center>${i * j}</td>`);
  }

  document.write(`</tr>`);
}
document.write(`</table>`);
