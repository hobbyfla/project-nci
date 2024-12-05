/*Author ailsapm NCI 2024*/
//function to reveal or hide the div containing daily specials menu
function specialMenu() {
    var x = document.getElementById("specials");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }