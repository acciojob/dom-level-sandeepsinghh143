//your JS code here. If required.
var element = document.getElementById("level");
  var level = 0;

  while (element && element !== document.body) {
    element = element.parentNode;
    level++;
  }

  return level;
alert("The level of the element is:"+level);