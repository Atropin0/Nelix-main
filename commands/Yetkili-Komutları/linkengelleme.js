const db = require('croxydb')

module.exports = {
    name: "linkengelleme",
    cooldown: 0,
    permission: "ADMINISTRATOR",
    guildOnly: true,
    aliases: ["le", 'link-engelleme'],
    async execute(message, args, Embed, Discord, Tags, tag) {
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')

        const kf_engelleme = db.fetch(`kf_engelleme_${message.guild.id}`, '')
        
        if (args[0] == "aç") {
            
            db.set(`kf_engelleme${message.guild.id}`, 'acik')
            return message.channel.send(Embed("", "Link Engelleme Sistemi **Aktifleştirildi**. \<a:yesil_tik:893174482443849769>", "yeşil"))

        }
        else if (args[0] == "kapat") {
            
            db.set(`kf_engelleme${message.guild.id}`, 'kapali')
            return message.channel.send(Embed("", "Link Engelleme Sistemi **Kapatıldı**.", "error"))

        }
        else {
            
            let küfür_data
            if(kf_engelleme == 'acik') küfür_data = "Aktif \<:online:893176812291637251>";
            else küfür_data = "Kapalı \<:offline:893176853316132874>"

            if(kf_engelleme == 'acik') hmRenk = "#59ff80";
            else hmRenk = "#ff7d7d"

            const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Link Engelleme Sistemi")
            .setColor(hmRenk)
            .setDescription("Bu Komutu Kullanarak Kullanıcıların Link Göndermesini Engelleyebilirsiniz.\n\u200b")
            .addFields(
                {name: `Gereken Yetki:`, value: "\`Yönetici\`", inline: true},
                {name: `Aktiflik Durumu:`, value: `${küfür_data}\n\u200b`, inline: true},
                {name: `${prefix}linkengelleme aç`, value: "Link Engelleme Sistemini Açar."},
                {name: `${prefix}linkengelleme kapat`, value: "Link Engelleme Sistemini Kapatır."}
            )

        message.channel.send(infoEmbed);
        }
    }
}