module.exports = {
    name: "h",
    cooldown: 0,
    permission: "ADMINISTRATOR",
    guildOnly: true,
    async execute(message, args, Embed, Discord, Tags, tag) {
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')

        const chatdata = tag.get("chat");
        
        
            
            // let isEnabled = data.enabled;
            // if(isEnabled) isEnabled = "Aktif \<:online:893176812291637251>";
            // else isEnabled = "Kapalı \<:offline:893176853316132874>"

            // let hmRenk = data.enabled;
            // if(hmRenk) hmRenk = "#59ff80";
            // else hmRenk = "#ff7d7d"

            let chatEnabled = chatdata.enabled;
            if(chatEnabled) chatEnabled = "Aktif \<:online:893176812291637251>";
            else chatEnabled = "Kapalı \<:offline:893176853316132874>"

            const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Sunucu")
            .setColor("#f5bc67")
            .setDescription("Bu Komutu Kullanarak Kullanıcıların Link Göndermesini Engelleyebilirsiniz.\n\u200b")
            .addFields(
                {name: `sohbet mesaj`, value: `${chatEnabled}`},
                {name: `${prefix}linkengelleme kapat`, value: "Link Engelleme Sistemini Kapatır."}
            )

        message.channel.send(infoEmbed);
        
    }
}