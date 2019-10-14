var pos = document.getElementById("pos");
var scroll = window.scrollY;
pos.innerText = `${scroll}`;

window.addEventListener("scroll", function(event) {
  var scroll = this.scrollY;
  console.log(scroll);
  pos.innerText = `${scroll}`;
});
