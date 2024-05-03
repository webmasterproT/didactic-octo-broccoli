// Define the canvas and context for the animation
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the bunny and grass silhouette paths
const bunnyPath = new Path2D('M50 0 L15 30 ...'); // Simplified, replace with actual path data
const grassPath = new Path2D('M70 100 L75 110 ...'); // Simplified, replace with actual path data

// Define the animation properties
let bunnyX = 0;
let bunnyY = canvas.height / 2;
let frame = 0;

// Function to draw the bunny silhouette
function drawBunny() {
  ctx.fillStyle = 'white';
  ctx.fill(bunnyPath);
}

// Function to draw the grass silhouette
function drawGrass() {
  ctx.fillStyle = 'white';
  ctx.fill(grassPath);
}

// Function to update the bunny's position
function updateBunnyPosition() {
  bunnyX += 2; // Move bunny to the right
  if (bunnyX > canvas.width) {
    bunnyX = -50; // Reset bunny position
  }
}

// Function to animate the bunny
function animateBunny() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  ctx.save();
  ctx.translate(bunnyX, bunnyY); // Move the context to the bunny's position
  drawBunny();
  ctx.restore();
  updateBunnyPosition();
  frame = requestAnimationFrame(animateBunny); // Continue the animation
}

// Function to start the landing page animation
function initAnimation() {
  drawGrass();
  frame = requestAnimationFrame(animateBunny); // Start the bunny animation
}

// Event listener for window resize to adjust canvas size
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawGrass(); // Redraw the grass on resize
});

// Initialize the animation when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initAnimation);