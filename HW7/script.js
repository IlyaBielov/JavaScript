let date = new Date(2019,0,1);
let date_now = new Date();
let date_to = parseInt((date - date_now) / (1000*60*60*24));
alert(date_to);


function clock() {
  let now  = new Date(); 
  let hours = now.getHours(); 
  let minutes = now.getMinutes();
  let seconds =  now.getSeconds();
  let result = hours + ":" + minutes + ":" + seconds;

  document.getElementById("date").innerHTML = result;
  setTimeout("clock()",1000);
}

clock();
