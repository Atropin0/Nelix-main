module.exports = {
    name : "avatar",
    cooldown: 5,
    guilOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){

        // if (message.author.id != ("850162429447110656")) return message.channel.send("3131313")

        const mentionedPlayer = message.mentions.members.first();
        if(!mentionedPlayer) return message.channel.send(Embed("", "Lütfen Bir Kullanıcıyı Etiketleyiniz", "info"));

        const playerAvatar = mentionedPlayer.user.avatarURL({ dynamic: true, format: "png", size: 256});
        
        if(playerAvatar == null) return message.channel.send(Embed("", `${mentionedPlayer.displayName} Adlı Kişinin Bir Avatarı Yok!`, "error"));

        message.channel.send(playerAvatar);

    }
}