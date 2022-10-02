const { developer_id } = require('../../config.json')

module.exports = {
    name: "sil",
    cooldawn: 5,
    guildOnly: true,
    aliases: ['silknk'],
    execute(message, args, Embed){
        
        if (message.author.id == developer_id){

        const sayı = parseInt(args[0]);
        if(isNaN(sayı)) return message.channel.send(Embed("", "Lütfen 2-100 Arası Bir Sayı Girin.", "info"));

        if(sayı <= 1 || sayı > 99) return message.channel.send(Embed("", "Silinecek Mesaj Sayısı En Az 2, En Fazla 100 Olabilir.", "error"));
            
        message.channel.bulkDelete(sayı+1, false).then(() => {
            return message.channel.send(Embed("",`${sayı} Adet Mesaj Başarıyla Temizlendi. ${"<@" + message.author.id + ">"}`, "yeşil"))
        })
        .catch(() => {
            return message.channel.send(Embed("", "14 Günden Eski Mesajlar Silinemez.", "error"))
        })}
        else{
            if(message.member.hasPermission("MANAGE_MESSAGES")){
            const sayı = parseInt(args[0]);
        if(isNaN(sayı)) return message.channel.send(Embed("", "Lütfen 2-100 Arası Bir Sayı Girin.", "info"));

        if(sayı <= 1 || sayı > 99) return message.channel.send(Embed("", "Silinecek Mesaj Sayısı En Az 2, En Fazla 100 Olabilir.", "error"));

        message.channel.bulkDelete(sayı+1, false).then(() => {
            return message.channel.send(Embed("",`${sayı} Adet Mesaj Başarıyla Temizlendi. ${"<@" + message.author.id + ">"}`, "yeşil"))
        })
        .catch(() => {
            return message.channel.send(Embed("", "14 Günden Eski Mesajlar Silinemez.", "error"))
        })}
        else{
            message.channel.send(Embed("", `${message.author}Bu Komutu Kullanmak İçin Gereken Yetkiye Sahip Değilsin`, "error"));
        }
        }
        
    }
}