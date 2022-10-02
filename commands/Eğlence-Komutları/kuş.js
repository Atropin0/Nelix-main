const { developer_id } = require('../../config.json');
const db = require('croxydb');

module.exports = {
    name: "kuş",
    cooldown: 5,
    execute(message, args, Embed, Discord){

        if(message.guild.id == "833351740781756426") return message.delete(), message.channel.send(`Mert Abimin Sunucusunda Kullanamazsın ${message.author}`)

        if (message.author.id == developer_id.id){
            message.lineReply(Embed("", "**Senin Kuş  99CM ** 🍆", "RANDOM"))
        }
        else if(message.author.id == "311369874246991884"){
            message.lineReply(Embed("", "**Senin Kuş  98CM ** 🍆", "RANDOM"))
        }
        else if(message.author.id == "814245581881868329"){
            message.lineReply(Embed("", "**Senin Kuş  97CM ** 🍆", "RANDOM"))
        }
        else if(message.author.id == "796651515574091776"){
            message.lineReply(Embed("", "**Abi senin ki o kadar uzun ki discord o kadar uzun sayıyı yazmama izin vermiyor **", "RANDOM"))
        }
        else if(message.author.id == "836521792062750731"){
            message.lineReply(Embed("", "**Senin Kuş  98CM ** 🍆", "RANDOM"))
        }
        else if(message.author.id == "784154250838016010"){
            message.lineReply(Embed("", "**Senin Kuş  99CM ** 🍆", "RANDOM"))
        }
        else if(message.author.id == "376445823937937408"){
            message.lineReply(Embed("", "Oyy Boosted Dia Dodom Naber ya ", "RANDOM"))
        }
        else{
            if(db.fetch(`premiumguild_${message.guild.id}`)){
            message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message => {
                const espriler = [' **Senin Kuş  18CM ** 🍆 ' ,'**Senin Kuş  11CM ** 🍆' ,'**Senin Kuş 32CM  ** 🍆'  ,'**Senin Kuş  8CM  ** 🍆' ,'**Senin Kuş  65CM  ** 🍆' ,'**Senin Kuş 5CM  ** 🍆' ,'**Senin Kuş 31CM  ** 🍆' ,'**Senin Kuş  14CM ** 🍆' ,'**Senin Kuş 1CM ** 🍆'];
                   const espri = espriler[Math.floor(Math.random() * espriler.length)];
                        setTimeout(() => {
                            message.edit(`${espri}`)
                        }, 1000);
              })
        
        }else{ message.lineReply(Embed("", "Bu komutu premium sunucu komutudur !", "info"))}}

       }
}
