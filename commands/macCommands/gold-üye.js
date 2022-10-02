const db = require('croxydb')

module.exports = {
    name: "gk",
    cooldown: 2,
    guildOnly: true,
    developerOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){
        
        if (db.fetch(`goldüye_${message.author.id}`)){
            message.lineReply('Gold üyesin amk')
        }else{
            message.lineReply('Gold üye değilsin kanka kb')
        }
      
    }

}

// \n\u200b
// \u200B