function init() {
  //add your javascript between these two lines of code
  var button = document.getElementById("entrybutton");
  var input = document.getElementById("entryinput");
  var output = document.getElementById("textoutput");

  button.addEventListener("click", function () {
    var message = input.value;

    alert("Michael Brauer: " + message);
    output.textContent = message;
  });
  //add your javascript between these two lines of code
}

window.addEventListener('load', init);
