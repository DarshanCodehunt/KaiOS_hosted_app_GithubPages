window.addEventListener("load", function () {
  console.log("Hello World!");
});

document.addEventListener("keydown", handleevent);

function handleevent(evt) {
  switch (evt.key) {
    case "ArrowLeft":
      window.open("http://www.newsplusapp.com/videos/cPQ3WLk.html?wlID=JIO");

      break;
    case "ArrowRight":
      console.log("RIGHT");
      break;
  }
}
