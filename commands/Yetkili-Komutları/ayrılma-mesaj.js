const db = require("croxydb");

module.exports = {
    name: "ayrılma-mesaj",
    cooldown: 3,
    guildOnly: true,
    permission: "ADMINISTRATOR",
    aliases: ["amesaj"],
    async execute(message, args, Embed, Discord, Tags, tag){

        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
        const amesaj = db.fetch(`amesaj_${message.guild.id}`, '')

        if(args[0] == "kanal"){
            
            const channel = message.mentions.channels.first();
            if(!channel) return message.channel.send(Embed("", "Lütfen Bir Kanal Etiketleyiniz.", "info"));

            db.set(`amesaj_msg_chnl_${message.guild.id}`, channel.id)
            return message.channel.send(Embed("", `Ayrılma Mesajı Kanalı ${channel} Olarak Ayarlandı. \<a:yesil_tik:893174482443849769>`, "yeşil"));

        }
        else if (args[0] == "mesaj"){

            const text = args.splice(1, args.length - 1).join(" ");
            if(!text) return message.channel.send(Embed("", "Lütfen Bir Mesaj Giriniz", "info"))

            db.set(`amesaj_msg_${message.guild.id}`, text)
            return message.channel.send(Embed("", `Ayrılma Mesajı "**${text}**" Olarak Ayarlandı. \<a:yesil_tik:893174482443849769>`, "yeşil"));
        }
        else if (args[0] == "aç"){

            db.set(`amesaj_${message.guild.id}`, 'acik')
            return message.channel.send(Embed("", `Ayrılma Mesajı **Aktifleştirildi**. \<a:yesil_tik:893174482443849769>`, "yeşil"));
        }
        else if (args[0] == "kapat"){

            db.set(`amesaj_${message.guild.id}`, 'kapali')
            return message.channel.send(Embed("", `Ayrılma Mesajı **Kapatıldı**.`, "error"));
        }
        else if (args[0] == "sıfırla"){

            db.delete(`amesaj_msg_${message.guild.id}`)
            db.delete(`amesaj_msg_chnl_${message.guild.id}`)
            db.set(`amesaj_${message.guild.id}`, 'kapali')
            return message.channel.send(Embed("", `Ayrılma Mesajı **Sıfırlandı**.`, "yeşil"));
        }
        else if(args[0] == "test"){
            message.client.emit("guildMemberRemove", message.member);
        }
        else{
            let amesaj_data;
            if(amesaj == 'acik') amesaj_data = "Aktif \<:online:893176812291637251>";
            else amesaj_data = "Kapalı \<:offline:893176853316132874>"

            let amesajRenk;
            if(amesaj == 'acik') amesajRenk = "#59ff80";
            else amesajRenk = "#ff7d7d"

            const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Ayrılma Mesajı")
            .setColor(amesajRenk)
            .setDescription("Bu Komutu Kullanarak Ayrılma Mesajı Oluşturabilirsiniz.\n\u200b")
            .addFields(
                {name: `Gereken Yetki:`, value: "\`Yönetici\`", inline: true},
                {name: `Aktiflik Durumu:`, value: `${amesaj_data}\n\u200b`, inline: true},
                {name: `${prefix}ayrılma-mesaj aç`, value: "Ayrılma Mesajını Açar."},
                {name: `${prefix}ayrılma-mesaj kapat`, value: "Ayrılma Mesajını Kapatır."},
                {name: `${prefix}ayrılma-mesaj mesaj <mesaj>`, value: 'Ayrılma Mesajını Belirler. Kullanıcıyı yazması için "<kullanıcı>"\n\u200btoplam üyeyi yazması için "<toplam_üye>" yazmanız gerekir.'},
                {name: `${prefix}ayrılma-mesaj kanal #kanal`, value: "Ayrılma Mesaj Kanalını Belirler."},
                {name: `${prefix}ayrılma-mesaj test`, value: "Ayrılma Mesaj Sistemi Test Mesajı Gönderir. "}
            )
            message.channel.send(infoEmbed);
        }
    }
}