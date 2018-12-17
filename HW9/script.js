function Car() {
  let arr_car;

  this.get_params = function() {
    arr_car = prompt("Enter your car description", "Black|BMW").split("|");

    return arr_car;
  };

  this.show_params = function() {
    document.write(`
      <p> Color is ${arr_car[0]} </p>  
      <p> Type is ${arr_car[1]} </p> 
      `);
  };
}

let car = new Car();
car.get_params();
car.show_params();
