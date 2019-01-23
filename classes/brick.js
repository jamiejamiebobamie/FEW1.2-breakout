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
 constructor(radius, color = "#0095DD", x=0, y=0) {
   this.radius = radius;
   this.color = color;
   this.x = x
   this.y = y
   this.status = 1;
   this.rowCount = 3;
   this.columnCount = 5;
   this.width = 75;
   this.height = 20;
   this.padding = 10;
   this.offsetTop = 30;
   this.offsetLeft = 30;
   this.bricks = []
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
