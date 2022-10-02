const db = require("croxydb");

module.exports = {
    name: "yetkili",
    guildOnly: true,
    aliases: ['y'],
    execute(message, args, Embed, Discord, Tags, tag){
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
       
        const infoEmbed = new Discord.MessageEmbed()
        .setTitle("\<a:yetkili:890695872168484874> Yetkili Komutları")
        .setColor("#f5bc67")
        .addFields(
            {name: `${prefix}hoşgeldin-mesaj`, value: `Sunucuya Katılan Kullancılara\n\u200bHoş Geldin Mesajı Gönderir.`, inline: true},
            {name: `${prefix}ayrılma-mesaj`, value: `Sunucudan Ayrılan Kullanıcılar\n\u200bİçin Ayrılma Mesajı Gönderir.`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `${prefix}link-engelleme`, value: `Sunucudaki Kullanıcıların\n\u200bLink Göndermesini Engeller`, inline: true},
            {name: `${prefix}otorol`, value: `Sunucuya Katılan Kullanıcılara\n\u200bOtomatik Rol Verir`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `${prefix}ping`, value: `Botun Pingini Gönderir.`, inline: true},
            {name: `${prefix}kick`, value: `Kullanıcıyı Sunucudan Atar.`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `${prefix}ban`, value: `Kullanıcıyı Sunucudan Banlar.`, inline: true},
            {name: `${prefix}sil`, value: `Toplu Mesaj Siler.`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `${prefix}mesaj`, value: `Bot Adına Mesaj Gönderir.`, inline: true},
            {name: `${prefix}nick`, value: `Kullanıcının Sunucudaki İsmini Değiştirir.`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `${prefix}tag`, value: `Sunucuya Katılan Kullanıcılara Tag Ekler`, inline: true},
            {name: `${prefix}nuke`, value: `Mesaj Kanalını Silip Yeniden Oluşturur`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true} 
            // {name: `\u200B`, value: `\u200B`, inline: true},
        )

            message.channel.send(infoEmbed)
    }

}

// \n\u200b
// \u200B