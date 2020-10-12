var shareBar = document.querySelector(".share-bar");
var shareBarContent = document.createElement("div");
var shareSpan = document.createElement("span");
var shareSocial = document.createElement("img");
var social1 = shareSocial.setAttribute("src", "images/icon-facebook.svg");
var shareSpanContent = shareSpan.textContent = "Share";
var shareIcon = document.querySelector(".share-icon");


shareIcon.addEventListener("click", function(){
  shareBar.classList.toggle("click");



});
