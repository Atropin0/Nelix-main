const Discord = require('discord.js')
const db = require('croxydb');

module.exports = {
    name: "oylama",
    cooldown: 2,
    guildOnly: true,
    aliases: ["oy"],
    goldOnly: true,
    execute(message, args, tag, Embed){
        
        if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message
      .lineReply(
        `Bu komutu kullanabilmek için **YÖNETİCİ** yetkisine sahip olmalısın!`
      )
      .then(message.delete({timeout: 10000}));

  message.delete();

  let question = args.join(" ");

  let user = message.author.username;

  if (!question)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField("__Doğru Kullanım__", `.oylama **mesaj**`)
    );

  message.channel
    .send(
      new Discord.MessageEmbed()

        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
        .setFooter(`${message.member.user.username}#${message.member.user.discriminator}`, message.member.user.avatarURL({ dynamic: true, format: 'png', size: 256 }))

        .addField(`__OYLAMA__`, `**${question}**`)
    )
    .then(function(message) {
      message.react("👍");

      message.react("👎");
    });

    }

}

// \n\u200b
// \u200B