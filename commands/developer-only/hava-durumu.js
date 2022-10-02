const Discord = require('discord.js');
const weather = require('weather-js');
const client = new Discord.Client();

module.exports = {
    name: "hava-durumu",
    cooldown: 10,
    guildOnly: true,
    aliases: ["hd"],
    execute(message, args,){
        const randomNumber = Math.floor(Math.random() * args[0]);
        if(!isNaN(randomNumber)) return message.lineReply("Lütfen Bir Şehir Girerek Tekrar Deneyiniz");
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if (err) 
            if (result === undefined || result.length === 0) {
                message.lineReply('Lütfen Bir Yer gir');
                return;
            }
            var current = result[0].current;
            var location = result[0].location;
            const embed = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`${current.observationpoint} için hava durumu`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86)
                .addField('Zaman Dilimi',`UTC${location.timezone}`, true)
                .addField('Derece Türü',location.degreetype, true)
                .addField('Sıcaklık',`${current.temperature} Derece`, true)
                .addField('Hava', `${current.feelslike}`, true)
                .addField('Rüzgar',current.winddisplay, true)
                .addField('Nem', `${current.humidity}%`, true)
                message.channel.send({embed});
        })

    }

}

// \n\u200b
// \u200B