const { up, down, left, right, exit } = require("../utils/index").emoji.snakegame
const { EventEmitter } = require('events');
const WIDTH = 15;
const HEIGHT = 10;

class SnakeGame {
    constructor(message, options={}){
        if(!message) throw new Error('[GameCord] >> missing message param!');

        this.event = new EventEmitter();

        this.message = message

        this.snakeLength = null

        this.score = null

        this.embed = null

        this.snake = null

        this.apple = null

        this.gboard = [];

        for (let y = 0; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++) {
                this.gboard[y * WIDTH + x] = "🟦";
            }
        }

        this.options = {
            title: 'Snake Game',
            color: 'RANDOM',
            time: 30000,
            timestamp: false,
            ...options
        }
    }

    get board(){
        let { apple, gboard } = this
        let str = ""
        for (let y = 0; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++) {
                if (x == apple.x && y == apple.y) {
                    str += "🍎";
                    continue;
                }

                let flag = true;
                for (let s = 0; s < this.snake.length; s++) {
                    if (x == this.snake[s].x && y == this.snake[s].y) {
                        str += "🟩";
                        flag = false;
                    }
                }

                if (flag)
                    str += gboard[y * WIDTH + x];
            }
            str += "\n";
        }
        return str;
    };

    reset() {
        this.snakeLength = 1;
        this.score = 0;
        this.embed = null;
        this.snake = [{ x: 5, y: 5}];
        this.apple = { x: 1, y: 1 };
    }

    react() {
        this.embed.react(left);
        this.embed.react(right);
        this.embed.react(up);
        this.embed.react(down);
        this.embed.react(exit);
    }

    run(){
        this.reset();
        this.newAppleLoc();
        this.event.emit('start', this);
        this.message.channel.send({
            embed: {
                title: this.options.title,
                color: this.options.color,
                description: this.board,
                timestamp: Date.now()
            }
        }).then(message => {
            this.embed = message;
            this.react();
            this.waitForReaction();
        })
    }

    gameOver(){
        this.embed.edit({
            embed: {
                title: "Game Over",
                color: this.options.color,
                description: `**Score:** ${this.score}`,
                timestamp: this.options.timestamp ? Date.now() : null
            }
        });

        this.embed.reactions.removeAll()
        this.event.emit('end', this);
    }

    step(){
        if(this.apple.x == this.snake[0].x && this.apple.y == this.snake[0].y) {
            this.score += 1
            this.snakeLength++;
            this.newAppleLoc();
        }

        this.embed.edit({
            embed: {
                title: this.options.title,
                color: this.options.color,
                description: this.board,
                timestamp: this.options.timestamp ? Date.now() : null
            }
        })

        this.waitForReaction();
    }

    filter(reaction, user) {
        return [up, down, left, right, exit].includes(reaction.emoji.name) && user.id !== this.embed.author.id;
    }

    isLocInSnake(pos) {
        return this.snake.find(sPos => sPos.x == pos.x && sPos.y == pos.y);
    };

    newAppleLoc() {
        let newApplePos = { x: 0, y: 0 };
        do {
            newApplePos = { x: parseInt(Math.random() * WIDTH), y: parseInt(Math.random() * HEIGHT) };
        } while (this.isLocInSnake(newApplePos))

        this.apple.x = newApplePos.x;
        this.apple.y = newApplePos.y;
    };

    waitForReaction() {
        this.embed.awaitReactions((reaction, user) => this.filter(reaction, user), { max: 1, time: this.options.time, errors: ['time'] })
            .then(collected => {

                const reaction = collected.first();

                const snakeHead = this.snake[0];
                const nextPos = { x: snakeHead.x, y: snakeHead.y };

                if (reaction.emoji.name === left) {
                    let nextX = snakeHead.x - 1;
                    if (nextX < 0)
                        nextX = WIDTH - 1;
                    nextPos.x = nextX;
                } else if (reaction.emoji.name === up) {
                    let nextY = snakeHead.y - 1;
                    if (nextY < 0)
                        nextY = HEIGHT - 1;
                    nextPos.y = nextY;
                } else if (reaction.emoji.name === down) {
                    let nextY = snakeHead.y + 1;
                    if (nextY >= HEIGHT)
                        nextY = 0;
                    nextPos.y = nextY;
                } else if (reaction.emoji.name === right) {
                    let nextX = snakeHead.x + 1;
                    if (nextX >= WIDTH)
                        nextX = 0;
                    nextPos.x = nextX;
                } else if (reaction.emoji.name === exit) {
                    this.gameOver();
                }

                reaction.users.remove(reaction.users.cache.filter(user => user.id !== this.embed.author.id).first().id).then(() => {
                    if (this.isLocInSnake(nextPos)) {
                        this.gameOver();
                    }
                    else {
                        this.snake.unshift(nextPos);
                        if (this.snake.length > this.snakeLength)
                            this.snake.pop();

                        this.step();
                    }
                });
            })
            .catch(collected => {
                this.gameOver();
            });
    }

    on(event, callback){
        this.event.on(event, callback);
        return this;
    };

    setTitle(title){
        this.options.title = title;
        return this;
    };

    setColor(color){
        this.options.color = color;
        return this;
    };

    setTime(time){
        this.options.time = time;
        return this;
    };

    setTimestamp(){
        this.options.timestamp = true
        return this
    }


}

module.exports = SnakeGame