// const { banned_users } = require('../config.json');
const Discord = require('discord.js');
const categorylist = require("fs")
const { MessageButton } = require('discord-buttons');
const moment = require("moment");
const os = require("os");
const db = require('croxydb');
require("moment-duration-format");
const { developer_id, vip_id, banned_users, tam_yetki} = require('../config.json');
const { exit } = require('process');
const Embed = require('./embed')

module.exports = (client, Tags) => {
    client.on("message", async message => {
        if (db.fetch(`banned_üye_${message.author.id}`)) return;
        if(message.channel.type == "dm") return;
        if (message.author.bot || message.webhookID) return;
        if (db.fetch(`banned_üye_${message.author.id}`)) return;

        const Aktif = "Aktif \<:online:893176812291637251>";
        const Kapalı = "Kapalı \<:offline:893176853316132874>"
        const chatdata = db.fetch(`sohbetdata_${message.guild.id}`, '')
        const hmmesaj = db.fetch(`hmmesaj_${message.guild.id}`, '')    
        
        let prefix;
        if (db.fetch(`guildprefix_${message.guild.id}`)) prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
        else prefix = '.'

        let hmmessage;
        if(hmmesaj == 'acik') hmmessage = "Aktif \<:online:893176812291637251>";
        else hmmessage = "Kapalı \<:offline:893176853316132874>"

        let chatt;
        if(chatdata == 'acik') chatt = "Aktif \<:online:893176812291637251>";
        else chatt = "Kapalı \<:offline:893176853316132874>"


    
    //!                                                                Developer Only Commands

    
    if(message.content.toLowerCase() == "nelix"){
        if (message.author.id == developer_id){
            message.channel.startTyping()
            setTimeout(() => {
                const espriler = [`Efendim ${message.author.username}` ,'Ne yapmamı istersin ?'];
                           const espri = espriler[Math.floor(Math.random() * espriler.length)];
                    message.lineReply(espri)
        
                message.channel.stopTyping()
            }, 300);

            message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 1, time: 40000}).then(collected => {
                

                if (collected.first().content.toLowerCase() == 'sunucular') {
                        const guildArray = client.guilds.cache.array()
                        while (guildArray.length) {
                            const embed = new Discord.MessageEmbed();
                            const guilds = guildArray.splice(0,25);
                            for (const guild of guilds) {
                                embed.addField(`**${guild.name}** - Üyeleri : \`${guild.memberCount}\``, `Sunucu İD: \`${guild.id}\``)
                            embed.setTitle('Botun bulunduğu sunucuların listesi')
                            embed.setColor("#f5bc67")
                            embed.setDescription(`**${client.guilds.cache.size}**  tane sunucu beni kullanıyor ${message.author.username}`)
                        }
                          message.lineReply(embed);
                        }
                    
                                        
                }
                else if (collected.first().content.toLowerCase() == 'kapat') {
                    message.lineReply(`Bot 5 Saniye Sonra Kapatılacak ${message.author.username}`)
                    setTimeout(() => {
                    exit()
                    }, 5000);
                }
                else if (collected.first().content.toLowerCase() == 'ram kullanımı') {
                    
                    message.lineReply((process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB")
                }
                else if (collected.first().content.toLowerCase() == 'boşver') {
                    message.lineReply(`:thumbsup:`)
                    
                }
                else if (collected.first().content.toLowerCase() == 'iptal') {
                    message.lineReply(`:thumbsup:`)
                    
                }
                else if (collected.first().content.toLowerCase() == 'help') {
                    const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Developer Only Commands")
            .addFields(
                {name: `Sunucuları Listeleme`, value: `\`sunucular\``, inline: true},
                {name: `Botu Kapatır`, value: `\`KAPAT\``, inline: true},
                {name: `Sunucudaki Kişi Sayısı`, value: `\`sunucuda kaç kişi var\``, inline: true},
                {name: `Sunucuyu Premium Yapar`, value: `\`premium ekle\``, inline: true},
                {name: `Sunucudaki Premiumu Kaldırır`, value: `\`premium kaldır\``, inline: true},
                {name: `Botu Sunucudan Çıkarma`, value: `\`leave\``, inline: true},
                {name: `Sistemleri Görüntüler`, value: `\`sistem bilgi\``, inline: true},
                {name: `Sistemleri Sıfırlar`, value: `\`sistemleri sıfırla\``, inline: true},
                {name: `Sistemleri Kapatır`, value: `\`sistemleri kapat\``, inline: true},
               
            )
            .setColor("#f5bc67")
            .setFooter("Nelix Bot", "https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256")
            // .setImage("https://i.hizliresim.com/smetn0r.gif")
        
        message.lineReply(infoEmbed);
                    
                }
                else if (collected.first().content.toLowerCase() == 'komutlar') {
                    const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Developer Only Commands")
            .addFields(
                {name: `Sunucuları Listeleme`, value: `\`sunucuları listele\``, inline: true},
                {name: `Botu Kapatır`, value: `\`KAPAT\``, inline: true},
                {name: `Sunucudaki Kişi Sayısı`, value: `\`sunucuda kaç kişi var\``, inline: true},
                {name: `Sunucuyu Premium Yapar`, value: `\`premium ekle\``, inline: true},
                {name: `Sunucudaki Premiumu Kaldırır`, value: `\`premium kaldır\``, inline: true},
                {name: `Botu Sunucudan Çıkarma`, value: `\`leave\``, inline: true},
                {name: `Sistemleri Görüntüler`, value: `\`sistem bilgi\``, inline: true},
                {name: `Sistemleri Sıfırlar`, value: `\`sistemleri sıfırla\``, inline: true},
                {name: `Sistemleri Kapatır`, value: `\`sistemleri kapat\``, inline: true},
                {name: `Ram Kullanımını Gösterir`, value: `\`ram kullanımı\``, inline: true},
                {name: `Anında bir önceki measajı siler`, value: `\`,\``, inline: true},
                {name: `Mesajın İçinde '*' Varsa O Mesajı 2 Saniye Sonra Siler`, value: `\`*\``, inline: true},
               
            )
            .setColor("#f5bc67")
            .setFooter("Nelix Bot", "https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256")
            // .setImage("https://i.hizliresim.com/smetn0r.gif")
        
        message.lineReply(infoEmbed);
                    
                }
                else if (collected.first().content.toLowerCase() == 'bilgi') {
                
                    const amsg = db.fetch(`amesaj_${message.guild.id}`, '')
                    const amsg_text = db.fetch(`amesaj_msg_${message.guild.id}`, '')

                    const hm_msg = db.fetch(`hmmesaj_${message.guild.id}`, '')
                    const hm_text =  db.fetch(`hm_msg_${message.guild.id}`, '')

                    const otorol = db.fetch(`otorol_${message.guild.id}`, '')
                    const otorol_id = db.fetch(`otorol_id_${message.guild.id}`, '')

                    const tag = db.fetch(`tag_${message.guild.id}`, '')
                    const tag_name = db.fetch(`tag_name_${message.guild.id}`, '')

                    let aMesajEnabled;
                    if(amsg == 'acik') aMesajEnabled = "Aktif \<:online:893176812291637251>";
                    else aMesajEnabled = "Kapalı \<:offline:893176853316132874>"

                    let hmMesajEnabled;
                    if(hm_msg == 'acik') hmMesajEnabled = "Aktif \<:online:893176812291637251>";
                    else hmMesajEnabled = "Kapalı \<:offline:893176853316132874>"

                    let otorolEnabled;
                    if(otorol == 'acik') otorolEnabled = "Aktif \<:online:893176812291637251>";
                    else otorolEnabled = "Kapalı \<:offline:893176853316132874>"

                    let otorol_renk;
                    if(tag == 'acik') tagmesaj = "Aktif \<:online:893176812291637251>";
                    else tagmesaj = "Kapalı \<:offline:893176853316132874>"


                        let hmmesaj;
                        if(hm_msg == 'acik') hmmesaj = hm_text
                        else hmmesaj = "Hoşgeldin Mesajı Ayarlanmadı \<a:error:886605697033314414>"
                
                        let amesaj;
                        if(amsg == 'acik') amesaj = amsg_text
                        else amesaj = "Ayrılma Mesajı Ayarlanmadı \<a:error:886605697033314414>"
                
                        let tagmesaj;
                        if(tag == 'acik') tagmesaj = tag_name
                        else tagmesaj = "Otomatik İsim Ayarlanmadı \<a:error:886605697033314414>"
                        
                        let otorolmesaj;
                        if(otorol == 'acik') otorolmesaj ="<@&" + otorol_id + ">"
                        else otorolmesaj = "Otomatik Rol Ayarlanmadı \<a:error:886605697033314414>"
                
                        return message.channel.send(`> **Hoş Geldin Mesajı** Sistemi: ${hmMesajEnabled}\n> **Ayrılma Mesajı** Sistemi: ${aMesajEnabled}\n> **Oto Rol** Sistemi: ${otorolEnabled}\n> **Link Engelleme** Sistemi: ${linkEnabled}\n> **Sohbet** Mesajları: ${chatEnabled}\n> **Küfür Engelleme** Sistemi: ${küfürEnabled}\n\n\n> **Hoş Geldin Mesajı**: ${hmmesaj}\n> **Ayrılma Mesajı**: ${amesaj}\n> **Otomatik İsim**: ${tagmesaj}\n> **Oto Rol**: ${otorolmesaj}`)
                    
                }
                else if (collected.first().content.toLowerCase() == 'sistemleri kapat') {
                    hmMesajdata.enabled = false;
                    db.update({welcome_message: hmMesajdata}, {where: {guild_id: message.guild.id}})
        
                    aMesajdata.enabled = false;
                    db.update({leave_message: aMesajdata}, {where: {guild_id: message.guild.id}})
        
                    chatdata.enabled = false;
                    db.update({chat: chatdata}, {where: {guild_id: message.guild.id}})
        
                    otoroldata.enabled = false;
                    db.update({auto_role: otoroldata}, {where: {guild_id: message.guild.id}})
        
                    linkdata.enabled = false;
                    db.update({link_protect_enabled: linkdata}, {where: {guild_id: message.guild.id}})
        
                    tagdata.enabled = false;
                    db.update({tag: tagdata}, {where: {guild_id: message.guild.id}})
        
                    küfürdata.enabled = false;
                    db.update({küfür: küfürdata}, {where: {guild_id: message.guild.id}})
        
                    return message.lineReply(Embed("",`Açık Olan Sistemler Başarıyla Kapatıldı ${message.author.username}`, "yeşil"))
                }              
                
                else {
                   
                }
                
            }).catch(() => {
                
            });
        }
        else{
            message.lineReply('Şu anlık sadece Botun geliştiricisi bunu kullanabilir');
        }
    }

    const possibleLinks = ["*", 'dl'];
    possibleLinks.some(word => {
        if(message.content.toLowerCase().includes(word)){
            if (message.author.id == developer_id){
                
                message.delete({timeout: 2000})
                return 
            }else if (message.author.id == "814245581881868329"){
                
                message.delete({timeout: 2000})
                return 
            }
            else{}
        }
    });

    if(message.content == ","){
        if (message.author.id == developer_id){
            message.channel.bulkDelete(2, false)
        }else if (message.author.id == "814245581881868329"){
            message.channel.bulkDelete(2, false)
        }
        else{}
    }

    if(message.content == "leave"){
        if (message.author.id == developer_id){
        message.guild.leave();
        }
        else{}
    }

    if(message.content == "pr"){
        if (message.author.id == developer_id){
            message.channel.send(`sunucu prefixi \`${prefix}\``)
        }
        else{}
    }

    if(message.content == "bilgi"){
        if (message.author.id == developer_id){
            
            const amsg = db.fetch(`amesaj_${message.guild.id}`, '')
            const amsg_text = db.fetch(`amesaj_msg_${message.guild.id}`, '')

            const hm_msg = db.fetch(`hmmesaj_${message.guild.id}`, '')
            const hm_text =  db.fetch(`hm_msg_${message.guild.id}`)

            const otorol = db.fetch(`otorol_${message.guild.id}`, '')
            const otorol_id = db.fetch(`otorol_id_${message.guild.id}`, '')

            const tag = db.fetch(`tag_${message.guild.id}`, '')
            const tag_name = db.fetch(`tag_name_${message.guild.id}`, '')

            const kf_engelleme = db.fetch(`kf_engelleme_${message.guild.id}`, '')

            const küfür = db.fetch(`küfür_${message.guild.id}`, '')

            const chatdata = db.fetch(`sohbetdata_${message.guild.id}`, '')

            let aMesajEnabled;
            if(amsg == 'acik') aMesajEnabled = "Aktif \<:online:893176812291637251>";
            else aMesajEnabled = "Kapalı \<:offline:893176853316132874>"

            let linkEnabled;
            if(kf_engelleme == 'acik') linkEnabled = "Aktif \<:online:893176812291637251>";
            else linkEnabled = "Kapalı \<:offline:893176853316132874>"

            let küfürEnabled;
            if(küfür == 'acik') küfürEnabled = "Aktif \<:online:893176812291637251>";
            else küfürEnabled = "Kapalı \<:offline:893176853316132874>"

            let chatEnabled;
            if(chatdata == 'acik') chatEnabled = "Aktif \<:online:893176812291637251>";
            else chatEnabled = "Kapalı \<:offline:893176853316132874>"

            let hmMesajEnabled;
            if(hm_msg == 'acik') hmMesajEnabled = "Aktif \<:online:893176812291637251>";
            else hmMesajEnabled = "Kapalı \<:offline:893176853316132874>"

            let otorolEnabled;
            if(otorol == 'acik') otorolEnabled = "Aktif \<:online:893176812291637251>";
            else otorolEnabled = "Kapalı \<:offline:893176853316132874>"

            let otorol_renk;
            if(tag == 'acik') tag_msg = "Aktif \<:online:893176812291637251>";
            else tag_msg = "Kapalı \<:offline:893176853316132874>"


                let hmmesaj;
                if(hm_msg == 'acik') hmmesaj = hm_text
                else hmmesaj = "Hoşgeldin Mesajı Ayarlanmadı \<a:error:886605697033314414>"
        
                let amesaj;
                if(amsg == 'acik') amesaj = amsg_text
                else amesaj = "Ayrılma Mesajı Ayarlanmadı \<a:error:886605697033314414>"
        
                let tagmesaj;
                if(tag == 'acik') tagmesaj = tag_name
                else tagmesaj = "Otomatik İsim Ayarlanmadı \<a:error:886605697033314414>"
                
                let otorolmesaj;
                if(otorol == 'acik') otorolmesaj ="<@&" + otorol_id + ">"
                else otorolmesaj = "Otomatik Rol Ayarlanmadı \<a:error:886605697033314414>"
        
                return message.channel.send(`> **Hoş Geldin Mesajı** Sistemi: ${hmMesajEnabled}\n> **Ayrılma Mesajı** Sistemi: ${aMesajEnabled}\n> **Oto Rol** Sistemi: ${otorolEnabled}\n> **Link Engelleme** Sistemi: ${linkEnabled}\n> **Sohbet** Mesajları: ${chatEnabled}\n> **Küfür Engelleme** Sistemi: ${küfürEnabled}\n\n\n> **Hoş Geldin Mesajı**: ${hmmesaj}\n> **Ayrılma Mesajı**: ${amesaj}\n> **Otomatik İsim**: ${tagmesaj}\n> **Oto Rol**: ${otorolmesaj}`)
            
        }
        else{}
    }

if(message.content == `${prefix}istatistik`){
    if (message.author.id == developer_id){
        let pc = message.guild.members.cache

    .filter(m => !m.user.bot && m.user.presence.status !== "offline")

    .filter(m => Object.keys(m.user.presence.clientStatus).includes("desktop"))

    .size;


    let web = message.guild.members.cache

    .filter(m => !m.user.bot && m.user.presence.status !== "offline")

    .filter(m => Object.keys(m.user.presence.clientStatus).includes("web"))

    .size;


    let mobil = message.guild.members.cache

    .filter(m => !m.user.bot && m.user.presence.status !== "offline")

    .filter(m => Object.keys(m.user.presence.clientStatus).includes("mobile"))

    .size;
    
    const bilgimsg = new Discord.MessageEmbed()
    .setTitle("Nelix Bot Bilgi")
    .setColor("#f5bc67")
    .setFooter(client.user.tag, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setImage("https://media.discordapp.net/attachments/704352497422041168/727241966236074054/giphy-5.gif?width=544&height=408")
    .addField(
        "• **Çalışma süresi**",
        moment
          .duration(client.uptime)
          .format(" D [gün], H [saat], m [dakika], s [saniye]"),
          true
      )
    .addField(
        "• **Bellek kullanımı**",
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
        true
      )
    .addField(
        "• **Kullanıcılar**",
        client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString(),
        true
      )
    .addField(
        "» **Sunucular**",
        client.guilds.cache.size.toLocaleString(),
        true
      )
    .addField(
        "» **Kanallar**",
        client.channels.cache.size.toLocaleString(),
        true
      )
    .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("» **Node.JS sürüm**", `${process.version}`, true)
    .addField("» **Ping**", client.ws.ping + " ms", true)
    .addField(
        "» **CPU**",
        `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``
        )
    .addField("» **Bit**", `\`${os.arch()}\``, true)
    .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
    .addField("**➥ Linkler**", "[\<a:discord:886608480478314557> Davet Linki](https://discord.com/oauth2/authorize?client_id=850162429447110656&scope=bot&permissions=8)\n[\<:destek:890705844101087283> Destek Sunucu](https://discord.gg/r2vqnQHMtZ)")
    .addField(

        `Üyelerin Bağlandığı Cihazlar:`,

        `**${pc}** Kişi **__Bilgisayardan__**\n**${web}** Kişi **__Webden__**\n**${mobil}** Kişi İse **__Mobilden__** Bağlanıyor!`,

        true

      );


  return message.lineReply(bilgimsg)
    }else{}
    
}

if(message.content == "sistemleri sıfırla"){
    if (message.author.id == developer_id){

        // hoşgeldin mesaj
        db.delete(`hm_msg_${message.guild.id}`)
        db.delete(`hm_msg_chnl_${message.guild.id}`)
        db.set(`hmmesaj_${message.guild.id}`, 'kapali')

        // ayrılma mesaj
        db.delete(`amesaj_msg_${message.guild.id}`)
        db.delete(`amesaj_msg_chnl_${message.guild.id}`)
        db.set(`amesaj_${message.guild.id}`, 'kapali')
        
        // sohbet mesajları
        db.set(`sohbetdata_${message.guild.id}`, 'kapali')
        
        // otorol sistemi
        db.set(`otorol_${message.guild.id}`, 'kapali')
        db.delete(`otorol_id_${message.guild.id}`)
        
        // link engelleme
        db.set(`kf_engelleme${message.guild.id}`, 'kapali')
        
        // tag sistemi
        db.delete(`tag_name_${message.guild.id}`)
        db.set(`tag_${message.guild.id}`, 'kapali')
        
        // Küfür Engelleme
        db.set(`küfür_${message.guild.id}`, 'kapali')
    
        message.lineReply(Embed("",`Bütün Sistemler Başarıyla Sıfırlandı ve Kapatıldı ${message.author.username}`, "yeşil"))
    }
    else{}
}


if(message.content == "prefix-sıfırla"){
    if (message.author.id == developer_id){
        await db.set(`guildprefix_${message.guild.id}`, '.')
    
        message.channel.send(`Prefix Başarıyla Sıfırlandı`).then(msg => msg.react('\<:yesil:886266675987611660>'))
    }
    else{
    if(message.member.hasPermission("ADMINISTRATOR")){
    await db.set(`guildprefix_${message.guild.id}`, '.')
    
    message.channel.send(Embed("", `Prefix Başarıyla Sıfırlandı`, "yeşil")).then(msg => msg.react('\<:yesil:886266675987611660>'))
}
    
        message.channel.send(Embed("", `${message.author}Bu Komutu Kullanmak İçin Gereken \`Yönetici\` Yetkisine Sahip Değilsin`, "error"));
    }
}

//!                                                               Developer Only Commands END

if(message.content == `${prefix}help`){
    const buttonDelete = new MessageButton().setStyle('red').setLabel('♻Temizle♻').setID('buttonDelete')


let embed = new Discord.MessageEmbed()
.setColor('#f5bc67')
.setFooter("Nelix Bot", "https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256")
.setDescription(`**Discord Sunucunuzda Hoş Geldin Gibi Karşılama Mesajlarını Otomatik\n\u200bOlarak Ayarlamanıza, Eğlence Ve Moderasyon Komutlarıyla Sunucunuzu\n\u200bDaha Güvenli Ve Daha Eğlenceli Bir Sunucu Yapar :)**\n\n\<a:genel:890696107074662440> **Genel**\n\`${prefix}\`**genel** Yazarak veya **Genel** Butonuna Tıklayarak Komutları Görüntüleyebilirsiniz.\n\n\<a:yetkili:890695872168484874> **Yetkili**\n\`${prefix}\`**yetkili** Yazarak Veya **Yetkili** Butonuna Tıklayarak Komutları Görüntüleyebilirsiniz.\n\n\<a:elence:890695964392824842> **Eğlence**\n\`${prefix}\`**eğlence** Yazarak Veya **Eğlence** Butonuna Tıklayarak Komutları Görüntüleyebilirsiniz.`)

message.channel.send(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Genel').setID('2'), new MessageButton().setStyle('blurple').setLabel('Yetkili').setID('3'), new MessageButton().setStyle('blurple').setLabel('Eğlence').setID('4'), buttonDelete]}).then(async function(helpMessage) {

helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {

  if (button.id == 'buttonDelete') {

    message.delete().then(helpMessage.delete())

    button.reply.defer()

  } else if (button.id == '1') {
    embed.setColor("#f5bc67")
    embed.setTitle("\<a:genel:890696107074662440> Yardım Komutları")
    embed.setDescription(`**Discord Sunucunuzda Hoş Geldin Gibi Karşılama Mesajlarını Otomatik\n\u200bOlarak Ayarlamanıza, Eğlence Ve Moderasyon Komutlarıyla Sunucunuzu\n\u200bDaha Güvenli Ve Daha Eğlenceli Bir Sunucu Yapar :)**\n\n\<a:genel:890696107074662440> **Genel**\n\`${prefix}\`**genel** Yazarak veya **Genel** Butonuna Tıklayarak Komutları Görüntüleyebilirsiniz.\n\n\<a:yetkili:890695872168484874> **Yetkili**\n\`${prefix}\`**yetkili** Yazarak Veya **Yetkili** Butonuna Tıklayarak Komutları Görüntüleyebilirsiniz.\n\n\<a:elence:890695964392824842> **Eğlence**\n\`${prefix}\`**eğlence** Yazarak Veya **Eğlence** Butonuna Tıklayarak Komutları Görüntüleyebilirsiniz.`)

    helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Genel').setID('2'), new MessageButton().setStyle('blurple').setLabel('Yetkili').setID('3'), new MessageButton().setStyle('blurple').setLabel('Eğlence').setID('4'), buttonDelete]})

    button.reply.defer()

  } else if (button.id == '2') {
    embed.setColor("#f5bc67")
    embed.setTitle('\<a:genel:890696107074662440> Genel Komutları')
    embed.setDescription(`\`${prefix}\`**avatar**\nKişinin Avatarını Gönderir.\n\n\`${prefix}\`**sunucuavatar**\nSunucunun Avatarını Gönderir.\n\n\`${prefix}\`**bilgi**\n Etiketlenen Kişi Hakkında Bilgi Verir\n\n\`${prefix}\`**istatistik**\nBot İle İlgili İstatistikleri Gönderir\n\n\`${prefix}\`**sunucu-istatistik**\nSunucunuz İle İlgili İstatistikleri Gönderir\n\n\`${prefix}\`**hava-durumu**\nİsmini yazdığının şehrin hava durumunu gösterir.`)

    helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('🔙').setID('1'), new MessageButton().setStyle('green').setLabel('Genel').setID('2'),new MessageButton().setStyle('blurple').setLabel('Yetkili').setID('3'),new MessageButton().setStyle('blurple').setLabel('Eğlence').setID('4'), buttonDelete]})

    button.reply.defer()

  } else if (button.id == '3') {

    embed.setTitle("\<a:yetkili:890695872168484874> Yetkili Komutları")
    embed.setColor("#f5bc67")
    embed.setDescription(`\`${prefix}\`**hoşgeldin-mesaj**\nSunucuya Katılan Kullancılara Hoş Geldin Mesajı Gönderir.\n\n\`${prefix}\`**ayrılma-mesaj**\nSunucudan Ayrılan Kullanıcılar İçin Ayrılma Mesajı Gönderir.\n\n\`${prefix}\`**link-engelleme**\nSunucudaki Kullanıcıların Link Göndermesini Engeller.\n\n\`${prefix}\`**otorol**\nSunucuya Katılan Kullanıcılara Otomatik Rol Verir.\n\n\`${prefix}\`**ping**\nBotun Pingini Gönderir.\n\n\`${prefix}\`**kick**\nKullanıcıyı Sunucudan Atar.\n\n\`${prefix}\`**ban**\nKullanıcıyı Sunucudan Banlar.\n\n\`${prefix}\`**sil**\nToplu Mesaj Siler.\n\n\`${prefix}\`**mesaj**\nBot Adına Mesaj Gönderir.\n\n\`${prefix}\`**nick**\nKullanıcının Sunucudaki İsmini Değiştirir.\n\n\`${prefix}\`**tag**\nSunucuya Katılan Kullanıcılara Tag Ekler.\n\n\`${prefix}\`**nuke**\nMesaj Kanalını Silip Yeniden Oluşturur.`)

    helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('🔙').setID('1'), new MessageButton().setStyle('blurple').setLabel('Genel').setID('2'), new MessageButton().setStyle('green').setLabel('Yetkili').setID('3'),new MessageButton().setStyle('blurple').setLabel('Eğlence').setID('4'), buttonDelete]})

    button.reply.defer()

  } else if (button.id == '4') {
    embed.setTitle("\<a:elence:890695964392824842> Eğlence Komutları")
    embed.setColor('#f5bc67')
    embed.setFooter("Nelix Bot", "https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256")
    embed.setDescription(`\`${prefix}\`**yazı-tura**\nYazı Tura Atar.\n\n\`${prefix}\`**kuş**\n:)\n\n\`${prefix}\`**düello**\nBiriyle 1vs1 kapışabilirsiniz.\n\n\`${prefix}\`**tkm**\nTaş, Kağıt, Makas oynarsınız.\n\n\`${prefix}\`**espiri**\nEspiri Yapar.`)


    helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('🔙').setID('1'), new MessageButton().setStyle('blurple').setLabel('Genel').setID('2'), new MessageButton().setStyle('blurple').setLabel('Yetkili').setID('3'),new MessageButton().setStyle('green').setLabel('Eğlence').setID('4'), buttonDelete]})

    button.reply.defer()

  }
  
});
});}

    if(message.content == `${prefix}istatistik`){
        if (message.author.id == developer_id) return;
            
        const discordPing = message.client.ws.ping;
        const infoEmbed = new Discord.MessageEmbed()
        .setDescription(`**Nelix Bot** İstatistikleri \<a:yesill:886612019501993986>`)
        .setFooter("Nelix Bot İstatistik Sistemi", "https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256")
        .setThumbnail('https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256')
        .setColor('#f5bc67')
        .addFields(
            {name: `\u200B`, value: `> **Bot Developer** \<:morok:898350791562260481> <@${developer_id}>\n\n> **Bot Prefixi**: \`${prefix}\`\n\n> **Sunucu** Sayıs: \`${client.guilds.cache.size}\` \n> **Ses Ve Metin** Kanalları: \`${client.channels.cache.size}\`\n> **Kullanıcı** Sayısı: \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`\n\n> **Discord** pingi: \`${discordPing}\`\n\n> **Discord.js** version: \`v${Discord.version}\` \n> **Node.js** version: \`${process.version}\``},
        )
        message.channel.send(infoEmbed);
    }

    if(message.content == `${prefix}sunucu-istatistik`){
        if(message.channel.type == "dm") return message.channel.send(Embed("", "Sunucu İstatistik Komutunu DM De Denemek Mi Bir Sen Zekisin Kanka Git Botun Olduğu Bir Sunucuda Dene Zeki Kurt", "error"));
        const guildIcon = message.guild.iconURL({dynamic: true, size: 256, format: 'png'});
        if(guildIcon == null) return message.channel.send(Embed("",`Opps Galiba Sunucunun Bir Avatarı Yok Bu Komutu Kullanmak İçin Lütfen Sunucuna Bir Avatar Ekle Veya \`${prefix}sunucu-istatistik-noavatar\` Komutunu Kullanmayı Dene :)`, "error")).then(msg => msg.delete({timeout: 30000}));  // sunucu-istatistik-noavatar yeerine sunucunun ppsi yok ise guild icon olmiyacak şekilde ayarlanacak
        const sunucuistatistikpremium = new Discord.MessageEmbed()
        .setDescription(`**${message.guild.name}** Sunucusunun İstatistikleri \<a:yesill:886612019501993986>`)
        .setFooter("Nelix Bot Sunucu İstatistik Sistemi", "https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256")
        .setThumbnail(`${guildIcon}`)
        .setColor('#f5bc67')
        .addFields(
            {name: `\u200B`, value: `> **Sunucu Sahibi**: ${message.guild.owner}\n\n> **Sunucu Prefixi**: \`${prefix}\`\n\n> **Premium Durumu**: ${premiumGuildEnabled}\n\n> **Sunucudaki Kullanıcı** Sayısı: \`${message.guild.memberCount}\`\n> **Sunucudaki Kanal** Sayısı: \`${message.guild.channels.cache.size}\`\n> **Sunucudaki Rol** Sayısı: \`${message.guild.roles.cache.size -1}\`\n> **Sunucudaki Emoji** Sayısı: \`${message.guild.emojis.cache.size}\`\n\n> **Sunucu Oluşturulma** Tarihi: \`${message.guild.createdAt.toLocaleString("tr-TR", {year: "numeric",month: "long", day: "numeric"})}\`\n> **Sunucu** Bölgesi: \`${message.guild.region}\`\n\n> **Hoş Geldin Mesajı** Sistemi: ${hmMesajEnabled}\n> **Ayrılma Mesajı** Sistemi: ${aMesajEnabled}\n> **Oto Rol** Sistemi: ${otorolEnabled}\n> **Link Engelleme** Sistemi: ${linkEnabled}\n> **Sohbet** Mesajları: ${chatEnabled}\n\n> **Bulunduğunuz Kanalın** İsmi: \`${message.channel.name}\``},                                                                                           
        )
        message.channel.send(sunucuistatistikpremium);
    }
    
    if(message.content == `${prefix}sunucu-istatistik-noavatar`){
            const sunucuistatistikpremium = new Discord.MessageEmbed()
            .setDescription(`**${message.guild.name}** Sunucusunun İstatistikleri \<a:yesill:886612019501993986>`)
            .setFooter("Nelix Bot Sunucu İstatistik Sistemi", "https://cdn.discordapp.com/icons/907079593322770444/1fb6430f4fcb4a5423040f4b85f7cef2.png?size=256")
            .setColor('#f5bc67')
            .addFields(
                {name: `\u200B`, value: `> **Sunucu Sahibi**: ${message.guild.owner}\n\n> **Sunucu Prefixi**: \`${prefix}\`\n\n> **Premium Durumu**: ${premiumGuildEnabled}\n\n> **Sunucudaki Kullanıcı** Sayısı: \`${message.guild.memberCount}\`\n> **Sunucudaki Kanal** Sayısı: \`${message.guild.channels.cache.size}\`\n> **Sunucudaki Rol** Sayısı: \`${message.guild.roles.cache.size -1}\`\n> **Sunucudaki Emoji** Sayısı: \`${message.guild.emojis.cache.size}\`\n\n> **Sunucu Oluşturulma** Tarihi: \`${message.guild.createdAt.toLocaleString("tr-TR", {year: "numeric",month: "long", day: "numeric"})}\`\n> **Sunucu** Bölgesi: \`${message.guild.region}\`\n\n> **Hoş Geldin Mesajı** Sistemi: ${hmMesajEnabled}\n> **Ayrılma Mesajı** Sistemi: ${aMesajEnabled}\n> **Oto Rol** Sistemi: ${otorolEnabled}\n> **Link Engelleme** Sistemi: ${linkEnabled}\n> **Sohbet** Mesajları: ${chatEnabled}\n\n> **Bulunduğunuz Kanalın** İsmi: \`${message.channel.name}\``},                                                                                           
            )
            message.channel.send(sunucuistatistikpremium);
    }
    if(message.content == "Sunucuda kaç kişi var"){
        if(message.guild.id != "930896720462758039") return; {
        message.channel.send(`Sunucudaki Üye Sayısı **${message.guild.memberCount}**`)}
    }
    if(message.content == "sunucuda kaç kişi var"){
        if (message.author.id == developer_id){
            message.channel.send(`Sunucudaki Üye Sayısı **${message.guild.memberCount}**`)
        }else{
        if(message.guild.id != "930896720462758039") return; {
        message.channel.send(`Sunucudaki Üye Sayısı **${message.guild.memberCount}**`)}}
    }

    //İnstagram Hesapları
    if(message.content.toLowerCase() == "instagram"){
        if (message.author.id == "406119184313876500"){
        message.lineReply("https://www.instagram.com/mehmetcanatamer")  //Atropin insta
        }
        else if(message.author.id == "311369874246991884"){
            message.lineReply("https://www.instagram.com/emir.grgl_/")  // Emirin insta
        }
        else if(message.author.id == "836521792062750731"){
            message.lineReply("https://www.instagram.com/fatih_vatanugruna/")  //fatihin insta
        }
        else if(message.author.id == "666707792006217759"){
            message.lineReply("https://www.instagram.com/bekraysmy/")   // berkayın insta
        }
        else if(message.author.id == "784154250838016010"){
            message.lineReply("https://www.instagram.com/mertfidanl/")  // mert abinin insta
        }
        else if(message.author.id == "749644037837029456"){
            message.lineReply("https://www.instagram.com/e11esen/")  //eren insta
        }
        else if(message.author.id == "454227029689106442"){
            message.lineReply("https://www.instagram.com/_glsz/")  // keremin insta
        }else{
            
        }
        
    }
    
    // Twitch Hesapları
    if(message.content.toLowerCase() == "twitch"){
        if (message.author.id == "406119184313876500"){
            message.lineReply("https://www.twitch.tv/atropin0") //atropin twitch
        }
        else if(message.author.id == "311369874246991884"){
            message.lineReply("https://www.twitch.tv/peakytd")  //emir twitch
        }
        else if(message.author.id == "163224865409597440"){
            message.lineReply("https://www.twitch.tv/gokhanistakenn")  // gökhan abi twitch
        }
        else if(message.author.id == "666707792006217759"){
            message.lineReply("https://www.twitch.tv/bekraysmy0")  //berkay twitch
        }
        else if(message.author.id == "784154250838016010"){
            message.lineReply("https://www.twitch.tv/fidanmertl")  //mert abi twitch
        }
        else if(message.author.id == "814245581881868329"){
            message.lineReply("https://www.twitch.tv/not_moira")  //berke twitch
        }
        else if(message.author.id == "664883749405589504"){
            message.lineReply("https://www.twitch.tv/muliow")  //Elif twitch  muliow
        }
        else if(message.author.id == "376445823937937408"){
            message.lineReply("https://www.twitch.tv/wysiaa")  //Dodo twitch 
        }
        else if(message.author.id == "347077242226081793"){
            message.lineReply("https://www.twitch.tv/p_poyraz")  //Poyraz abi twitch 
        }
        else if(message.author.id == "715373326201126943"){
            message.lineReply("https://www.twitch.tv/benefesahin")  //Efe abi twitch 
        }
        
    }
    
    //You Tube Hesapları
    if(message.content.toLowerCase() == "youtube"){
        if (message.author.id == "406119184313876500"){
            message.lineReply("https://www.youtube.com/channel/UC60XXuCJuUwyzIpY844dB6w")  //Atropin You Tube
        }
        else if(message.author.id == "715373326201126943"){
            message.lineReply("https://www.youtube.com/channel/UCHM4MlxeMmte3_Uf6YkexXw")  // Efe Abi You Tube
        }
        else if(message.author.id == "749644037837029456"){
            message.lineReply("https://www.youtube.com/channel/UCT893itq2hmxecY6kUNZgFw")  //Eren You Tube
        }
        else if(message.author.id == "163224865409597440"){
            message.lineReply("https://www.youtube.com/channel/UCeaW4zMsNA3cXMYiUEfyqfQ")  // gökhan abinin you tube
        }
        
        
    }
    
    // Sosyal Medya Hesapları
    if(message.content.toLowerCase() == "social"){
        if (message.author.id == "406119184313876500"){
            message.lineReply(`> <:instalogo:936292181919019078> **İnstagram**: https://www.instagram.com/mehmetcanatamer\n> <:youtubelogo:936293728295997480> **You Tube**: https://www.youtube.com/channel/UC60XXuCJuUwyzIpY844dB6w\n> <:twitchlogo:936294575746727997> **Twitch**: https://www.twitch.tv/atropin0`)  //Atropin Sosyal Medya
        }
        else if(message.author.id == "715373326201126943"){
            message.lineReply(`> <:instalogo:936292181919019078> **İnstagram**: https://www.instagram.com/emir.grgl_/\n> <:twitchlogo:936294575746727997> **Twitch**: https://www.twitch.tv/peakytd`)  // emir abi Sosyal Medya
        }
        else if(message.author.id == "376445823937937408"){
            message.lineReply("https://www.youtube.com/channel/UCTrPhcL-IuQ1QlMpOxJBK4g")  //Dodo You Tube
        }
        
    
    }

    if(message.content.toLowerCase() == "pm"){
        const afk = new Discord.MessageEmbed()
        .setTitle(`Kurallar`)
        .setThumbnail("https://cdn.discordapp.com/attachments/843468708571381781/987427500877545552/1080pm.png")
        .setDescription("<:pm_logo:987419950702551060> -Erdemli Ol: Küfür etme; argo, hakaret ve kaba sözler içeren hiçbir söylemde bulunma. Kavga tetikleyebilecek söylemlerde bulunma ve kavgaya varabilecek tartışmalardan kaçın. Kimseyi hedef gösterme ve aşağılama.\n\n<:pm_logo:987419950702551060> -Bütünleştirici Ol: Bir grubu ya da kişiyi, ırk, cinsiyet, yaş, ulus, din ya da cinsel yönelim gibi konularda aşağılar veya tehdit eder tarzda konuşma, bu konularda kesinlikle ayrımcılık yapma.\n\n<:pm_logo:987419950702551060> -İyimser Davran: Ayrımcılık, zorbalık, tehdit, şantaj ve toplumsal değerlere saygısızlık etmek tolerans göstermeyeceğimiz konular.\n\n<:pm_logo:987419950702551060> -Düzeni Koru:Metin kanallarında sunucu düzenini bozacak seviyede flood ve spam gibi eylemlerde bulunma.\n\n<:pm_logo:987419950702551060> -Özgün Ol: Riotçuları, moderatörleri, içerik üreticilerini ve ünlü isimleri taklit etme.\n\n<:pm_logo:987419950702551060> -Reklam Yapma: Sunucunun hiçbir kanalına kişisel promosyon içeren mesajlar gönderme, kullanıcı adında bu tarz içerikler bulundurma.\n\n<:pm_logo:987419950702551060> -Riske Girme: Kimseye herhangi bir satış yapma ve kimseden bir şey satın alma. (Bu konuda yaşayacağın mağduriyetten Plomien E-Sports ve Moderatör ekibi sorumlu değildir.)\n\n<:pm_logo:987419950702551060> -Güvenliğini Önemse: Ne kendinin ne de bir başkasının kişisel bilgilerini paylaşma.\n\n<:pm_logo:987419950702551060> -Görselliği Unutma: Profil resminde sakıncalı görseller, kullanıcı isminde uygunsuz kelime ve özel karakterler bulundurma.")
        .setColor('#821d1d')
        .setFooter('Plomien E-Sports', "https://cdn.discordapp.com/attachments/987424027436015687/987426229474951178/pm.png") 
        message.channel.send(afk)
        
    }

    if(message.content.toLowerCase() == ".imhere"){
        if (message.author.id != "749644037837029456") return message.lineReply('Bu Komutu Sadece Eren Abim Kullanabilir').then(msg => msg.delete({timeout: 10000}))
        message.lineReply(`the boss has come`)
        
    }
    if(message.content.toLowerCase() == ".iwent"){
        if (message.author.id != "749644037837029456") return message.lineReply('Bu Komutu Sadece Eren Abim Kullanabilir').then(msg => msg.delete({timeout: 10000}))
        message.lineReply(`ok, see you latter`)
        
    }
    if(message.content == "Kyp04ClEfKG8"){
        db.set(`premiumguild_${message.guild.id}`, 'premium')
        return message.delete(), message.channel.send(`**${message.guild.name}** Adlı Sunucu Artık Premium Sunucudur. Premium Komutlarımı Sunucuda Kullanabilirsiniz \<a:aa:905485519172026370>`)
       
    }
    })

}



// deneme 31