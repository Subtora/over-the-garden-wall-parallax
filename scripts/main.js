var pos = document.getElementsByClassName("pos");
var scroll = window.scrollY;
pos[0].innerText = `${scroll}`;
pos[1].innerText = `${scroll}`;
window.addEventListener("scroll", function(event) {
  var scroll = this.scrollY;
  console.log(scroll);
  pos[0].innerText = `${scroll}`;
  pos[1].innerText = `${scroll + window.innerHeight}`;
});
