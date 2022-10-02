module.exports = {
    name: "nick",
    cooldawn: 5,
    permission: "ADMINISTRATOR",
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){
        const mentionedPlayer = message.mentions.members.first()

        if(!mentionedPlayer) return message.channel.send(Embed("", "Lütfen Bir Kullanıcıyı Etiketleyin", "info"))

        const newNickname = args.splice(1, args.length-1).join(" ")

        mentionedPlayer.setNickname(newNickname).then(() => {
            return message.channel.send(Embed("",`${mentionedPlayer} Adlı Kişinin İsmi **${newNickname}** Olarak Değiştirildi`, "yeşil"));
        }).catch(() => {
            return message.channel.send(Embed("", `${mentionedPlayer} Adlı Kişinin Yetkisi Benim Yetkimin Üzerinde Olduğu İçin İsmini Değiştireyimoyurm`, "error"));
        })

    }
}