module.exports = {
    name: "tdk",
    cooldown: 2,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
    }

}