const db = require('croxydb');

module.exports = (client, Discord) => {

    client.on("guildMemberAdd", member => {

        const otorol = db.fetch(`otorol_${member.guild.id}`, '')
        if(otorol == 'acik'){
        const otorol_id = db.fetch(`otorol_id_${member.guild.id}`, '')

            const role = member.guild.roles.cache.get(otorol_id)
            if(!role) return;

            member.roles.add(role)
            .catch(() => console.log("test31"));}

        

    })

}