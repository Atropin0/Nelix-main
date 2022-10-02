const db = require("croxydb");

module.exports = {
    name: "gold-yardım",
    guildOnly: true,
    aliases: ['gy'],
    execute(message, args, Embed, Discord, Tags, tag){
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
       
        const infoEmbed = new Discord.MessageEmbed()
        .setTitle("\<a:yetkili:890695872168484874> Gold Üyelere Özel Komutlar")
        .setColor("#f5bc67")
        .addFields(
            {name: `${prefix}hoşgeldin-mesaj`, value: `Sunucuya Katılan Kullancılara\n\u200bHoş Geldin Mesajı Gönderir.`, inline: true},
            {name: `${prefix}hoşgeldin-mesaj`, value: `Sunucuya Katılan Kullancılara\n\u200bHoş Geldin Mesajı Gönderir.`, inline: true},
           
        
            {name: `\u200B`, value: `\u200B`, inline: true} 
            // {name: `\u200B`, value: `\u200B`, inline: true},
        )

            message.channel.send(infoEmbed)
    }

}

// \n\u200b
// \u200B