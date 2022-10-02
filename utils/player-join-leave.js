const db = require('croxydb')
const Discord = require('discord.js')

module.exports = (client, Tags, Embed, message) => {
   
    // Player Join
    client.on('guildMemberAdd', async member => {
        // if(message.channel.type == "dm") return;
        const hm_mesaj = db.fetch(`hmmesaj_${member.guild.id}`, '')
        const hm_text =  db.fetch(`hm_msg_${member.guild.id}`, '')
        const hm_channel = db.fetch(`hm_msg_chnl_${member.guild.id}`, '')

        if (hm_mesaj == 'acik') {
            const channel = member.guild.channels.cache.get(hm_channel);
            if(!channel) return;
            const text = hm_text.replace('<kullanıcı>', member.displayName).replace("<toplam_üye>", member.guild.memberCount);
            const hoşgeldin = new Discord.MessageEmbed()
            .setTitle('Yeni Kullanıcı')
            .setDescription(text)
            .setColor("#59ff80")
            .setThumbnail(member.user.avatarURL())
            .setFooter('Nelix Bot', "https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256")
            channel.send(hoşgeldin);
        }

    })

    // Player Leave
    client.on('guildMemberRemove', async member => {
        // if(message.channel.type == "dm") return;
        const amesaj = db.fetch(`amesaj_${member.guild.id}`, '')
        const amsg_text = db.fetch(`amesaj_msg_${member.guild.id}`, '')
        const amsg_channel = db.fetch(`amesaj_msg_chnl_${member.guild.id}`, '')

        if (amesaj == 'acik') {
            const channel = member.guild.channels.cache.get(amsg_channel);
            if(!channel) return;
            const text = amsg_text.replace('<kullanıcı>', member.displayName).replace("<toplam_üye>", member.guild.memberCount);
            const bb = new Discord.MessageEmbed()
            .setTitle('Sunucudan Ayrıldı')
            .setDescription(text)
            .setColor("#ff7d7d")
            .setThumbnail(member.user.avatarURL())
            .setFooter('Nelix Bot', "https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256")
            channel.send(bb);
        }

    })
}