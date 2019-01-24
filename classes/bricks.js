// Define a class for Brick
//     Properties
//         x
//         y
//         status
//         color
//         width
//         height
//     Methods
//         render()

class Brick {
 constructor(color = "#0095DD", x=0, y=0) {
   this.color = color;
   this.x = x
   this.y = y
   this.status = 1;
   this.width = 75;
   this.height = 20;
   this.padding = 10;
   this.offsetTop = 30;
   this.offsetLeft = 30;
 }


 class Bricks {
     constructor(){
         this.bricks = []
         this.rowCount = 3;
         this.columnCount = 5;

     }
 }

//might need to rethink this... two classes: "Brick" and "Bricks"

 render(ctx) {
     for(let c=0; c<this.columnCount; c++) {
         for(let r=0; r<this.rowCount; r++) {
             if(this.bricks[c][r].status == 1) {
                 this.x = (c*(this.width+this.padding))+this.offsetLeft;
                 this.y = (r*(this.height+this.padding))this.offsetTop;
                 this.bricks[c][r].x = this.x;
                 this.bricks[c][r].y = this.y;
                 ctx.beginPath();
                 ctx.rect(this.x, this.y, this.width, this.height);
                 let red = 255 * (c / r);
                 let green = 255 * (r / c);
                 let blue = (c * r);
                 ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
                 ctx.fill();
                 ctx.closePath();
             }
         }
     }
 }

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
