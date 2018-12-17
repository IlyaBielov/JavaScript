let random = (Math.random()*100).toFixed();
document.write(random);

let numb = [1,2,3,4,6];
for(let i = 0; i < numb.length; i++) {
  document.write("<br>" + (Math.tan(Math.PI/numb[i])));
};
