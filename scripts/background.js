class Background {
 constructor(numberOfRainbows = 10) {
   this.num = numberOfRainbows;
 }

 render(ctx) {
     for (let i = 0; i < this.num; i++){
         ctx.fillStyle = `hsl(${360 / this.num * i}, 100%, 50%)`
         ctx.fillRect((canvas.width/this.num)*i, 0, 49, canvas.height);
        }       //code for background colored rectangles
     for (let c = 0; c < this.num; c++){
         ctx.beginPath();
         ctx.fillStyle = `hsl(${360 / this.num * c}, 100%, 50%)`
         ctx.arc(canvas.width/2, canvas.height, (10*this.num)-(c*this.num), 0, 2 * Math.PI);
         ctx.fill();
        }       //code for background rainbow

    }

}
