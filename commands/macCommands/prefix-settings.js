const db = require('croxydb')
const { developer_id }= require('../../config.json');

module.exports = {
    name: "prefix-ayarla",
    cooldown: 2,
    guildOnly: true,
    developerOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){
        const prefix = args[0]
        
            if (message.author.id == developer_id){
                if(!args[0]) return message.channel.send(Embed("", "Lütfen Yeni Bir Prefix Giriniz", "info"));
                if(args[0].length > 20) return message.channel.send(Embed("", "Prefix Uzunluğu En Fazla 20 Karakter Olabilir :(", "error"));
                db.set(`guildprefix_${message.guild.id}`, prefix)
                message.channel.send(Embed("", `Prefix Başarıyla \`${args[0]}\` Olarak Ayarlandı\n\`prefix-sıfırla\` Yazarak Prefixi Sıfırlayabilirsiniz`, "yeşil")).then(msg => msg.react('\<:yesil:886266675987611660>'))
            }
            else{
            if(message.member.hasPermission("ADMINISTRATOR")){
            if(!args[0]) return message.channel.send(Embed("", "Lütfen Yeni Bir Prefix Giriniz", "info"));
            if(db.fetch(`premiumguild_${message.guild.id}`)){
            if(args[0].length > 10) return message.channel.send(Embed("", "Prefix Uzunluğu En Fazla 10 Karakter Olabilir :(", "error"));
    
            db.set(`guildprefix_${message.guild.id}`, prefix)
            return message.channel.send(Embed("", `Prefix Başarıyla \`${args[0]}\` Olarak Ayarlandı\n\`prefix-sıfırla\` Yazarak Prefixi Sıfırlayabilirsiniz`, "yeşil")).then(msg => msg.react('\<:yesil:886266675987611660>'))}
    
            else{
            if(args[0].length > 2) return message.channel.send(Embed("", "Prefix Uzunluğu En Fazla 2 Karakter Olabilir :(", "error"));
    
            db.set(`guildprefix_${message.guild.id}`, prefix)
            return message.channel.send(Embed("", `Prefix Başarıyla \`${args[0]}\` Olarak Ayarlandı\n\`prefix-sıfırla\` Yazarak Prefixi Sıfırlayabilirsiniz`, "yeşil")).then(msg => msg.react('\<:yesil:886266675987611660>'))
            }}
            else{
                message.channel.send(Embed("", `${message.author}Bu Komutu Kullanmak İçin Gereken Yetkiye Sahip Değilsin`, "error"));
            }}

    }

}

// \n\u200b
// \u200B