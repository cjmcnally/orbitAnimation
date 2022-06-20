// This is a simple orbit animation I made for a physics project.. Enjoy!
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.arc(x-coord, y-coord, radius, start-angle, end-angle)

// Sets the x, y and angle to specific amount / coordinate
let positionY = 400;
let positionX = 710;
let angle = 0;

// Sets the x, y and angle to specific amount / coordinate
let x = 680;
let y = 390;
let angle2 = 0;

function drawStars() {
    // Big star
    ctx.fillStyle = 'whitesmoke';
    ctx.strokeStyle = 'orangered';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(900, 400, 100, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Closest to big star
    ctx.fillStyle = 'whitesmoke';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 17, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 

    // Outer-most star
    ctx.fillStyle = 'whitesmoke';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, 13, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

}
animate();

// Animation Function
function animate(){

    // Clears after images
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Changes angle & direction of tiny stars / makes the stars orbit main star
    positionX += 15 * Math.sin(angle);
    positionY += 15 * Math.cos(angle);

    x += 10 * Math.sin(angle2);
    y += 10 * Math.cos(angle2);

    // Changes how long the stars orbit around the main star
    angle += 0.07;
    angle2 += 0.042;

    // Calls the drawStars Function
    drawStars();
    // Requests animation to current function
    requestAnimationFrame(animate);
}