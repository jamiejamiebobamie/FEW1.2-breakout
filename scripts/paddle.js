class Paddle {
 constructor(x = canvas.width/2, color = '#008000', width = 75, height = 10) {
     this.x = x;
     this.color = color;
     this.width = width;
     this.height = height;
 }

 render(ctx) {
     ctx.beginPath();
     ctx.rect(this.x, canvas.height-this.height, this.width, this.height);
     ctx.fillStyle = this.color;
     ctx.fill();
     ctx.closePath();
 }

}
