const Discord = require('discord.js');

module.exports = {
    name: "youtube",
    cooldown: 5,
    aliases: ['yt'],
    guildOnly: true,
    async execute(message, args, Embed, Tags, tag){      // dfsd sdf  s sdf
        

        
    let youtube = args.slice(0).join('+');

    let link = `https://www.youtube.com/results?search_query=` + youtube;
    if(!youtube)return message.reply(`Lütfen Aramak İçin Bir Kelime Girin!`)
    if(!link)return message.reply("Console error")
    let embed = new Discord.MessageEmbed()

     
 .setColor("RED")
     
      .setTimestamp()
    
      .addField('Durum:', 'Youtubede Aranıyor')

      .addField("Aranan:", `${args.slice(0).join(' ')}`)

      .addField('Link:', `${link}`)

      .setFooter(`${message.member.user.username}#${message.member.user.discriminator}, Tarafından İstendi`, message.member.user.avatarURL({ dynamic: true, format: 'png', size: 256 }))
     
      
          message.channel.send(embed);
        
    }
}