const db = require('croxydb')

module.exports = {
    name: "ban-remove",
    cooldown: 2,
    guildOnly: true,
    developerOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){
        const gold_üye_id = args[0]
        if (!gold_üye_id) return message.lineReply('Banlanacak Kişinin İdsini Girmelisin')

  
            db.delete(`banned_üye_${gold_üye_id}`)
            message.channel.send(`<@${gold_üye_id}> adlı kişinin Banı kaldırıldı`).then(message => message.react('\<:yesil:886266675987611660>'))


    

    }

}

// \n\u200b
// \u200B