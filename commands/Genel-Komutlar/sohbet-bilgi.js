const db = require("croxydb");

module.exports = {
    name: "sohbet-bilgi",
    cooldown: 10,
    guildOnly: true,
    aliases: ['chat-info'],
    execute(message, args, Embed, Discord, Tags, tag){
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
        
        message.channel.send(Embed("", `Sohbet Komutları Botla Sohbet Etmenize Yarar ör. sa, naber Gibi Mesajlara Cevap Verir Botta Bu Özellik Sunucuya Katıldığı Zaman Kapalı Olur Sunucu Yetkilileri Sohbet Mesajlarını Kullanmak İsterler İse \`${prefix}chat aç\` Yazarak Sohbet Mesajlarını Aktifleştirebilirler.`, "#f5bc67")).then(msg => msg.delete({timeout:30000})); 

    }

}