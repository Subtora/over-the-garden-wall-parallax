var pos = document.getElementsByClassName("pos");
var trees = document.getElementsByClassName("trees");
var scroll = window.scrollY;

function init() {
  update();
}

function moveY(obj, ammount) {
  obj.style = `transform:translateY(${ammount}px)`;
}

function update() {
  var scroll = this.scrollY;
  pos[0].innerText = `${scroll}`;
  pos[1].innerText = `${scroll + window.innerHeight}`;

  moveY(trees[0], scroll * -0.5);
  moveY(trees[1], scroll * -0.4);
  moveY(trees[2], scroll * -0.3);
}

window.addEventListener("scroll", function(event) {
  update();
});

init();
