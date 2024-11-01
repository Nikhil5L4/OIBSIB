


var degree = document.querySelector(".input");
var selected = document.querySelector("#type");
var result = document.querySelector("#result"); 


document.querySelector("button").addEventListener("click", () => {
  
  let degreeValue = parseFloat(degree.value);

  if (isNaN(degreeValue)) {
    result.value = "Please enter a valid number";
    return;
  }

  if (selected.value == "Farenheit") {
    result.value = (degreeValue * 1.8 + 32).toFixed(2) + " °F";
  } else {
    result.value = ((degreeValue - 32) * 5/9).toFixed(2) + " °C";
  }
});
