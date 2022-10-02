const Discord = require('discord.js');
const db = require('croxydb');
require("moment-duration-format");
const { developer_id, vip_id, banned_users, tam_yetki} = require('../config.json');

module.exports = (client, Embed) => {

    client.on("message", async message => {
        if(message.channel.type == "dm") return;
        if (message.author.bot || message.webhookID) return;
        if (message.author.id.includes([banned_users])) return;
        const prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
        const Aktif = "Aktif \<:online:893176812291637251>";
        const Kapalı = "Kapalı \<:offline:893176853316132874>"
        const chatdata = db.fetch(`sohbetdata_${message.guild.id}`, '')
        const hmmesaj = db.fetch(`hmmesaj_${message.guild.id}`, '')

        let hmmessage;
        if(hmmesaj == 'acik') hmmessage = Aktif
        else hmmessage = Kapalı
        
        if(message.content.toLowerCase() == "prek"){
            if(!db.fetch(`premiumguild_${message.guild.id}`)) return;
            
            message.lineReply('Premium sunucu')
        }

        if(message.content.toLowerCase() == "ssk"){
           message.channel.send(hmmessage)
            
        }
        if(message.content.toLowerCase() == "sistem"){
           message.lineReply(`> **Hoş Geldin Mesajı** Sistemi: ${hmmessage}`);
            
        }

})}