const db = require("croxydb");

module.exports = {
    name: "ducket",
    cooldown: 10,
    guildOnly: true,
    execute(message, args, Embed, Discord){      // dfsd sdf  s sdf
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
        if (!db.fetch(`goldüye_${message.author.id}`)) return message.channel.send(Embed("", "Bu Komut Gold Üye Komutudur.", "error"))
        
        const text = args.slice(0).join('+');

        if(!text) return message.lineReply(`Lütfen yazı yazınız.  Ör. '${prefix}ducket \`Text\`'`)
        const linqo = `https://habbofont.net/font/duckets/${text}.gif`
        .replace(' ', '+')

        const embed = new Discord.MessageEmbed()
        .setColor("#f5bc67")
        .setImage(linqo)
        .setFooter(`${message.member.user.username}#${message.member.user.discriminator}, Tarafından İstendi`, message.member.user.avatarURL({ dynamic: true, format: 'png', size: 256 }))
            message.channel.send(embed)
        

    }
}