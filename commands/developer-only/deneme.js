
const discord = require('discord.js'); //modüller

module.exports = {
    name: "deneme",
    cooldown: 2,
    guildOnly: true,
    developerOnly: true,
    aliases: ["dn"],
    execute(message, args){

        client.guilds.cache.forEach(guild => {
            let channel = guild.channels.cache.filter(chx => chx.type === "text").find(x => x.position === 0);
        channel.createInvite({ maxAge: 0, maxUses: 0 }).then(async (invite) => {
        message.channel.send(`${invite.url}`)
        })
        })

       }
              
      
    }

//message.guild.channels.cache.filter(u => {
// u.delete()
// })