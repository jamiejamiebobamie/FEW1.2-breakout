class Lives {
 constructor(lives = 3, x = canvas.width-65, y = 20, color = '#ffffff', font = '16px Arial') {
     this.lives = lives;
     this.x = x;
     this.y = y;
     this.color = color;
     this.font = font;
 }

 render(ctx) {
     ctx.font = this.font;
     ctx.fillStyle = this.color;
     ctx.fillText('Lives: ' + this.lives, canvas.width-65, 20);
 }

}
