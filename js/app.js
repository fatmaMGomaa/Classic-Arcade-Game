// the main class that enemy and player will inhert there main properties and method from
class Character {
    constructor(x, y, sprite, width, height) {
        this.x = x
        this.y = y
        // The image/sprite for our enemies and player, this uses
        // a helper we've provided to easily load images
        this.sprite = sprite
        // to use them in collision function
        this.width = width
        this.height = height
    }
    // Draw the characters on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player extends Character{
    constructor(x, y, sprite, width, height) {
        super(x, y, sprite = 'images/char-boy.png', width=65, height=75)
    }

    update(dt) {
        if (this.y < 0){
            allEnemies = []
        }
    }
    // this method handles the user input to move the player position on the screen
    handleInput(direction){
        
        if (direction === "left" && this.x > 83) {
            this.x -= 100
        }
        if (direction === "right" && this.x < 400) {
            this.x += 100
        }
        
        if (direction === "up" && this.y > 0) {
            this.y -= 85
        }
        if (direction === "down" && this.y <= 380) {
            this.y += 85
        }
    }
}

// Enemies our player must avoid
class Enemy extends Character {
    constructor(x, y, sprite, width, height) {
        super(x, y, sprite = 'images/enemy-bug.png', width=95, height=65)
    }
    update(dt) {
        if(this.x > 480){
            this.x = -80 * (Math.floor(Math.random() * 3) + 1)
        }else {
            // Update the enemy's position, required method for game
            // Parameter: dt, a time delta between ticks
            // You should multiply any movement by the dt parameter
            // which will ensure the game runs at the same speed for
            // all computers.
            this.x += (Math.floor(Math.random() * 300) + 200)  * dt;
        }

        if(collision(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
            player.x = 202;
            player.y = 400;
        }
    }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

const player = new Player(202, 400);
let allEnemies = [{},{},{}];
let position = 55;

allEnemies = allEnemies.map((item,index)=>{
    item = new Enemy((-200 * (Math.floor(Math.random() * 3) + 1)), position);
    position += 85;
    return item;
});

//this function I copied it from https://www.youtube.com/watch?v=oz7pHJ65TEk&feature=youtu.be
const collision = function (px,py,pw,ph,ex,ey,ew,eh) {
    return (Math.abs(px - ex) * 2 < pw + ew) && (Math.abs(py - ey) * 2 < ph + eh);
};