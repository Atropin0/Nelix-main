const db = require('croxydb');

module.exports = (client, Tags) => {
    client.on("guildMemberAdd", async member => {

        const tag = db.fetch(`tag_${member.guild.id}`, '')
        if(tag == 'acik'){
            try{
                const tag_name = db.fetch(`tag_name_${member.guild.id}`, '')

                const newNickname = tag_name.replace("<kullanıcı>", member.displayName)
                member.setNickname(newNickname)
            } catch{}
        }

    })
}