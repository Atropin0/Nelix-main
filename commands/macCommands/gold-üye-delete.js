const db = require('croxydb')

module.exports = {
    name: "gold-remove",
    cooldown: 2,
    guildOnly: true,
    developerOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){
        const gold_üye_id = args[0]
        if (!gold_üye_id) return message.lineReply('Gold Üye Olacak Kişinin İdsini Girmelisin')

  
            db.delete(`goldüye_${gold_üye_id}`)
            message.channel.send(`<@${gold_üye_id}> adlı kişi gold üyelikten çıkarıldı`).then(message => message.react('\<:yesil:886266675987611660>'))


    

    }

}

// \n\u200b
// \u200B