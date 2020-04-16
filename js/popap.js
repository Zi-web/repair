document.getElementById("main__btn").onclick = function() {showForm()};
      function showForm() {
    document.querySelector('.overlay').classList.add("show");
    document.querySelector('.popap-wrapper').classList.add("show-form");
}

document.getElementById("closeform").onclick = function() {closeForm()};
      function closeForm() {
    document.querySelector('.overlay').classList.remove("show");
    document.querySelector('.popap-wrapper').classList.remove("show-form");
}

