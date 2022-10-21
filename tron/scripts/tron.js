// https://crisbnp.github.io/keycode-generator/

// const canvas = document.getElementById('tron');
// const context = canvas.getContext('2d');
// const pixels = 10;

// class Player {
//   constructor(x, y, color) {
//     this.color = color;
//     thix.x = x;
//     this.y = y;
//     this.startX = x;
//     this.startY = y;
//     this.alive = true;
//     this.direction = '';
//     this.key = '';

//     this.constructor.counter = (this.constructor.counter || 0) + 1;
//     this.id = this.constructor.counter;

//     Player.allInstances.push(this);

//   };
// };

// Player.allInstances = [];

// let player1 = new Player (16,16, "red")

// function setDirection(player, up, down, left, right, currentKey) {
//   switch (currentKey) {
//     case up:
//       if (player.direction !== 'DOWN') {
//         player.key = 'UP';
//       }
//       break;
//     case down:
//       if (player.direction !== 'UP') {
//         player.key = 'DOWN';
//       }
//       break;
//       case down:
//         if (player.direction !== 'UP') {
//           player.key = 'DOWN';
//         }
//         break;
//       default;
//       break;
//   }
// }


// document.addEventListener('keydown', (event) => {
//   let currentKey = event.keyCode;

//   event.preventDefault();
//   setKey(player1, 38, 40, 37, 39, currentKey)
//   setKey(player1, 87, 83, 65, 68, currentKey)
// })


var myGamePiece;
// let dx = 2;
// let dy = -2;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(16, 16, "#f00", 128, 128);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 512;
        this.canvas.height = 512;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 60);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })

    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
      if(this.x < 0){this.x = 0}
      if(this.y < 0){this.y = 0}
      if(this.x + this.width > myGameArea.canvas.width){this.x = myGameArea.canvas.width - this.width}
      if(this.y + this.height > myGameArea.canvas.height){this.y = myGameArea.canvas.height - this.height}
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear();
    if (myGamePiece.speedX != 16 && myGameArea.key == 37) {myGamePiece.speedX = -16; myGamePiece.speedY = 0;}
    if (myGamePiece.speedX != -16 && myGameArea.key == 39) {myGamePiece.speedX = 16; myGamePiece.speedY = 0;}
    if (myGamePiece.speedY != 16 &&  myGameArea.key == 38) {myGamePiece.speedY = -16; myGamePiece.speedX = 0;}
    if (myGamePiece.speedY != -16 && myGameArea.key == 40) {myGamePiece.speedY = 16; myGamePiece.speedX = 0;}
    myGamePiece.newPos();
    myGamePiece.update();
}