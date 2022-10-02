const { vip_id } = require('../../config.json')
const db = require('croxydb')

module.exports = {
    name: "mesaj",
    cooldown: 5,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){

        const channel = message.mentions.channels.first();
        if(!channel) return message.channel.send(Embed("", "Lütfen Bir Kanal Etiketleyiniz.", "info"));

        const text = args.splice(1, args.length-1).join(" ");
        if(!text) return message.channel.send(Embed("", 'Lütfen Bir Mesaj Yazınız.   Ör.(.mesaj "#kanal" "Mesajınız"', "info"));
        if(db.fetch(`goldüye_${message.author.id}`)){
        const infoEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(text)
            .setFooter(`${message.member.user.username}#${message.member.user.discriminator}`, message.member.user.avatarURL({ dynamic: true, format: 'png', size: 256 }))

            channel.send(infoEmbed).then(msg => {
                message.delete();
        })}
        else{

            channel.send(text).then(msg => {
            message.delete();
        })

        }
    }
}