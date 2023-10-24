// Made October 24th, 2023
// This handles all multiplayer stuff
window.addEventListener(
    "message",
    (event) => {
      if (event.origin !== `http://127.0.0.1:5500?id="1"`) return;
        console.log(document)
      // …
    },
    false,
);

var mess = window.postMessage("Hello", `http://127.0.0.1:5500?id="1"`)
console.log(mess)