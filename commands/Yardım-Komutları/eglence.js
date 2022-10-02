const db = require("croxydb");

module.exports = {
    name: "eğlence",
    guildOnly: true,
    aliases: ['eglence'],
    execute(message, args, Embed, Discord, Tags, tag){
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
       
        const infoEmbed = new Discord.MessageEmbed()
        .setTitle("\<a:elence:890695964392824842> Eğlence Komutları")
        .setColor("#f5bc67")
        .addFields(
            {name: `${prefix}yazı-tura`, value: `Yazı Tura Atar`, inline: true},
            {name: `${prefix}kuş`, value: `:)`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `${prefix}düello`, value: `Biriyle 1vs1 kapışabilirsiniz`, inline: true},
            {name: `${prefix}tkm`, value: `Taş, Kağıt, Makas oynarsınız`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `${prefix}espiri`, value: `Espri Yapar`, inline: true},
        //     {name: `${prefix}`, value: ``, inline: true},
        //     {name: ``, value: ``, inline: true},
        //     {name: ``, value: ``, inline: true},
        //     {name: `\u200B`, value: `\u200B`, inline: true},
        )

            message.channel.send(infoEmbed)
    }

}

// {name: `${prefix}`, value: ``},