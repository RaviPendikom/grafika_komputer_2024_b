let x = 300;
let speedX = 5;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(78, 19, 187);
  noStroke();
  circle(x, 300, 100);
  x += speedX;
  if (x + 50 >= width || x - 50 <= 0) {
    speedX *= -1;
  }
}
