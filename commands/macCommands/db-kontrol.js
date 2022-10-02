const db = require('croxydb')

module.exports = {
    name: "db-control",
    cooldown: 2,
    guildOnly: true,
    developerOnly: true,
    async execute(message, args, Embed, Discord){
        const Aktif = "Oluşturulmuş \<:online:893176812291637251>";
        const Kapalı = "Oluşturulmamış \<:offline:893176853316132874>"

        let prefix_msg;
        if(db.fetch(`guildprefix_${message.guild.id}`)) prefix_msg = Aktif
        else prefix_msg  = Kapalı

        let chat_msg;
        if(db.fetch(`sohbetdata_${message.guild.id}`)) chat_msg = Aktif
        else chat_msg  = Kapalı

        let hm_msg;
        if(db.fetch(`hmmesaj_${message.guild.id}`)) hm_msg = Aktif
        else hm_msg  = Kapalı

        let a_msg;
        if(db.fetch(`amesaj_${message.guild.id}`)) a_msg = Aktif
        else a_msg  = Kapalı
        if (db.fetch(`amesaj_${message.guild.id}`) && db.fetch(`hmmesaj_${message.guild.id}`) && db.fetch(`sohbetdata_${message.guild.id}`) && db.fetch(`guildprefix_${message.guild.id}`)){
            message.channel.send(`> **Prefix** Sistemi: ${prefix_msg}\n> **Chat** Sistemi: ${chat_msg}\n> **Hoşgeldiniz** Sistemi: ${hm_msg}\n> **Ayrılma Mesajı** Sistemi: ${a_msg}`)
        }else{

        message.channel.send(`> **Prefix** Sistemi: ${prefix_msg}\n> **Chat** Sistemi: ${chat_msg}\n> **Hoşgeldiniz** Sistemi: ${hm_msg}\n> **Ayrılma Mesajı** Sistemi: ${a_msg}\n\nOluşturulmamış sistemleri oluşturmamı ister misin Atropin`).then(async function (sentEmbed) {
            const emojiArray = ["✅"];
            const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
            await sentEmbed.react(emojiArray[0]).catch(function () { });
            var reactions = sentEmbed.createReactionCollector(filter, {
                time: 10000
            });
        reactions.on("collect", async function (reaction) {
                if (reaction.emoji.name === "✅") {
         try {

            if (!db.fetch(`guildprefix_${message.guild.id}`)){
                db.set(`guildprefix_${message.guild.id}`, '.')
            }else{}

            if (!db.fetch(`sohbetdata_${message.guild.id}`)){
                db.set(`sohbetdata_${message.guild.id}`, 'acik')
            }else{}

            if (!db.fetch(`hmmesaj_${message.guild.id}`)){
                db.set(`hmmesaj_${message.guild.id}`, 'kapali')
            }else{}

            if (!db.fetch(`amesaj_${message.guild.id}`)){
                db.set(`amesaj_${message.guild.id}`, 'kapali')
            }else{}
            message.channel.send("Eksik Data Base'ler Oluşturuldu").then(message => message.react('\<:yesil:886266675987611660>'))
    
  } catch (err) {
  //
    message.channel.send(`**Hata:** \n\`\`\`js\n${err}\n\`\`\``);
  
};

        }
    })
})}

    }

}

// \n\u200b
// \u200B