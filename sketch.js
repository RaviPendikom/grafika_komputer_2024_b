function setup() {
  createCanvas(600, 600);
  background(78, 19, 187);
}

function draw() {
  fill(random(255), random(255), random(255), random(255));
  noStroke();
  circle(random(600), random(600), random(100));
}
