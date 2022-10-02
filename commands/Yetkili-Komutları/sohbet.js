const db = require('croxydb')

module.exports = {
    name: "chat",
    cooldown: 0,
    permission: "ADMINISTRATOR",
    guildOnly: true,
    aliases: ["sohbet"],
    async execute(message, args, Embed, Discord) {
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '') 

        const chatdata = db.fetch(`sohbetdata_${message.guild.id}`, '')
        
        if (args[0] == "aç") {
            
            db.set(`sohbetdata_${message.guild.id}`, 'acik')
            return message.channel.send(Embed("", "Sohbet Mesajları **Aktifleştirildi**. \<a:yesil_tik:893174482443849769>", "yeşil"))

        }
        else if (args[0] == "kapat") {
            
            db.set(`sohbetdata_${message.guild.id}`, 'kapali')
            return message.channel.send(Embed("", "Sohbet Mesajları **Kapatıldı**.", "error"))

        }
        else {
            
            let chat_data;
            if(chatdata == 'acik') chat_data = "Aktif \<:online:893176812291637251>";
            else chat_data = "Kapalı \<:offline:893176853316132874>"

            let hmRenk;
            if(chatdata == 'acik') hmRenk = "#59ff80";
            else hmRenk = "#ff7d7d"

            const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Sohbet Mesajları")
            .setColor(hmRenk)
            .setDescription(`Sohbet Mesajlarını Açıp Kapatmanızı Sağlar Daha Detaylı\nBilgi İçin ${prefix}sohbet-bilgi Yazıp Öğrenebilirsiniz\n\u200b`)
            .addFields(
                {name: `Gereken Yetki:`, value: "\`Yönetici\`", inline: true},
                {name: `Aktiflik Durumu:`, value: `${chat_data}\n\u200b`, inline: true},
                {name: `${prefix}chat aç`, value: "Sohbet Mesajlarını Açar."},
                {name: `${prefix}chat kapat`, value: "Sohbet Mesajlarını Kapatır."}
            )

        message.channel.send(infoEmbed);
        }
    }
}