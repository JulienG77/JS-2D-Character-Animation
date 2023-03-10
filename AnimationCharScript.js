/**    Animation d'un personnage */

/* selection Animation à afficher */
let playerState = "idle";
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
  playerState = e.target.value;
})
/* Création du cadre contenant le sprite à afficher*/
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvas_width = canvas.width = 600;
const canvas_height= canvas.height =600;

/**  AnimSheet - Feuille contenant toutes les anims du perso */
const playerImage = new Image();
playerImage.src = 'Animations/test.png';
const spriteWidth = 575;
const spriteHeight = 523;
 
/*** Controle vitesse animation */
let gameFrame = 0;
const staggerFrames= 5;

/** Gestionnaire d'animations - selection par ligne // on inscrit dans un tableau le nom et le nbre de sprites que contient l'anim*/
const spriteAnimations = [];
const animationStates = [
  {
    name: 'idle',
    frames: '6',
  },

  {
    name:'jump',
    frames:'7',
  },
  {
    name:'fall',
    frames:'7',
  },
  {
    name:'run',
    frames:'8',
  },
  {
    name:'dizzy',
    frames:'10',
  },
  {
    name:'sit',
    frames:'4',
  },
  {
    name:'roll',
    frames:'6',
  },
  {
    name:'bite',
    frames:'7',
  },
  {
    name:'ko',
    frames:'12',
  },
  {
    name:'getHit',
    frames:'4',
  }
];

animationStates.forEach((state, index) =>{
    let frames = {
      loc: [],
    }
    for (let j = 0; j < state.frames; j++){
      let positionX = j * spriteWidth;
      let positionY = index * spriteHeight;
      frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

/** Placement de la ligne à lire et vitesse de lecture de l anim */
function animate(){
    ctx.clearRect(0, 0, canvas_width,canvas_height);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length; /**** Controle de vitesse d animation */
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX,  frameY,
    spriteWidth,spriteHeight,0 ,0 ,spriteWidth,spriteHeight); /** encadrement image */

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();