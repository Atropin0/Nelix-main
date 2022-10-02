module.exports = {
    name: "sunucu-avatar",
    cooldown: 5,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){

        const guildIcon = message.guild.iconURL({dynamic: true, size: 256, format: 'png'});
        
        if(guildIcon == null) return message.channel.send(Embed("","Ş-Şey Sunucunun Avatarı Yok", "error"))

        return message.channel.send(guildIcon);

    }
}