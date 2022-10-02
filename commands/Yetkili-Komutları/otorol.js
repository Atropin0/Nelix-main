const db = require("croxydb");

module.exports = {
    name: "otorol",
    cooldown: 3,
    guildOnly: true,
    aliases: ["oto-rol"],
    permission: "ADMINISTRATOR",
    async execute(message, args, Embed, Discord) {
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
        const otorol = db.fetch(`otorol_${message.guild.id}`, '')
        const bot = message.guild.members.cache.get(message.client.user.id)

        if (args[0] == "aç") {
           
            if (!db.fetch(`otorol_id_${message.guild.id}`)) return message.channel.send(Embed("", `Lütfen Otomatik Rolü Aktifleştirmeden Önce \`${prefix}otorol rol @rol\` Komutunu Kullanarak Otomatik Rolü Belirleyiniz.`, "info"))
            const role = message.guild.roles.cache.get(db.fetch(`otorol_id_${message.guild.id}`, ''));
            bot.roles.add(role)
                .then(async () => {
                    bot.roles.remove(role)

                    db.set(`otorol_${message.guild.id}`, 'acik')
                    return message.channel.send(Embed("", "Otomatik Rol **Aktifleştirildi**. \<a:yesil_tik:893174482443849769>", "yeşil"));
                })
                .catch(() => {
                    return message.channel.send(Embed("", "Belirtilen Rol Yetkimin Üzerinde Olduğu Veya Rol Silindiği İçin Otomatik Rol Olarak Kaydedilemiyor.", "error"))
                })

        }
        else if (args[0] == "kapat") {

            db.set(`otorol_${message.guild.id}`, 'kapali')
            return message.channel.send(Embed("", "Otomatik Rol **Kapatıldı**.", "error"));

        }
        else if (args[0] == "sıfırla") {

            db.set(`otorol_${message.guild.id}`, 'kapali')
            db.delete(`otorol_id_${message.guild.id}`)
            return message.channel.send(Embed("", "Otomatik Rol **Sıfırlandı**.", "yeşil"));

        }
        else if (args[0] == "rol") {

            const mentionedRole = message.mentions.roles.first();
            if (!mentionedRole) return message.channel.send(Embed("", "Lütfen Bir Rol Etiketleyiniz.", "info"))

            bot.roles.add(mentionedRole)
                .then(async () => {
                    bot.roles.remove(mentionedRole);
                    
                    db.set(`otorol_id_${message.guild.id}`, mentionedRole.id)
                    return message.channel.send(Embed("", `Otomatik Verilecek Rol ${mentionedRole} Olarak Ayarlandı!`)).then(msg => msg.react('\<:yesil:886266675987611660>'))
                })
                .catch(() => {
                    return message.channel.send(Embed("", "Belirtilen Rol Yetkimin Üzerinde Olduğu Veya Rol Silindiği İçin Otomatik Rol Olarak Kaydedilemiyor.", "error"))
                })

        }
        else {
            let otorol_data;
            if(otorol == 'acik') otorol_data = "Aktif \<:online:893176812291637251>";
            else otorol_data = "Kapalı \<:offline:893176853316132874>"

            if(otorol == 'acik') otorol_renk = "#59ff80";
            else otorol_renk = "#ff7d7d"

            const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Otomatik Rol Sistemi")
            .setColor(otorol_renk)
            .setDescription("Bu Komutu Kullanarak Otomarik Rol Sistemi Oluşturabilirsiniz.\n\u200b")
            .addFields(
                {name: `Gereken Yetki:`, value: "\`Yönetici\`", inline: true},
                {name: `\u200B`, value: `\u200B`, inline: true},
                {name: `Aktiflik Durumu:`, value: `${otorol_data}\n\u200b`, inline: true},
                {name: `${prefix}oto-rol aç`, value: "Otomatik Rol Sistemini Açar."},
                {name: `${prefix}oto-rol kapat`, value: "Otomatik Rol Sistemini Kapatır."},
                {name: `${prefix}oto-rol  <@rol>`, value: 'Otomatik Rol Sistemi Rolünü Belirler'}
            )
            message.channel.send(infoEmbed);
        }

    }
}