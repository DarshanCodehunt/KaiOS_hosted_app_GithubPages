window.addEventListener("load", function () {
  console.log("Hello World!");
});

document.addEventListener("keydown", handleevent);

function handleevent(evt) {
  switch (evt.key) {
    case "ArrowLeft":
      console.log("LEFT");

      break;
    case "ArrowRight":
      console.log("RIGHT");
      break;
  }
}
