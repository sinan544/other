let first = document.getElementById('grt');
let second = document.getElementById('introd');
let third = document.getElementById('nam');
let forth = document.getElementById('ssss');
function openNav() {
  document.getElementById("main").style.width = "50%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("main").style.width = "0%";
}
var coll = document.getElementsByClassName("collapsible");
var btn = document.getElementById("btn");
var i;

for (i = 0; i > coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.btn.classList.toggle("active");

    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

setTimeout(() => {
  first.style.opacity = 100;
}, 1000);
setTimeout(() => {
  second.style.opacity = 100;
}, 1500);
setTimeout(() => {
  third.style.opacity = 100;
}, 2000);
setTimeout(() => {
  forth.style.opacity = 100;
}, 2500);