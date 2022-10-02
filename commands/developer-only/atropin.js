const db = require("croxydb");

module.exports = {
    name: "nhelp",
    cooldown: 2,
    guildOnly: true,
    developerOnly: true,
    aliases: ["nh"],
    execute(message, args, Embed, Discord){
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
        
        const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Developer Only Commands")
            .addFields(
                {name: `Sunucuları Listeleme`, value: `\`sunucuları listele\``, inline: true},
                {name: `Botu Kapatır`, value: `\`KAPAT\``, inline: true},
                {name: `Sunucudaki Kişi Sayısı`, value: `\`sunucuda kaç kişi var\``, inline: true},
                {name: `Sunucuyu Premium Yapar`, value: `\`premium ekle\``, inline: true},
                {name: `Sunucudaki Premiumu Kaldırır`, value: `\`premium kaldır\``, inline: true},
                {name: `Botu Sunucudan Çıkarma`, value: `\`leave\``, inline: true},
                {name: `Sistemleri Görüntüler`, value: `\`sistem bilgi\``, inline: true},
                {name: `Sistemleri Sıfırlar`, value: `\`sistemleri sıfırla\``, inline: true},
                {name: `Sistemleri Kapatır`, value: `\`sistemleri kapat\``, inline: true},
               
            )
            .setColor("#f5bc67")
            .setFooter("Nelix Bot", "https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256")
            // .setImage("https://i.hizliresim.com/smetn0r.gif")
        
        message.channel.send(infoEmbed);

    }

}

// \n\u200b
// \u200B