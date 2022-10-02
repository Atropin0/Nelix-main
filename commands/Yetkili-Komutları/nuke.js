const Discord = require('discord.js');

module.exports = {
    name: "nuke",
    guildOnly: true,
    developerOnly: false,
    execute(message, args, Embed, Discord, Tags, tag){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.");
        message.channel.clone().then(knl => {
          let position = message.channel.position;
          knl.setPosition(position);
          message.channel.delete();
        });
          
    }
}