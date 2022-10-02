const db = require("croxydb");

module.exports= {
    name: "yazı-tura",
    cooldown: 2,
    premiumOnly: true,
    async execute(message, args, Embed, Discord, Tags, tag){
     
        const msg = await message.channel.send(Embed("", "Yazı Tura Atılıyor...", "#ff6f5c"))

        setTimeout(() => {
            
            msg.delete();

            const randomNumber = Math.floor(Math.random() * 100) + 1;
            let path = "";
            if(randomNumber <= 50){
                path = 'images/yazı-new.png';
            }
            else{
                path = 'images/tura-new.png';
            }
            
            
            const attachment = new Discord.MessageAttachment(path);
            const infoEmbed = new Discord.MessageEmbed()
                .setTitle("Yazı Tura Oyunu")
                .setImage(attachment)
            
             
            message.channel.send(infoEmbed);


        }, 2000);
        


    }
}