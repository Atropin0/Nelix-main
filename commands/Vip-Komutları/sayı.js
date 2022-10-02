const { vip_id } = require('../../config.json')

module.exports= {
    name: "sayı",
    cooldown: 2,
    async execute(message, args, Embed, Discord, Tags, tag){
     
        if(!args[0]) return message.channel.send(Embed("", "Lütfen Bir Sayı Yazınız", "info"));
        if(vip_id.includes(message.author.id)){
        if(args[0].length > 10) return message.channel.send(Embed("", "En Fazla 5 Haneli Bir Sayı Yazabilirsin", "error"));

        const randomNumber = Math.floor(Math.random() * args[0]);
        if(isNaN(randomNumber)) return message.lineReply("Lütfen Bir Sayı Girerek Tekrar Deneyiniz");

        message.channel.send(randomNumber);}
        else{

            if(args[0].length > 3) return message.channel.send(Embed("", "En Fazla 5 Haneli Bir Sayı Yazabilirsin", "error"));

            const randomNumber = Math.floor(Math.random() * args[0]);
            if(isNaN(randomNumber)) return message.lineReply("Lütfen Bir Sayı Girerek Tekrar Deneyiniz");

            message.channel.send(randomNumber);

        }

    }
}