// This is a simple orbit animation I made for a physics project.. Enjoy!
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.arc(x-coord, y-coord, radius, start-angle, end-angle)

// Sets the x, y and angle to specific amount / coordinate
let x = canvas.width/2.5;
let y = canvas.height/2;
let angle = 0;

// Sets the x, y and angle to specific amount / coordinate
let x2 = canvas.width/3;
let y2 = canvas.height/2;
let angle2 = 0;

// Sets the x, y and angle to specific amount / coordinate
let x3 = canvas.width/3.25;
let y3 = canvas.height/2;
let angle3 = 0;

function drawStars() {
    // Big star
    ctx.fillStyle = 'whitesmoke';
    ctx.strokeStyle = 'orangered';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 90, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Closest to big star
    ctx.fillStyle = 'whitesmoke';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 

    // 2nd closest to big star
    ctx.fillStyle = 'whitesmoke';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x2, y2, 17, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Outer-most
    ctx.fillStyle = 'whitesmoke';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x3, y3, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

// Animation Function
function animate(){
    // Clears after images
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Changes angle & direction of tiny stars / makes the stars orbit main star
    x += 3 * Math.sin(angle);
    y += 3 * Math.cos(angle);

    x2 += 5 * Math.sin(angle2);
    y2 += 5 * Math.cos(angle2);

    x3 += 7 * Math.sin(angle3);
    y3 += 7 * Math.cos(angle3);

    // Changes how long the stars orbit around the main star
    angle += 0.015;
    angle2 += 0.017;
    angle3 += 0.019;

    // Calls the drawStars Function
    drawStars();
    // Requests animation to current function
    requestAnimationFrame(animate);
}
animate();