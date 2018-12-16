(function() {

  function getFak(num) {
    if (num <= 1) {
      return 1;
    }
    return (num * getFak(num - 1));
  }

  alert(getFak(Number(prompt())));

  function maxValue() {
    let max = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  }
  alert(maxValue(2,3, 5, 1, 3, 130));
  
}());
