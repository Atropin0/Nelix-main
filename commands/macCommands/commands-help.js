const db = require('croxydb')

module.exports = {
    name: "new-commands",
    cooldown: 2,
    guildOnly: true,
    aliases: ['nw'],
    developerOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){

        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
        
        const infoEmbed = new Discord.MessageEmbed()
            .setDescription("**Bottaki yeni komutların listesi**")
            .addFields(
                {name: `Sunucunun DataBase Verilierini Kontrol Eder`, value: `\`.db-control\``, inline: true},
                {name: `Kullanıcıyı Bottan Banlar`, value: `\`.ban-add <id>\``, inline: true},
                {name: `Kullanıcının Bottaki Banını Kaldırır`, value: `\`.ban-remove <id>\``, inline: true},
                {name: `Kullanıcıyı Gold Üye Yapar`, value: `\`.gold-add <id>\``, inline: true},
                {name: `Kullanıcıyı Gold Üyelikten Çıkarır`, value: `\`.gold-remove <id>\``, inline: true},
                {name: `Oylama Başlatır`, value: `\`.oylama <oylama sebebi>\``, inline: true},
                {name: `Sunucunun Premium Durumunu Gösterir`, value: `\`.premium\``, inline: true},
                {name: `Sunucuyu Premium Yapar`, value: `\`.premium add\``, inline: true},
                {name: `Sunucudaki Premiumu Kaldırır`, value: `\`.premium remove\``, inline: true},
                {name: `Yılan Oyunu`, value: `\`.yılan-oyunu\``, inline: true},
                {name: `Kullanıcıyı Olduğunuz Ses Kanalına Çeker`, value: `\`.çek <@kullanıcı>\``, inline: true},
                {name: `İD'si Girilen Ses Kanalındaki Kullanıcıları Çeker`, value: `\`.tçek <kanal id>\``, inline: true},
                
               
            )
            .setColor("#0ac48f")
            .setFooter("Nelix Bot", "https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256")
            // .setImage("https://i.hizliresim.com/smetn0r.gif")
      
            message.channel.send(infoEmbed);
    }

}

// \n\u200b
// \u200B