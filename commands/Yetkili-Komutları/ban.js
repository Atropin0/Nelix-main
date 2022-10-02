const { developer_id } = require('../../config.json')

module.exports = {
    name: "ban",
    cooldown: 10,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){      // dfsd sdf  s sdf
        const mentionedPlayer = message.mentions.members.first();
        
        if (message.author.id == developer_id){
            if (!mentionedPlayer) return message.channel.send(Embed("", "Lütfen Bir Kullanıcıyı Etiketleyin!", "info"));
            message.guild.members.ban(mentionedPlayer)
            message.channel.send(Embed("", `**${mentionedPlayer.displayName}** Adlı Kullanıcı Sunucudan Banlandı`))
        }
        else{
            if(message.member.hasPermission("BAN_MEMBERS")){
            if (!mentionedPlayer) return message.channel.send(Embed("", "Lütfen Bir Kullanıcıyı Etiketleyin!", "info"));
            if(mentionedPlayer.id === developer_id) return message.lineReply(Embed("",'Benim botumla beni mi banlayacaksın kanka', "info"));
            if (mentionedPlayer.id == message.guild.owner.id) return message.channel.send(Embed("", "Sunucu Sahibini Atamazsın Zaten Buna Yetkim Yok :)", "error"));
            if (mentionedPlayer.id == message.author.id) return message.channel.send(Embed("", "Kendini Atamazsın!", "info"));
            if(mentionedPlayer.id === "851424794388987974") return message.channel.send(Embed("",'Botu Atamazsın :)', "error"));
            if (message.guild.member(mentionedPlayer).bannable) return message.channel.send(Embed("",'Bu kişinin rolü senden üstte veya rolleriniz aynı olduğu için bu kişiyi kickleyemezsin', "error"));
            message.channel.send(Embed("", `${mentionedPlayer} Adlı Kullanıcıyı Banlamak İstediğinize Emin Misiniz? Lütfen \`evet\` veya \`hayır\` Yazınız.`,)).then(msg => msg.delete({timeout: 20000}))

            message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 1, time: 20000}).then(collected => {
                

                if (collected.first().content.toLowerCase() == 'evet') {
                    message.guild.members.ban(mentionedPlayer)
                    message.lineReply(Embed("", `**${mentionedPlayer.displayName}** Adlı Kullanıcı Sunucudan Banlandı`))
                                        
                }
                else if (collected.first().content.toLowerCase() == 'hayır') {
                    message.lineReply(`İşlem İptal Edildi`)
                }
                
                else {
                    message.channel.send(Embed("", `Lütfen \`evet\` veya \`hayır\` Yazarak Tekrar Deneyiniz`)).then(msg => msg.delete({timeout: 20000}))
                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                        {max: 1, time: 20000}).then(collected => {
                            
            
                            if (collected.first().content.toLowerCase() == 'evet') {
                                message.guild.members.ban(mentionedPlayer)
                                message.channel.send(Embed("", `**${mentionedPlayer.displayName}** Adlı Kullanıcı Sunucudan Banlandı`))
                                                    
                            }
                            else if (collected.first().content.toLowerCase() == 'hayır') {
                                message.lineReply(`İşlem İptal Edildi`)
                            }
                            else {}
                        }).catch(() => {
                            message.lineReply("20 Saniye İçinde İşlem Onaylanmadığı İçin İptal Edildi")
                        });
                }
                
            }).catch(() => {
                message.lineReply("20 Saniye İçinde İşlem Onaylanmadığı İçin İptal Edildi")
            });}
        else{
            message.channel.send(Embed("", `${message.author}Bu Komutu Kullanmak İçin Gereken Yetkiye Sahip Değilsin`, "error"));
        }}

        
    }
}