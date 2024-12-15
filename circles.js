function setup() {
  createCanvas(600, 600);
  noLoop();
  noStroke();
}

function draw() {
  background(220);
  fill(100, 150, 200, 150);
  drawCircleGrid(width / 2, height / 2, 100); // Start with a large circle in the center
}

function drawCircleGrid(x, y, r) {
  // Base case: stop recursion when the circle is too small
  if (r < 10) return;

  // Draw the current circle
  ellipse(x, y, r * 2, r * 2);

  // Recursive calls for circles along the axes
  drawCircleGrid(x + r, y, r / 2); // Right
  drawCircleGrid(x - r, y, r / 2); // Left
  drawCircleGrid(x, y + r, r / 2); // Bottom
  drawCircleGrid(x, y - r, r / 2); // Top
}
