const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const { setInterval } = require("timers");
const { token, developer_id, vip_id} = require('./config.json');
const db = require("quick.db")
require('discord-reply')

//Utils
const Embed = require('./utils/embed.js');
const playerJoinLeave = require('./utils/player-join-leave');
const database = require('./utils/database.js');
const botJoin = require("./utils/bot-join-leave");
const tagSystem = require('./utils/tagExecute');
const link_protect_enabled = require('./utils/linkprotect');
const küfür = require ('./utils/küfür')
const linkprotect = require("./utils/linkprotect");
const autoRole = require('./utils/autoRole');
const { banned_users } = require('./config.json');
const disbut = require('discord-buttons');
const chat = require("./utils/chat");
const commands = require("./utils/commands");
const dmchat = require('./utils/dmchat');
const logs = require("./utils/logs");
const otochat = require("./utils/otochat");
disbut(client);



// Database
const Tags = database()

//Collections
client.commands = new Discord.Collection();
const cooldawns = new Discord.Collection();

// Commands
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

commandFiles.forEach(file => {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command);
})

const commandYetkili = fs.readdirSync('./commands/Yetkili-Komutları').filter(file => file.endsWith(".js"));

commandYetkili.forEach(file => {
    const command = require(`./commands/Yetkili-Komutları/${file}`)
    client.commands.set(command.name, command);
})

const commandGenel = fs.readdirSync('./commands/Genel-Komutlar').filter(file => file.endsWith(".js"));

commandGenel.forEach(file => {
    const command = require(`./commands/Genel-Komutlar/${file}`)
    client.commands.set(command.name, command);
})

const commandYardım = fs.readdirSync('./commands/Yardım-Komutları').filter(file => file.endsWith(".js"));

commandYardım.forEach(file => {
    const command = require(`./commands/Yardım-Komutları/${file}`)
    client.commands.set(command.name, command);
})

const commandVip = fs.readdirSync('./commands/Vip-Komutları').filter(file => file.endsWith(".js"));

commandVip.forEach(file => {
    const command = require(`./commands/Vip-Komutları/${file}`)
    client.commands.set(command.name, command);
})

const commandEğlence = fs.readdirSync('./commands/Eğlence-Komutları').filter(file => file.endsWith(".js"));

commandEğlence.forEach(file => {
    const command = require(`./commands/Eğlence-Komutları/${file}`)
    client.commands.set(command.name, command);
})

const commanddeveloper = fs.readdirSync('./commands/developer-only').filter(file => file.endsWith(".js"));

commanddeveloper.forEach(file => {
    const command = require(`./commands/developer-only/${file}`)
    client.commands.set(command.name, command);
})
const commandgüncelleme = fs.readdirSync('./commands/Güncelleme').filter(file => file.endsWith(".js"));

commandgüncelleme.forEach(file => {
    const command = require(`./commands/Güncelleme/${file}`)
    client.commands.set(command.name, command);
})

//Event Handlers
// client.once("ready", async () => {
//     client.guilds.cache.find(guild => guild.id === '898930219958824980')
//   .channels.cache.find(channel => channel.id === '939376490448052274')
//   .send('Bot Aktif <@406119184313876500>')

// })


client.once("ready", async () => {

    
    client.user.setStatus('idle')
    console.log("Bot Aktifff Vuhuuu :)");      
    const durumlar = [
        ".help",
        `twitch.tv/fidanmertl`,  //Todo: Oynuyor kısmı
    ]
    setInterval(function () {
        let durum = durumlar[Math.floor(Math.random() * durumlar.length)]
        client.user.setActivity(durum, { type: 'WATCHING' });   //Todo: oynuyor kısmı düzenleme(izliyor=WATCHING)-(Oynuyor=PLAYING)-(Dinliyor=LISTENING)
    }, 10000);
    

    // Database
    await Tags.sync();

    // Utils
    playerJoinLeave(client, Tags, Embed);
    tagSystem(client, Tags);
    linkprotect(client, Tags, Embed);
    autoRole(client, Tags, Embed);
    küfür(client, Tags, Embed);
    chat(client, Tags, Embed);
    dmchat(client, Tags, Embed);
    commands(client, Tags, Embed);
    logs(client, Tags, Embed);
    otochat(client, Tags, Embed);

    
    // Database check
    // Ekleme
    const servers = [];
    client.guilds.cache.forEach(async guild => {
        servers.push(guild.id);
        const tag = await Tags.findOne({ where: { guild_id: guild.id} })
        if(tag == null){
            await Tags.create({guild_id: guild.id});
        }

        botJoin(client, Tags);
    })

    // Çıkarma
    await Tags.findAll().then(g_list => {
        g_list.forEach(async guild_db => {
            const db_id = guild_db.dataValues.guild_id;
            if(!servers.includes(db_id)){
                await Tags.destroy({where: {guild_id : db_id}});
            }
        })
    })
    
})

client.on("message" , message => {
    // Baş Tanımlar
    if(!message.guild) return;
    if(message.content.startsWith('.afk')) return;
  
    // Let Tanımları & Data Veri Çekme İşlemleri
    let codemarefiafk = message.mentions.users.first()
    let codemarefikisi = db.fetch(`kisiid_${message.author.id}_${message.guild.id}`)
    let codemarefikisiisim = db.fetch(`kisiisim_${message.author.id}_${message.guild.id}`)
  
    // Eğer Afk Kişi Etiketlenirse Mesaj Atalım
    if(codemarefiafk){
      // Let Tanımları
      let cmfsebep = db.fetch(`cmfsebep_${codemarefiafk.id}_${message.guild.id}`)
      let codemarefikisi2 = db.fetch(`kisiid_${codemarefiafk.id}_${message.guild.id}`)
  
      if(message.content.includes(codemarefikisi2)){
        const cmfbilgiafk = new Discord.MessageEmbed()
        .setDescription(`${message.author} - Etiketlemiş Olduğun <@!${codemarefikisi2}> Kişisi Şuan **${cmfsebep}** Sebebiyle AFK`)
        .setColor("#f5bc67")
        .setFooter('Nelix Bot')
        message.channel.send(cmfbilgiafk)
      }
    }
  
    // Eğer Afk Kişi Mesaj Yazarsa Afk'lıktan Çıkaralım Ve Mesaj Atalım
    if(message.author.id === codemarefikisi){
  
      // Datadaki AFK Kullanıcı Verilerini Silelim
      db.delete(`cmfsebep_${message.author.id}_${message.guild.id}`)
      db.delete(`kisiid_${message.author.id}_${message.guild.id}`)
      db.delete(`kisiisim_${message.author.id}_${message.guild.id}`)
  
      // Afk'lıktan Çıktıktan Sonra İsmi Eski Haline Getirsin
      message.member.setNickname(codemarefikisiisim)
  
      // Bilgilendirme Mesajı Atalım
      const cmfbilgiafk = new Discord.MessageEmbed()
      .setAuthor(`Hoşgeldin ${message.author.username}`, message.author.avatarURL({dynamic: true, size: 2048}))
      .setDescription(`<@!${codemarefikisi}> Başarılı Bir Şekilde **AFK** Modundan Çıkış Yaptın.`)
      .setColor("#f5bc67")
      .setFooter('Nelix Bot')
      message.channel.send(cmfbilgiafk)
    }  
  })

client.on("message", async (message) => {
    
    if(message.channel.type == "dm") return;
    if (message.author.bot || message.webhoodID) return;  //! Botların mesajına cevap vermemesi için komut
    if (message.author.id.includes([banned_users])) return message.delete(), message.channel.send("KES AMPUTE ARDA");
    const tag = await Tags.findOne({ where: { guild_id: message.guild.id } })
    const prefix = tag.get("prefix")

    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLocaleLowerCase();

    const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!message.content.startsWith(prefix) || !command) return;
    

    // Guild Control                                                                                      Todo: ↧ Dmde çalışmayan komutlara verilecek cevap ↧
    if(command.guildOnly && message.channel.type == "dm") return message.channel.send(Embed("", "Kardeşimsin bu komut dmde geçmiyo sadece sunucularda kullanabilirsin", "ff7d7d"));  //Todo: Dmde çalışmayan komutlara verilecek cevap

    // Permission Control
    if (message.author.id == developer_id){
        if(command.permission && !message.member.hasPermission('SEND_MESSAGES')) return;
    }
    else{if(command.permission && !message.member.hasPermission(command.permission)) return message.channel.send(Embed("", "Bu Komutu Kullanmak İçin Gereken Yetkiye Sahip Değilsin", "error"));}
    
    // Developer Only Commands
    if(command.developerOnly && !developer_id.includes(message.author.id)) return message.channel.send(Embed("", "Bu Komutu Sadece Botun Geliştiricisi Kullanabilir", "error"));
    
    //  Vip Üyeler
    if(command.vipOnly && !vip_id.includes(message.author.id)) return message.channel.send(Embed("", "Kullanmaya Çalıştığın Komut Premium Üye Komutudur Premium Üye Olmak İçin <@406119184313876500> İle İletişime Geçebilirsin", "error"));

    if (!cooldawns.has(command.name)) {
        cooldawns.set(command.name, new Discord.Collection());
    }
    
    const DevTimestamps = cooldawns.get(command.name);
    const DevNow = Date.now();
    const DevCooldawnAmount = 1 * 1000;  //Todo: cooldown belirtilmemiş ise 2 saniye cooldown ekler

    if (DevTimestamps.has(developer_id)) {
        const expirationTime = DevTimestamps.get(developer_id) + DevCooldawnAmount;
        if (expirationTime > DevNow) {
            const timeleft = (expirationTime - DevNow) / 1000;
            return message.channel.send(Embed("", `Bu Komutu Tekrar Kullanmak İçin Lütfen **${parseInt(timeleft)}** Saniye Bekleyin.`, "ff7d7d"))
            .then(msg => {
                msg.delete({ timeout: 10000 })
              })
            .catch(console.error);
        }
    }

    DevTimestamps.set(developer_id, DevNow);
    setTimeout(() => {
        DevTimestamps.delete(developer_id);
    }, DevCooldawnAmount);
    // cooldown bitiş
    if (message.author.id != developer_id){
    const timestamps = cooldawns.get(command.name);
    const now = Date.now();
    const cooldawnAmount = (command.cooldown || 2) * 1000;  //Todo: cooldown belirtilmemiş ise 2 saniye cooldown ekler

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldawnAmount;
        if (expirationTime > now) {
            const timeleft = (expirationTime - now) / 1000;
            return message.channel.send(Embed("", `Bu Komutu Tekrar Kullanmak İçin Lütfen **${parseInt(timeleft)}** Saniye Bekleyin.`, "ff7d7d"))
            .then(msg => {
                msg.delete({ timeout: 10000 })
              })
            .catch(console.error);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => {
        timestamps.delete(message.author.id);
    }, cooldawnAmount);}else{}

    try {
        command.execute(message, args, Embed, Discord, Tags, tag);  //burda client yok komutlarada ki execute kısmına client yazına hata veriyordu buraya client eklenecek ve hata veren komutlarda tekrar denenecek
    }
    catch (e) {
        console.error(e)
        message.channel.send(Embed("Bir Hata Oluştu \<a:error:886605697033314414>", "", "ff0000"));
    }

})

client.login(token);