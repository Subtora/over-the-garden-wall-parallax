var parallax = document.getElementsByClassName("parallax");
var scroll = window.scrollY;

function init() {
  update();
}

function moveY(obj, ammount, direction) {
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
    moveY(
      parallax[i],
      (scroll * parallax[i].getAttribute("plx-speed")) / 10,
      parallax[i].getAttribute("plx-direction")
    );
  }
}

window.addEventListener("scroll", function(event) {
  update();
});

init();
