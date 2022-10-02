const Discord = require('discord.js');

module.exports = {
    name: "pm",
    cooldown: 5,
    guildOnly: true,
    async execute(message, args, Embed){      // dfsd sdf  s sdf
      
        
        const afk = new Discord.MessageEmbed()
          .setTitle(`Kurallar`)
          .setDescription('\<:pm_logo:987419950702551060>')
          .setColor('#f5bc67')
          .setFooter('Plomien E-Sports') 
          message.channel.send(afk)
          
         
            
          

    }
}