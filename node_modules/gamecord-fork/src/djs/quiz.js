const { quiz, random } = require("../utils/index");
const { EventEmitter } = require('events');

class Quiz {
    constructor(message, options={}) {
        if(!message) throw new Error('[GameCord] >> missing message param')

        this.event = new EventEmitter();

        this.message = message

        this.item = null

        this.filter = null

        this.embed = null

        this.correct = null

        this.options = {
            title: 'Quiz',
            color: 'RANDOM',
            time: 30000,
            timestamp: false,
            ...options
        }
    }

    reset() {
        this.filter = null
        this.item = null
        this.embed = null
        this.correct = null
    }

    run() {
        this.reset()
        this.event.emit('ready', this);
        this.item = random(quiz)
        this.filter = response => {
            return this.item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        }
        this.event.emit('start', this);
        this.embed = {
            title: this.options.title,
            color: this.options.color,
            description: this.item.question,
            timestamp: this.options.timestamp ? Date.now() : null,
            footer: {
                text: 'Type your guess below!'
            }
        }
        
        this.message.channel.send({ embed: this.embed }).then(() => {
            this.event.emit('response', this);
            this.message.channel.awaitMessages(this.filter, { max: 1, time: this.options.time, errors: ['time'] })
            .then(collected => {
                this.correct = true;
                this.end(collected)
            })
            .catch(collected => {
                this.correct = false;
                this.end(collected)
            })
        })
    }

    end(collected) {
        this.event.emit('end', this);
        this.embed = {
            title: this.options.title,
            color: this.options.color,
            description: `**${this.correct ? `✅ | ${collected.first().author} got the correct answer!` : `❌ | Looks like nobody got the answer this time.`}**\n\n**The answer is ${this.item.answers}**.`,
            timestamp: this.options.timestamp ? Date.now() : null,
        }
        this.message.channel.send({ embed: this.embed })
        this.reset()
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

module.exports = Quiz