const db = require("croxydb");

module.exports = {
    name: "kısaltmalar",
    aliases: ["k"],
    execute(message, args, Embed, Discord, Tags, tag){
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')

        const infoEmbed = new Discord.MessageEmbed()
        .setTitle("\<:asdtf:890716390707843082> Kısaltması Olan Komutlar Ve Kısaltmaları")
        .setColor("#f5bc67")
        .addFields(
            {name: `${prefix}hoşgeldin-mesaj`, value: `(${prefix}hm), (${prefix}hmesaj)`},
            {name: `${prefix}ayrılma-mesaj`, value: `(${prefix}amesaj)`},
            {name: `${prefix}ping`, value: `(${prefix}ping)`},
            {name: `${prefix}sil`, value: `(${prefix}silknk)`},
            {name: `${prefix}tag`, value: `(${prefix}etiket)`},
            {name: `${prefix}yardım`, value: `(${prefix}help)`},
            // {name: `${prefix}`, value: `(${prefix})`},
        
        )

            message.channel.send(infoEmbed)
    }
}