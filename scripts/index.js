const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

let dx = 2;
let dy = -2;

let rightPressed = false;
let leftPressed = false;

function keyDownHandler(e) {
    if(e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = true;
    }
    else if(e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = false;
    }
    else if(e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        player.x = relativeX - player.width/2;
    }
}

function collisionDetection() {
    for(let c=0; c<targets.columnCount; c++) {
        for(let r=0; r<targets.rowCount; r++) {
            let b = targets.bricks[c][r];
            if(b.status == 1){
                if(circle.x > b.x && circle.x < b.x+b.width && circle.y > b.y && circle.y < b.y+b.height) {
                    dy = -dy;
                    b.status = 0;
                    points.score++;
                    if(points.score == targets.rowCount*targets.columnCount) {
                        alert('YOU WIN, CONGRATULATIONS!');
                        document.location.reload();
                    }
                }
            }
        }
    }
};

let points = new Score();
let health = new Lives();
let player = new Paddle();
let circle = new Ball();
let back = new Background();
let targets = new Bricks();
targets.make();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    if(rightPressed && player.x < canvas.width-player.width) {
        player.x += 7
    }
    else if(leftPressed && player.x > 0) {
        player.x -= 7;
    }

    collisionDetection();

    back.render(ctx);
    circle.render(ctx);
    targets.render(ctx);
    player.render(ctx);
    points.render(ctx);
    health.render(ctx);




    if(circle.x + dx > canvas.width-circle.radius || circle.x + dx < circle.radius) {
        dx = -dx;
    }
    if(circle.y + dy < circle.radius) {
    dy = -dy;
} else if(circle.y + dy > canvas.height-circle.radius) {
    if(circle.x > player.x && circle.x <player.x + player.width) {
        dy = -dy;
    }
    else {
        health.lives--;
        if(!health.lives) {
            alert('GAME OVER');
            document.location.reload();
        }
        else {
            circle.x = canvas.width/2;
            circle.y = canvas.height-30;
            dx = 2;
            dy = -2;
            player.x = (canvas.width-player.width)/2;
        }
    }
}
    circle.x += dx;
    circle.y += dy;
    requestAnimationFrame(draw);
}

draw();
