var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

var x = canvas.width/2;
var y = canvas.height-30;

var score = 0;
var lives = 3;

var dx = 2;
var dy = -2;

var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;

var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}
//
// var grd = ctx.createLinearGradient(startX, startY, endX, endY);
// grd.addColorStop(0, 'red');   // Places a color at the start
// grd.addColorStop(1, 'white');  // Places a color at the end

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}

function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1){
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#e8a668";
    ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#e8a668";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#008000";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop; //ReferenceError: Cannot access uninitialized variable.
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = gradientBricks(brickWidth, brickHeight, brickX, brickY)
                // ctx.fillStyle = '#00FFFF';
                // let red = 255 * (c / r);
                // let green = 255 * (r / c);
                // let blue = (c * r);
                // ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;//not working...
                ctx.fill(); //https://github.com/Make-School-Courses/FEW-1.2-JavaScript-Foundations/tree/master/class-02
                ctx.closePath();
            }
        }
    }
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#773f3f";
    ctx.fill();
    ctx.closePath();
}

function drawBackground(){
// // Create gradient
// var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
// grd.addColorStop(0, "#45a5aa");
// grd.addColorStop(1, "#4f7b8a");
//
// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(0, 0, canvas.width, canvas.height); //code for background gradient

// for (let i = 0; i < 10; i++){
//     ctx.fillStyle = `hsl(${360 / 10 * i}, 100%, 50%)`
//     ctx.fillRect((canvas.width/10)*i, 0, 49, canvas.height);
//     }       //code for background colored rectangles
//

    // ctx.fillStyle = 'white';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    //
    // ctx.fillStyle = 'red';
    // ctx.beginPath();
    // ctx.arc(canvas.width/2, canvas.height/2, 150, 0, 2 * Math.PI);
    // ctx.fill();
    //
    // ctx.fillStyle = 'white';
    // ctx.beginPath();
    // ctx.arc(canvas.width/2, canvas.height/2, 100, 0, 2 * Math.PI);
    // ctx.fill();
    //
    // ctx.fillStyle = 'red';
    // ctx.beginPath();
    // ctx.arc(canvas.width/2, canvas.height/2, 50, 0, 2 * Math.PI);
    // ctx.fill(); //target logo

    for (let i = 0; i < 10; i++){
        ctx.fillStyle = `hsl(${360 / 10 * i}, 100%, 50%)`
        ctx.fillRect((canvas.width/10)*i, 0, 49, canvas.height);
        }       //code for background colored rectangles

    for (let c = 0; c < 10; c++){
        ctx.beginPath();
        ctx.fillStyle = `hsl(${360 / 10 * c}, 100%, 50%)`
        ctx.arc(canvas.width/2, canvas.height, 200-(c*20), 0, 2 * Math.PI);
        ctx.fill();
        }
}

function gradientBricks(bW, bH, x, y){
// Create gradient
var grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
grd.addColorStop(0, "#e8a668");
grd.addColorStop(1, "#cf5d3a");

// Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(x, y, bW, bH);
return grd;
}

function draw() {
    // ctx.fillStyle = grd;
    // ctx.fillRect(x, y, width, height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }


    drawBackground();
    drawBall();
    drawBricks();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
    dy = -dy;
} else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
    }
    else {
        lives--;
        if(!lives) {
            alert("GAME OVER");
            document.location.reload();
        }
        else {
            x = canvas.width/2;
            y = canvas.height-30;
            dx = 2;
            dy = -2;
            paddleX = (canvas.width-paddleWidth)/2;
        }
    }
}
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();
