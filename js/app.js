class Enemy {
  constructor(x, y, speed) {
    this.x = x
    this.y = y
    this.sprite = 'images/enemy-bug.png'
    this.speed = speed
  }
  update(dt) {
    this.x = this.x + this.speed * dt
    //length of canvas = 505 Set x to -101 once enemy reaches edge of canvas
    /*   if (this.x > 505) {
      this.x = -101
    } */
  }
}

Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

//83 on y
//101 on x

class Player {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.sprite = 'images/char-boy.png'
  }
  handleInput(e) {
    if (e === 'left') {
      this.x -= 101
    } else if (e === 'right') {
      this.x += 101
    } else if (e === 'up') {
      this.y -= 83
    } else if (e === 'down') {
      this.y += 83
    }
  }
}

Player.prototype.update = function(dt) {}
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  }

  player.handleInput(allowedKeys[e.keyCode])
})

const player = new Player(203, 403)

const allEnemies = [new Enemy(101, 83, 200), new Enemy(101, 167, 300)]
