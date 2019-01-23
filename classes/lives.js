// Define a class for Lives
//     Properties
//         x
//         y
//         color
//         lives
//         font
//     Methods
//         render()

class Lives {
 constructor(lives, x, y, color="#e8a668", font="16px Arial") {
     this.lives = lives;
     this.x = x;
     this.y = y;
     this.color = color;
     this.font = font
 }

 render(ctx) {
     ctx.font = this.font;
     ctx.fillStyle = this.color;
     ctx.fillText("Lives: "+this.lives, canvas.width-65, 20);
 }

}
