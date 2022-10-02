const db = require('croxydb')

module.exports = {
    name: "küfür",
    cooldown: 0,
    permission: "ADMINISTRATOR",
    guildOnly: true,
    async execute(message, args, Embed, Discord, Tags, tag) {
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')

        const küfür = db.fetch(`küfür_${message.guild.id}`, '')
        
        if (args[0] == "aç") {
            
           db.set(`küfür_${message.guild.id}`, 'acik')
            return message.channel.send(Embed("", "Küfür Engelleme Sistemi **Aktifleştirildi**. \<a:yesil_tik:893174482443849769>", "yeşil"))

        }
        else if (args[0] == "kapat") {
            
            db.set(`küfür_${message.guild.id}`, 'kapali')
            return message.channel.send(Embed("", "Küfür Engelleme Sistemi **Kapatıldı**.", "error"))

        }
        else {
            
            let küfür_data
            if(küfür == 'acik') küfür_data = "Aktif \<:online:893176812291637251>";
            else küfür_data = "Kapalı \<:offline:893176853316132874>"

            if(küfür == 'acik') hmRenk = "#59ff80";
            else hmRenk = "#ff7d7d"

            const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Küfür Engelleme Sistemi")
            .setColor(hmRenk)
            .setDescription(`Sunucunuzda Küfür Edilmesini Engeller Küfür\nEden Kullanıcıları Özelden Uyarır.\n\u200b`)
            .addFields(
                {name: `Gereken Yetki:`, value: "\`Yönetici\`", inline: true},
                {name: `Aktiflik Durumu:`, value: `${küfür_data}\n\u200b`, inline: true},
                {name: `${prefix}küfür aç`, value: "Küfür Engelleme Sistemini Açar."},
                {name: `${prefix}küfür kapat`, value: "Küfür Engelleme Sistemini Kapatır."}
            )

        message.channel.send(infoEmbed);
        }
    }
}