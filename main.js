window.addEventListener("DOMContentLoaded", main); // motsvarar defer i html

// Här kan vi lägga till några globala variabler.
// let data = ????;

/** This is the starting point for the program */
function main() {
  console.log("Start of the program");
  button.onclick = changeBackgroundColor;

  const color = getRandomColor();
  console.log(color);
}

/** Returns a random color as hex-code */
function getRandomColor() {
  return "red";
}

function changeBackgroundColor() {
  console.log("Change background....");
}
