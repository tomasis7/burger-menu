window.addEventListener("DOMContentLoaded", main); // motsvarar defer i html

/** This is the starting point for the program */
function main() {
  setupEventListeners();
  // startClock();
  // fetchUsersFromDatabase()
}

/** Register all events for buttons and other ui elements */
function setupEventListeners() {
  burgerMenu.onclick = toggleHeaderOpen;
  zoom.onclick = toggleZoom;
  // sätt upp fler knappar så dom klickbara.
}

/** Opens the header in fullscreen when clicked */
function toggleHeaderOpen() {
  const header = document.getElementById("header");
  header.classList.toggle("open");
}

/** Will increase the font size of all content */
function toggleZoom() {
  //........
}
