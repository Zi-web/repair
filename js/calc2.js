"use strict";var slider=document.getElementById("ageInputId"),output=document.getElementById("ageOutputId");output.innerHTML=slider.value,slider.oninput=function(){output.innerHTML=this.value};