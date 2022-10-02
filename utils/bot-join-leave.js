const db = require('croxydb')

module.exports = (client, message, args, Embed, Discord) => {

    client.on("guildCreate", async guild => {

        try {
            db.set(`guildprefix_${guild.id}`, '.')
            db.set(`sohbetdata_${guild.id}`, 'acik')
            db.set(`hmmesaj_${guild.id}`, 'kapali')
            db.set(`amesaj_${guild.id}`, 'kapali')
            db.set(`otorol_${guild.id}`, 'kapali')
        } catch { 
            console.log(error)
        }

    })

    client.on("guildDelete", async guild => {
        try {
            db.delete(`guildprefix_${guild.id}`)
            db.delete(`sohbetdata_${guild.id}`)
            db.delete(`hmmesaj_${guild.id}`)
            db.delete(`amesaj_${guild.id}`)
            db.delete(`otorol_${guild.id}`)
            db.delete(`premiumguild_${guild.id}`)
        } catch { }
    })

}
// \<:Bruh_what:897155878594166825>