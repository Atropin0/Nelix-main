module.exports = {
    name: "pandik",
    cooldown: 2,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){      // dfsd sdf  s sdf
        const mentionedPlayer = message.mentions.members.first();
        if (message.author.id != "454227029689106442") return message.lineReply('Bu Komutu Sadece GÜLSÜZ Kullanabilir').then(msg => msg.delete({timeout: 10000}))
        if (!mentionedPlayer) return message.channel.send(Embed("", "Lütfen Bir Kullanıcıyı Etiketleyin!", "info")).then(msg => msg.delete({timeout: 10000}))
        if(message.guild.id == "930896720462758039") return message.lineReply('Bu sunucuda olmaz kanka').then(msg => msg.delete({timeout: 10000}))
        if(mentionedPlayer.id == "406119184313876500") return message.delete(), message.lineReply(Embed("",'Bana Diyemezsin Canım', "error")).then(msg => msg.delete({timeout: 10000}))
        message.delete(), message.channel.send(`${mentionedPlayer} Fuck You Biç 🖕🏿`)
    }
}