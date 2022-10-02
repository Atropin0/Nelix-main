module.exports = {
    name: "bilgi",
    aliases: ["b"],
    guildOnyl: true,
    cooldown: 2,
    execute(message, args, Embed, Discord, Tags, tag) {
        
        const member = message.mentions.members.first();
        if(!member) return message.channel.send(Embed("", "Lütfen Bir Kullanıcıyı Etiketleyiniz.", "info"));

        const time = new Date(member.joinedTimestamp);
        const joinedDate = time.toLocaleString("tr-TR", {year: "numeric",month: "long", day: "numeric"});
        let lastMessage = "";
        if(lastMessage != null){
            const messageLink = `https://discord.com/channels/${message.guild.id}/${member.lastMessageChannelID}/${member.lastMessageID}`;
            lastMessage = `[:link: Tıkla](${messageLink})`;
        }
        else{
            lastMessage = message.channel.send("Kullanıcının Son Mesajı Bulunamadı");
        }

        const infoEmbed = new Discord.MessageEmbed()
        .setColor('f5bc67')
        .setThumbnail(member.user.avatarURL())
        .addFields(
            {name: `Kullanıcı:`, value: `<@${member.id}>`, inline: true},
            {name: `Sunucudaki Adı`, value: `${member.displayName}`, inline: true},
            {name: `Sunucuya Katılma Tarihi`, value: `${joinedDate}\n`, inline: true},
            {name: `Son Mesaj`, value: `${lastMessage}`, inline: true},
            {name: `Rol Sayısı`, value: `${member.roles.cache.size -1}`, inline: true},
            {name: `ID`, value: `${member.id}`, inline: true},
        )
        .setFooter(`${message.member.user.username}#${message.member.user.discriminator} Tarafından İstendi.`, message.member.user.avatarURL({ dynamic: true, format: 'png', size: 256 }))

        message.channel.send(infoEmbed);
    }
}