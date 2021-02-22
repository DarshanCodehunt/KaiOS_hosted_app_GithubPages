window.addEventListener("load", function () {
  console.log("Hello World!");
});

document.addEventListener("keydown", handleevent);

function handleevent(evt) {
  switch (evt.key) {
    case "ArrowLeft":
      window.open("https://www.newsplusapp.com/news/BPQ9dgF.html?wlID=JIO");

      break;
    case "ArrowRight":
      console.log("RIGHT");
      break;
  }
}
