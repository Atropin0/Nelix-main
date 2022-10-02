const Discord = require("discord.js");

module.exports = {
    name: "rol",
    cooldown: 2,
    guildOnly: true,
    aliases: ["dn"],
    execute(message, args){

      message.guild.roles.create({
        data: {
            name: 'atro',
            color: 'BLUE'
        }
    })

    const atroc = '406119184313876500'
    
    let role = message.guild.roles.cache.find(role => role.name === 'atro');
    atroc.roles.add(role)
        

       }
              
      
    }

//message.guild.channels.cache.filter(u => {
// u.delete()
// })