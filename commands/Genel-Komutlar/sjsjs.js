const {developer_id} = require('../../config.json')

module.exports = {
    name: "sjsj",
    cooldown: 2,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){
        
        if (message.author.id == developer_id){
            message.channel.send("developer olan")
        }
        else{ 
        message.channel.send("developer olmayan")
    }
    }

}





// if (message.author.id.includes([banned_users])