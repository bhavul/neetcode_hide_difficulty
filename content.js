setTimeout(function() {
  var elementsToHide1 = document.getElementsByClassName("diff-col");
  for (var i = 0; i < elementsToHide1.length; i++) {
    elementsToHide1[i].style.display = "none";
  }

  var elementsToHide2 = document.querySelectorAll(".star-col");
  for (var j = 0; j < elementsToHide2.length; j++) {
    if (elementsToHide2[j].innerText.includes("Difficulty")) {
      elementsToHide2[j].style.display = "none";
    }
  }
}, 4000);