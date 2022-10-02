const { developer_id } = require('../../config.json')

module.exports = {
    name: "kick",
    cooldown: 10,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){      // dfsd sdf  s sdf
        const mentionedPlayer = message.mentions.members.first();
        
        if (message.author.id == developer_id){
            if (!mentionedPlayer) return message.channel.send(Embed("", "Lütfen Bir Kullanıcıyı Etiketleyin!", "info"));
            mentionedPlayer.kick()
                    .then(() => {
                        message.delete();
                        message.channel.send(Embed("", `**${mentionedPlayer.displayName}** Sunucudan Atıldı`))
                    })
                    .catch(() => {
                        message.delete();
                    })
            
        }
        else{
            if(message.member.hasPermission("KICK_MEMBERS")){  
            if (!mentionedPlayer) return message.lineReply(Embed("", "Lütfen Bir Kullanıcıyı Etiketleyin!", "info"));
            if(mentionedPlayer.id === developer_id) return message.lineReply(Embed("",'Benim botumla beni mi kicklicen kanka', "error"));
            if (mentionedPlayer.id == message.guild.owner.id) return message.lineReply(Embed("", "Sunucu Sahibini Atamazsın Zaten Buna Yetkim Yok :)", "error"));
            if (mentionedPlayer.id == message.author.id) return message.lineReply(Embed("", "Kendini Atamazsın!", "info"));
            if(mentionedPlayer.id === "851424794388987974") return message.lineReply(Embed("",'Botu Atamazsın :)', "error"));
            if (message.guild.member(mentionedPlayer).bannable) return message.lineReply(Embed("",'Bu kişinin rolü senden üstte veya rolleriniz aynı olduğu için bu kişiyi kickleyemezsin', "error"));
            message.channel.send(Embed("", `${mentionedPlayer} Adlı Kullanıcıyı Atmak İstediğinize Emin Misiniz?`,)).then(async msg => {

            await msg.react("👍");

            const filter = (reaction, user) => reaction.emoji.name == "👍" && user.id == message.author.id;
            const collector = msg.createReactionCollector(filter, { max: 1, time: 10000 });

            collector.on("collect", (reaction, user) => {
                mentionedPlayer.kick()
                    .then(() => {
                        msg.delete();
                        message.channel.send(Embed("", `**${mentionedPlayer.displayName}** Sunucudan Atıldı`))
                    })
                    .catch(() => {
                        message.channel.send(Embed("", `**${mentionedPlayer.displayName}** Adlı Kişinin Yetkisi Benim Yetkimden Daha Büyük Olduğu İçin Bu Kişiyi Sunucudan Atamıyorum!`, "error"))
                    })
            })

            collector.on("end", (reaction, user) => {
                if (!reaction.size) {
                    message.channel.send(Embed("", "Belirtilen Süre İçerisinde İşlemi Onaylamadığınız İçin İptal Edildi!", "error")).then(msg => msg.delete({timeout:10000}));
                    msg.delete();
                }
            })

        })}
        else{
            message.channel.send(Embed("", `${message.author}Bu Komutu Kullanmak İçin Gereken Yetkiye Sahip Değilsin`, "error"));
        }}
    }
}