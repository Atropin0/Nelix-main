const db = require('croxydb')

module.exports = {
    name: "ban-add",
    cooldown: 2,
    guildOnly: true,
    developerOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){
        const gold_üye_id = args[0]
        if (!gold_üye_id) return message.lineReply("Banlanacak kişinin İD'sini girmelisin")


            db.set(`banned_üye_${gold_üye_id}`, 'gold')
            message.channel.send(`<@${gold_üye_id}> adlı kişi Bottan banlandı`).then(message => message.react('\<:yesil:886266675987611660>'))


    }

}

// \n\u200b
// \u200B