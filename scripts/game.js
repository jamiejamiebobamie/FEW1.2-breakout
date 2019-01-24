// Make a Game Class. The Game itself can be an object that creates and owns all of the other objects. The game can hold all of the global properties, and methods.
// Properties
//  ball
//  bricks
//  score
//  lives
//  ctx
//  width
//  height
// Methods
//  move()
//  draw()
//  collisionDetection()
//  keyDownHandler()
//  keyUpHandler()
//  mouseMoveHandler()

class Game{
    constructor(dx = 4, dy = -4){
        this.dx = dx;
        this.dy = dy;
        this.rightPressed = false;
        this.leftPressed = false;
        this.points = new Score();
        this.health = new Lives();
        this.player = new Paddle();
        this.circle = new Ball();
        this.back = new Background();
        this.targets = new Bricks();
        this.targets.make();
    }

keyDownHandler(e) {
    if(e.key == 'Right' || e.key == 'ArrowRight') {
        this.rightPressed = true;
    }
    else if(e.key == 'Left' || e.key == 'ArrowLeft') {
        this.leftPressed = true;
    }
}

keyUpHandler(e) {
    if(e.key == 'Right' || e.key == 'ArrowRight') {
        this.rightPressed = false;
    }
    else if(e.key == 'Left' || e.key == 'ArrowLeft') {
        this.leftPressed = false;
    }
}

mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        this.player.x = relativeX - this.player.width/2;
    }
}

collisionDetection() {
    for(let c = 0; c < this.targets.columnCount; c++) {
        for(let r = 0; r < this.targets.rowCount; r++) {
            let b = this.targets.bricks[c][r];
            if(b.status == 1){
                if(this.circle.x > b.x && this.circle.x < b.x+b.width && this.circle.y > b.y && this.circle.y < b.y+b.height) {
                    this.dy = -this.dy;
                    b.status = 0;
                    this.points.score++;
                    if(this.points.score == this.targets.rowCount * this.targets.columnCount) {
                        alert('YOU WIN, CONGRATULATIONS!');
                        document.location.reload();
                    }
                }
            }
        }
    }
};

render(ctx) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);


    if(this.rightPressed && this.player.x < canvas.width - this.player.width) {
        this.player.x += 7
    }
    else if(this.leftPressed && player.x > 0) {
        this.player.x -= 7;
    }

    this.collisionDetection();

    this.back.render(ctx);
    this.circle.render(ctx);
    this.targets.render(ctx);
    this.player.render(ctx);
    this.points.render(ctx);
    this.health.render(ctx);




    if(this.circle.x + this.dx > canvas.width - this.circle.radius || this.circle.x + this.dx < this.circle.radius) {
        this.dx = -this.dx;
    }
    if(this.circle.y + this.dy < this.circle.radius) {
    this.dy = - this.dy;
} else if(this.circle.y + this.dy > canvas.height - this.circle.radius) {
    if(this.circle.x > this.player.x && this.circle.x < this.player.x + this.player.width) {
        this.dy = -this.dy;
    }
    else {
        this.health.lives--;
        if(!this.health.lives) {
            alert('GAME OVER');
            document.location.reload();
        }
        else {
            this.circle.x = canvas.width/2;
            this.circle.y = canvas.height-30;
            this.dx = 4;
            this.dy = -4;
            this.player.x = (canvas.width - this.player.width)/2;
        }
    }
}
    this.circle.x += this.dx;
    this.circle.y += this.dy;
    requestAnimationFrame(this.render);
}

}
