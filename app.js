window.addEventListener("load", function () {
  console.log("Hello World! New Data Store added11111");
});

const element = document.getElementById('datastore-value');

const store = navigator.getDataStores("dummy_store");
console.log('Store',store);

store.then(function (stores) {
  stores[0].get(221).then(function (response) {
    console.log(response)
     element.innerText = response;
  });
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
