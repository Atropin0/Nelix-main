module.exports = {
    name: "premium-guild",
    cooldown: 0,
    guildOnly: true,
    aliases: ["premium-sunucu", "premium"],
    async execute(message, args, Embed, Discord, Tags, tag) {
        const data = tag.get("premium_guild");
        
        let isEnabled = data.enabled;
            if(isEnabled) isEnabled = "Premium Sunucu\<a:renkli_tik:905478664160956446>";
            else isEnabled = "Normal Sunucu \<:idle:905481632855781427>"

            const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Sunucunun Premium Bilgileri")
            .setColor("#f5bc67")
            .setDescription(`**Premium Durumu:** ${isEnabled}`)
            .setFooter(`${message.member.user.username}#${message.member.user.discriminator}, Tarafından İstendi`, message.member.user.avatarURL({ dynamic: true, format: 'png', size: 256 }))

        message.channel.send(infoEmbed);
    }
}


// ${message.guild.owner}