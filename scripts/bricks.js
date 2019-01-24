class Brick {
    constructor(c = 0, r = 0, x = 100, y = 100, color = '#0095DD'){
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
        const red = 255 * (this.c / this.r);
        const green = 255 * (this.r / this.c);
        const blue = (this.c * this.r);
        ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
        ctx.fill();
        ctx.closePath();
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
         for(let c = 0; c < this.columnCount; c++) {
             this.bricks[c] = [];
             for(let r = 0; r < this.rowCount; r++) {
                 this.bricks[c][r] = new Brick(c,r)
             }
         }
     }

     render(ctx) {
         for(let c = 0; c < this.columnCount; c++) {
             for(let r = 0; r < this.rowCount; r++) {
                 if(this.bricks[c][r].status == 1) {
                     const brickX = (c*(this.bricks[c][r].width+this.padding))+this.offsetLeft;
                     const brickY = (r*(this.bricks[c][r].height+this.padding))+this.offsetTop;
                     this.bricks[c][r].x = brickX;
                     this.bricks[c][r].y = brickY;
                     this.bricks[c][r].render(ctx)
                 }
             }
         }
     }

 }
