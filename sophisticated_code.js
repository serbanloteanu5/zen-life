/* sophisticated_code.js */

// This code generates and animates a beautiful spiral design using JavaScript

// Creating the canvas element
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// Setting up the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the variables for the spiral
let rotation = 0;
let angle = 0;
const lineWidth = 1;
const lineLength = 50;
const rotationSpeed = 0.01;
const color = "#ff00ff";

// Function to draw the spiral
function drawSpiral() {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);

  for (let i = 0; i < 1000; i++) {
    angle = rotation + i * 0.1;
    const x = canvas.width / 2 + (angle * Math.cos(angle)) / 10;
    const y = canvas.height / 2 + (angle * Math.sin(angle)) / 10;
    
    ctx.lineTo(x + lineLength, y + lineLength);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  ctx.closePath();
}

// Function for the animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  rotation += rotationSpeed;
  drawSpiral();
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();