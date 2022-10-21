const canvas = document.getElementById('tron');
const context = canvas.getContext('2d');
const pixels = 10;

class Player {
  constructor(x, y, color) {
    this.color = color;
    thix.x = x;
    this.y = y;
    this.startX = x;
    this.startY = y;
    this.alive = true;
    this.direction = '';
    this.key = '';

    this.constructor.counter = (this.constructor.counter || 0) + 1;
    this.id = this.constructor.counter;

    Player.allInstances.push(this);

  };
};

Player.allInstances = [];