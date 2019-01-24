class Brick {
 constructor(c=0, r=0, x=100, y=100, color = "#0095DD") {
   this.c = c;
   this.r = r;
   this.color = color;
   this.x = x
   this.y = y
   this.status = 1;
   this.width = 75;
   this.height = 20;
    }

    render(ctx){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        let red = 255 * (this.c / this.r);
        let green = 255 * (this.r / this.c);
        let blue = (this.c * this.r);
        ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
        // ctx.fillStyle = "blue"//this.color;
        ctx.fill();
        ctx.closePath();
        // console.log(this.x)
}

}


 class Bricks {
     constructor(row=3, column=5){
         this.bricks = []
         this.rowCount = row;
         this.columnCount = column;
         this.padding = 10;
         this.offsetTop = 30;
         this.offsetLeft = 30;
     }

     make(){
         for(let c=0; c<this.columnCount; c++) {
             this.bricks[c] = [];
             for(let r=0; r<this.rowCount; r++) {
                 this.bricks[c][r] = new Brick(c,r)
                 // console.log(bricks[c][r].c, bricks[c][r].r)
             }
         }
     }

     gradient(bW, bH, x, y){
     // Create gradient
     let grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
     grd.addColorStop(0, "#e8a668");
     grd.addColorStop(1, "#cf5d3a");
     return grd;
     }

     render(ctx) {
         for(let c=0; c<this.columnCount; c++) {
             for(let r=0; r<this.rowCount; r++) {
                 if(this.bricks[c][r].status == 1) {
                     let brickX = (c*(this.bricks[c][r].width+this.padding))+this.offsetLeft;
                     let brickY = (r*(this.bricks[c][r].height+this.padding))+this.offsetTop;
                     this.bricks[c][r].x = brickX;
                     this.bricks[c][r].y = brickY;
                     this.bricks[c][r].render(ctx)
                     // ctx.beginPath();
                     // ctx.rect(this.bricks[c][r].x, this.bricks[c][r].y, this.bricks[c][r].width, this.bricks[c][r].height);
                     // // let red = 255 * (this.x / this.y);
                     // // let green = 255 * (this.y / this.x);
                     // // let blue = (this.y * this.x);
                     // // ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
                     // ctx.fillStyle = "blue"//this.color;
                     // ctx.fill();
                     // ctx.closePath();
                 }
             }
         }
     }

 }
