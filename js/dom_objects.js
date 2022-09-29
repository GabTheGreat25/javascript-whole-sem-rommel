function textChange() {
  // var inElement = document.getElementById("textIn");
  var inElement = $("#textIn").val(); //already gets the value
  // var outElements = document.getElementsByTagName("p");
  var outElements = $("#p");
  console.log(outElements);
  var headingElements = document.getElementsByClassName("heading");
  for (var i = 0; i < outElements.length; i++) {
    var outItem = outElements[i];
    headingElements[i].innerHTML = "Updating " + (i + 1) + " to " + inElement;
    outItem.html(inElement);
  }
}
