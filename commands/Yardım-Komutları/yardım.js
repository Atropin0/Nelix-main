const db = require("croxydb");

module.exports = {
    name: "gyardım",
    cooldown: 5,
    guildOnly: true,
    aliases: ['ghelp', 'gh'],
    execute(message, args, Embed, Discord, Tags, tag){
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
        
        const infoEmbed = new Discord.MessageEmbed()
            .setDescription("**Discord Sunucunuzda Hoş Geldin Gibi Karşılama Mesajlarını Otomatik\n\u200bOlarak Ayarlamanıza, Eğlence Ve Moderasyon Komutlarıyla Sunucunuzu\n\u200bDaha Güvenli Ve Daha Eğlenceli Bir Sunucu Yapar :)\n\u200b**")
            .addFields(
                {name: `\<a:genel:890696107074662440> Genel`, value: `\`${prefix}\`**genel** Yazarak Genel Komutları Görüntüleyebilirsiniz.`, inline: true},
                {name: `\<a:yetkili:890695872168484874> Yetkili`, value: `\`${prefix}\`**yetkili** Yazarak Yetkili Komutlarını Görüntüleyebilirsiniz.`, inline: true},
                {name: `\u200B`, value: `\u200B`, inline: true},
                {name: `\<a:elence:890695964392824842> Eğlence`, value: `\`${prefix}\`**eğlence** Yazarak Eğlence Komutlarını Görüntüleyebilirsiniz.`, inline: true},
                {name: `\<a:update:890708556146417756> Kısaltmalar`, value: `\`${prefix}\`**kısaltmalar** Yazarak Kısaltması Olan Komutları Görüntüleyebilirsiniz.`, inline: true},
                {name: `\u200B`, value: `\u200B`, inline: true},
                {name: `\<:yenilikler:898533393350942730> Yenilikler`, value: `\`${prefix}\`**yenilikler** Bota Yeni Eklenen Özellikleri Ve Hata Düzeltmelerini Görüntüleyebilirsiniz.`, inline: true},
                {name: `\<:asdtf:890716390707843082> Custom Komut`, value: `\`${prefix}\`**???** Yazarak Sunucunuza Özel Komut Ekleyebilirsiniz`, inline: true},
                {name: `\u200B`, value: `\u200B`, inline: true},
                {name: `\u200B`, value: `[\<a:discord:886608480478314557> Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=850162429447110656&scope=bot&permissions=8)`, inline: true},
                {name: `\u200B`, value: `[\<:destek:890705844101087283> Destek Sunucusu](https://discord.gg/r2vqnQHMtZ)`, inline: true},
                {name: `\u200B`, value: `\u200B`, inline: true},
                // {name: ``, value: ``, inline: true},
                // {name: ``, value: ``, inline: true},
                // {name: ``, value: ``, inline: true},
                // {name: `\<a:update:890708556146417756> Update`, value: `**${prefix}update** Yazarak En Son Eklenen Komutları Görebilirsiniz`, inline: true},
            )
            .setColor("#f5bc67")
            .setFooter("Nelix Bot", "https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256")
            // .setImage("https://i.hizliresim.com/smetn0r.gif")
        
        message.channel.send(infoEmbed);

    }

}

// \n\u200b
// \u200B