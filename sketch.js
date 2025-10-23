let x = 300;
let y = 300;
let speedX = 5;
let speedY = 3;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(78, 19, 187);
  noStroke();
  circle(x, y, 100);
  x += speedX;
  y += speedY;
  if (x + 50 >= width || x - 50 <= 0) {
    speedX *= -1;
  }

  if (y + 50 >= width || y - 50 <= 0) {
    speedY *= -1;
  }
}
