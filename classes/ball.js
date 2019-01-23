//
// Define a class for Ball
//     Properties
//         radius
//         color
//         x
//         y
//     Methods
//         render()

class Ball {
 constructor(radius=10, color = "#0095DD", x = 0, y = 0) {
   this.radius = radius;
   this.color = color;
   this.x = x;
   this.y = y;
 }

 render(ctx) {
   ctx.beginPath();
   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
   ctx.fillStyle = this.color;
   ctx.fill();
   ctx.closePath();
 }

}
