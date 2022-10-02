const Discord = require('discord.js')

const GameCord = require('gamecord-fork').djs


const client = new Discord.Client();

module.exports = {
    name: "yılan-oyunu",
    cooldown: 2,
    guildOnly: true,
    async execute(message, args,){
      

        new GameCord.SnakeGame(message)

        .setTitle('Yılan Oyunu')

        .setColor('#7298da')

        .setTime(60000) // Always better to set max time because the default one is just 5s

                .run()

    }

}

// \n\u200b
// \u200B