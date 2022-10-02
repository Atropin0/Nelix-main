const db = require('croxydb')
const { developer_id } = require('../../config.json')

module.exports = {
    name: "premium",
    cooldown: 2,
    guildOnly: true,
    developerOnly: true,
    async execute(message, args, Embed, Discord, Tags, tag){

        if(args[0] == "add"){
            message.delete()
            message.channel.send(Embed("", `Bu sunucu artık premium sunucudur <@${developer_id}>`, "yeşil")).then(message => message.react('\<:yesil:886266675987611660>'))
        await db.set(`premiumguild_${message.guild.id}`, 'premium')
    } 
    else if(args[0] == "remove"){
        message.delete()
        db.delete(`premiumguild_${message.guild.id}`, 'premium')
    }else{
        if (db.fetch(`premiumguild_${message.guild.id}`)){
            message.lineReply('Sunucu Premium')
        }else{
            message.lineReply('Sunucu Premium Değil')
        }
    }

    
      

    }

}

// \n\u200b
// \u200B