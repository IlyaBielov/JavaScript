let arr = new Array(10);

for (let i = 0; i < 10; i++){
  arr[i] = new Array(10);
}

for (let j = 0; j < arr.length; j++){
   for (n = 0; n < arr[j].length; n++){
     arr[j][n] = j*n;
   }
}

document.write(arr[3][5]);

