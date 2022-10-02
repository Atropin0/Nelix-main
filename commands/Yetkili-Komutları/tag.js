const db = require("croxydb");

module.exports = {
    name: "tag",
    cooldown: 3,
    guildOnly: true,
    permission: "ADMINISTRATOR",
    aliases: ["etiket"],
    async execute(message, args, Embed, Discord, Tags, tag) {
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
     
        const tag_data = db.fetch(`tag_${message.guild.id}`, '')
        
        if(args[0] == "aç"){

            if(!db.fetch(`tag_name_${message.guild.id}`)) return message.channel.send(Embed("", "Lütfen Tag Sistemini Aktifleştirmeden Önce Bir Tag Ayarlayın.", "error"));

            db.set(`tag_${message.guild.id}`, 'acik')
            return message.channel.send(Embed("", "Tag Sistemi **Aktifleştirildi.** \<a:yesil_tik:893174482443849769>", "yeşil"))

        }
        else if(args[0] == "kapat"){
            
            db.set(`tag_${message.guild.id}`, 'kapali')
            return message.channel.send(Embed("", "Tag Sistemi **Kapatıldı**.", "error"))

        }
        else if(args[0] == "sıfırla"){
            
            db.delete(`tag_name_${message.guild.id}`)
            db.set(`tag_${message.guild.id}`, 'kapali')
            return message.channel.send(Embed("", "Tag Sistemi **Sıfırlandı**.", "yeşil"))

        }
        else if(args[0]){

            const text = args.join(" ");

            db.set(`tag_name_${message.guild.id}`, text)
            return message.channel.send(Embed("", `Tag (**${text.replace('<kullanıcı>', message.member.displayName)}**) Olarak Ayarlandı. \<a:yesil_tik:893174482443849769>`, "yeşil"));

        }
        else {
            let otorol_renk;
            if(tag_data == 'acik') otorol_renk = "Aktif \<:online:893176812291637251>";
            else otorol_renk = "Kapalı \<:offline:893176853316132874>"

            let tag_renk;
            if(tag_data == 'acik') tag_renk = "#59ff80";
            else tag_renk = "#ff7d7d"

            const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Tag Sistemi")
            .setColor(tag_renk)
            .setDescription("Bu Komutu Kullanarak Sunucuya Katılan Kullanıcıların Nickinin\nBaşına Tag Ekler Sağlar.\n\u200b")
            .addFields(
                {name: `Gereken Yetki:`, value: "\`Yönetici\`", inline: true},
                {name: `Aktiflik Durumu:`, value: `${otorol_renk}\n\u200b`, inline: true},
                {name: `${prefix}tag aç`, value: "Tag Sistemini Açar."},
                {name: `${prefix}tag kapat`, value: "Tag Sistemini Kapatır."},
                {name: `${prefix}tag <tag>`, value: 'Sunucuya Yeni Katılan Kişilere Tag Ekler\nBu Kısımda <kullanıcı> Yazdığınız Kısım Kullanıcının Adı İle Değiştirilir.'},
                {name: `${prefix}tag İsim - Yaş`, value: 'Sunucuya Katılan Kişiler Elle Kayıt Ediliyor İse Kullanıcının\nAdını Sunucuya Katıldığı Zaman ör. \`İsim - Yaş\` Olarak Değiştirir'},
            )
            message.channel.send(infoEmbed);
        }
    }
}