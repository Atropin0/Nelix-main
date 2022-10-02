const db = require("croxydb");

module.exports = {
    name: "text",
    cooldown: 10,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){      // dfsd sdf  s sdf
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')

        const embed = new Discord.MessageEmbed()
        .setTitle("Bu sistem ile yazdığınız mesaj dinamik bir hale çevirilir")
        .setColor("#f5bc67")
        .addFields(
            {name: `Alev`, value: `${prefix}alev \`Text\``, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Buz`, value: `${prefix}buz \`Text\``, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Ducket`, value: `${prefix}ducket \`Text\``, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Metal`, value: `${prefix}metal \`Text\``, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Neon`, value: `${prefix}neon \`Text\``, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Punk`, value: `${prefix}punk \`Text\``, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Sci-fi`, value: `${prefix}sci-fi \`Text\``, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Sci-fi2`, value: `${prefix}sci-fi2 \`Text\``, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Silver`, value: `${prefix}silver \`Text\``, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Siyah`, value: `${prefix}siyah \`Text\``, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Taş`, value: `${prefix}taş \`Text\``, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Vip`, value: `${prefix}vip \`Text\``, inline: true},
        )
        .setFooter(`${message.member.user.username}#${message.member.user.discriminator}, Tarafından İstendi`, message.member.user.avatarURL({ dynamic: true, format: 'png', size: 256 }))

        message.channel.send(embed)
        
    }
}