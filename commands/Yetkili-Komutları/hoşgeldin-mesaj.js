const db = require("croxydb");

module.exports = {
    name: "hoşgeldin-mesaj",
    cooldown: 3,
    guildOnly: true,
    permission: "ADMINISTRATOR",
    aliases: ['hm','hoşgeldinmesaj','hoşgeldiniz-mesaj','hmesaj'],
    async execute(message, args, Embed, Discord, Tags, tag) {
        
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
        const hmmesaj = db.fetch(`hmmesaj_${message.guild.id}`, '')

        if(args[0] == "kanal"){
            const mentionedChannel = message.mentions.channels.first();
            if(!mentionedChannel) return message.channel.send(Embed("", "Lütfen Bir Kanal Etiketleyiniz.", "info"))

            db.set(`hm_msg_chnl_${message.guild.id}`, mentionedChannel.id)
            return message.channel.send(Embed("", `Hoş Geldiniz Kanalı ${mentionedChannel} Olarak Ayarlandı. \<a:yesil_tik:893174482443849769>`, "yeşil"))
        }
        else if(args[0] == "mesaj"){
            const text = args.splice(1, args.length-1).join(" ");
            if(!text) return message.channel.send(Embed("", "Lütfen Bir Mesaj Giriniz. \<a:yesil_tik:893174482443849769>", "info"))

            db.set(`hm_msg_${message.guild.id}`, text)
            return message.channel.send(Embed("", `Hoş Geldiniz Mesajı **${text}** Olarak Ayarlandı. \<a:yesil_tik:893174482443849769>`, "yeşil"))
        }
        else if (args[0] == "aç"){
        db.set(`hmmesaj_${message.guild.id}`, 'acik')

            return message.channel.send(Embed("", "Hoş Geldiniz Mesajı **Aktifleştirildi**. \<a:yesil_tik:893174482443849769>", "yeşil"))
        }
        else if (args[0] == "kapat"){

            db.set(`hmmesaj_${message.guild.id}`, 'kapali')

            return message.channel.send(Embed("", "Hoş Geldiniz Mesajı **Kapatıldı**.", "error"))
        }
        else if (args[0] == "sıfırla"){

            db.delete(`hm_msg_${message.guild.id}`)
            db.delete(`hm_msg_chnl_${message.guild.id}`)
            db.set(`hmmesaj_${message.guild.id}`, 'kapali')
            return message.channel.send(Embed("", "Hoş Geldiniz Mesajı **Sıfırlandı**.", "yeşil"))
        }
        else if(args[0] == "test"){
            message.client.emit("guildMemberAdd", message.member);
        }
        else{
            let hmdata;
            if(hmmesaj == 'acik') hmdata = "Aktif \<:online:893176812291637251>";
            else hmdata = "Kapalı \<:offline:893176853316132874>"

            if(hmmesaj == 'acik') hmRenk = "#59ff80";
            else hmRenk = "#ff7d7d"

            const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Hoş Geldin Mesajı")
            .setColor(hmRenk)
            .setDescription("Bu Komutu Kullanarak Hoş Geldin Mesajı Oluşturabilirsiniz.\n\u200b")
            .addFields(
                {name: `Gereken Yetki:`, value: "\`Yönetici\`", inline: true},
                {name: `\u200B`, value: `\u200B`, inline: true},
                {name: `Aktiflik Durumu:`, value: `${hmdata}\n\u200b`, inline: true},
                {name: `${prefix}hoşgeldin-mesaj aç`, value: "Hoş Geldin Mesajını Açar."},
                {name: `${prefix}hoşgeldin-mesaj kapat`, value: "Hoş Geldin Mesajını Kapatır."},
                {name: `${prefix}hoşgeldin-mesaj mesaj <mesaj>`, value: 'Hoş Geldin Mesajını Belirler. Kullanıcıyı yazması için "<kullanıcı>"\n\u200btoplam üyeyi yazması için "<toplam_üye>" yazmanız gerekir.'},
                {name: `${prefix}hoşgeldin-mesaj kanal <#kanal>`, value: "Hoş Geldin Mesaj Kanalını Belirler."},
                {name: `${prefix}hoşgeldin-mesaj test`, value: "Hoş Geldiniz Sistemi Test Mesajı Gönderir. "}
            )
            message.channel.send(infoEmbed);
        }
    }
}



// hoşgeldin mesaja tik offline emojisi koydum birazdanda bunları ayrılma ve tage koyucam