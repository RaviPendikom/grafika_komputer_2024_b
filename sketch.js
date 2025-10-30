// User defined variable
// EVENT
function setup() {
  createCanvas(600, 600);
  background(78, 19, 187);
}

function draw() {
  noStroke();
  circle(mouseX, mouseY, 10);
  if (mouseIsPressed) {
    background(78, 19, 187);
  }
}
