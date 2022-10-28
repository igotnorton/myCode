function player(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        if(this.x < 16){this.x = 0}
        if(this.y < 16){this.y = 0}
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

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 512;
        this.canvas.height = 512;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 60);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new player(16, 16, "#f00", 128, 128);
}

function updateGameArea() {

    // myGameArea.clear();

    if (myGamePiece.speedX != 16 && myGameArea.key == 37)
    {myGamePiece.speedX = -16; myGamePiece.speedY = 0;}

    if (myGamePiece.speedX != -16 && myGameArea.key == 39)
    {myGamePiece.speedX = 16; myGamePiece.speedY = 0;}

    if (myGamePiece.speedY != 16 &&  myGameArea.key == 38)
    {myGamePiece.speedY = -16; myGamePiece.speedX = 0;}

    if (myGamePiece.speedY != -16 && myGameArea.key == 40)
    {myGamePiece.speedY = 16; myGamePiece.speedX = 0;}

    myGamePiece.newPos();
    myGamePiece.update();

}