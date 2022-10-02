const db = require("croxydb");

module.exports = {
    name: "genel",
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
       
        const infoEmbed = new Discord.MessageEmbed()
        .setTitle("\<a:genel:890696107074662440> Genel Komutlar")
        .setColor("#f5bc67")
        .addFields(
            {name: `${prefix}avatar`, value: `Kişinin Avatarını Gönderir.`, inline: true},
            {name: `${prefix}sunucuavatar`, value: `Sunucunun Avatarını Gönderir.`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `${prefix}istatistik`, value: `Bot İle İlgili İstatistikleri Gönderir`, inline: true},
            {name: `${prefix}sunucu-istatistik`, value: `Sunucunuz İle İlgili İstatistikleri Gönderir`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
        )

            message.channel.send(infoEmbed)
    }

}

// {name: `${prefix}`, value: ``},