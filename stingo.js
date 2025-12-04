// Ensure 'titleElement' is defined somewhere in your actual code, e.g.:
// const titleElement = document.getElementById('myTitle');

let isWelcome = true;//remove the dot.

// Set up an interval that runs every 2000 milliseconds (2 seconds)
setInterval(function() {
  if (isWelcome) {
    titleElement.textContent = "EMMANUEL MACHARIA";
  } else {
    titleElement.textContent = "Wlcm 2 my Portfolio!";
  }
  // Flip the flag for the next execution
  isWelcome = !isWelcome;
}, 2000); // 1000ms delay between updates

