var parallax = document.getElementsByClassName("parallax");
var scroll = window.scrollY;
var title = document.getElementsByClassName("inner-text")[0];

function init() {
  update();
}

function pos(obj) {
  return obj.getBoundingClientRect();
}

function show(obj, scrollCurr, showHideAt) {
  if (obj.classList.contains("toggleHidden")) {
    if (scrollCurr > showHideAt) {
      obj.classList.remove("hidden");
    } else {
      obj.classList.add("hidden");
    }
  }
}

function move(obj, ammount, direction) {
  switch (direction) {
    case "U": //up
      obj.style = `transform:translateY(${-ammount}px)`;
      break;
    case "D": //down
      obj.style = `transform:translateY(${ammount}px)`;
      break;
    case "L": //left
      obj.style = `transform:translateX(${-ammount}px)`;
      break;
    case "R": //right
      obj.style = `transform:translateX(${ammount}px)`;
      break;
    default:
  }
}

function update() {
  var scroll = this.scrollY;
  for (var i = 0; i < parallax.length; i++) {
    move(
      parallax[i],
      (scroll * parallax[i].getAttribute("plx-speed")) / 10,
      parallax[i].getAttribute("plx-direction")
    );
    show(parallax[i], scroll, parallax[i].getAttribute("showHideAt"));
  }
  if (scroll > 1250) {
    title.classList.remove("parallax");
  } else {
    if (!title.classList.contains("parallax")) {
      title.classList.add("parallax");
    }
  }
}

window.addEventListener("scroll", function(event) {
  update();
});

init();
