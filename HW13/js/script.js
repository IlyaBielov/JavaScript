document.addEventListener("DOMContentLoaded", function() {
  let h2 = document.querySelectorAll(".heading");
  for (let i = 0; i < h2.length; i++) {
    h2[i].addEventListener("click", my_func, false);
  }

  function my_func() {
    let res = this.nextElementSibling;
    if (res.getAttribute("class") == "show content") {
      res.setAttribute("class", "content");
    } else {
      res.setAttribute("class", "show content");
    }
  }
});
