const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");
const db = require('croxydb');

module.exports = {
    name: "sayaç",
    cooldown: 2,
    guildOnly: true,
    async execute(message, args, tag){
      
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
       
        if(message.channel.type == "dm")  return;
        if(message.channel.type !== "text") return;
              let duration = args[0];
              let sure = args[1];
              let sebep = args[2];
              let user = message.author
              let bisi;
              
              if (!duration || duration >= '60')
              {
              return message.reply(`Lütfen, geçerli bir süre belirtiniz.\nÖrnek olarak:!!hatırlat 10 dakika "sebep"`);
              }
        
             if (!sure || !sure == 'saniye' || !sure == 'dakika' || !sure == 'saat' || !sure == 'gün' ) 
             {
             return message.reply(`Süre belirtimi hatalı!\nÖrnek olarak: ${prefix}hatırlat 10 dakika sebep`)
           }
        
          if (!sebep) return message.reply('Lütfen, bir sebep belirtiniz.')
             
             message.reply(`Hatırlatıcı, başarılı bir şekilde ${args[0]} ${args[1]} sonrasına ayarlandı!`).then(message => message.react('\<:yesil:886266675987611660>'))
                         
              if (sure == 'saniye') bisi = 'seconds'
            if (sure == 'dakika') bisi = 'minutes'
            if (sure == 'saat') bisi = 'hours'
            if (sure == 'gün') bisi = 'days' 
            
              setTimeout(function(){
                let Zamanlayıcı = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`Nelix Hatırlatma Sistemi!`)
                .addField(`${message.author.username}, süre doldu!`, `Süre dolduğundan dolayı hatırlatıcı devreye girdi.`)
                .addField(`Hatırlatma Nedeni İse;`, sebep)
        
               return user.send(Zamanlayıcı);
              }, ms(`${duration} ${bisi}`));
        
            

    }

}

// \n\u200b
// \u200B