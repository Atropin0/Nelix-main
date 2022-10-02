const db = require("croxydb");

module.exports = {
    name: "sci-fi2",
    cooldown: 10,
    guildOnly: true,
    execute(message, args, Embed, Discord){      // dfsd sdf  s sdf
        if (!db.fetch(`goldüye_${message.author.id}`)) return message.channel.send(Embed("", "Bu Komut Gold Üye Komutudur.", "error"))
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
        
        const text = args.slice(0).join('+');

        if(!text) return message.lineReply(`Lütfen yazı yazınız.  Ör. '${prefix}sci-fi2 \`Text\`'`)
        const linqo = `https://habbofont.net/font/scifi/${text}.gif`
        .replace(' ', '+')

        const embed = new Discord.MessageEmbed()
        .setColor("#f5bc67")
        .setImage(linqo)
        .setFooter(`${message.member.user.username}#${message.member.user.discriminator}, Tarafından İstendi`, message.member.user.avatarURL({ dynamic: true, format: 'png', size: 256 }))
            message.channel.send(embed)
        

    }
}