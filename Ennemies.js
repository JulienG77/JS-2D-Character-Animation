/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

const numberEnnemies = 120;
const ennemiesArray = [];

let gameFrame = 0;

class Ennemy {
  constructor(){
    this.image = new Image();
    this.image.src = 'Enemies/enemy1.png';
//    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteheight = 155;
    this.width = this.spriteWidth / 4.5;
    this.height = this.spriteheight / 4.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    //Randomiser la vitesse d animation par sprites
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update(){
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 5 - 2.5; 
    // Animer les sprites
    if (gameFrame % this.flapSpeed === 0){
    this.frame > 4 ? this.frame = 0 : this.frame++;
  }
}
  draw(){
    ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteheight,
      this.x, this.y, this.width, this.height);
  }
};

//Créer plusieurs Ennemies
for (let i = 0; i < numberEnnemies; i++){
  ennemiesArray.push(new Ennemy());
}

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ennemiesArray.forEach(Ennemy => {
    Ennemy.update();
    Ennemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();