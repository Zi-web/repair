"use strict";

/*function update() {
  let inp = document.getElementById("ageInputId");
  let out = document.getElementById("ageOutputId");
  out.textContent = inp.value;
  out.style.left = (inp.value - inp.min) / (inp.max - inp.min) * 100 + "%";
}

document.getElementById("ageInputId").addEventListener('input', update);
update();

*/
var slider = document.getElementById("ageInputId");
var output = document.getElementById("ageOutputId");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}