const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const { setInterval } = require("timers");
const { token, developer_id, vip_id} = require('./config.json');
require('discord-reply')
const db = require("croxydb");
const moment = require("moment");
const os = require("os");


//Utils
const Embed = require('./utils/embed');
const playerJoinLeave = require('./utils/player-join-leave');
const database = require('./utils/database.js');
const botJoin = require("./utils/bot-join-leave");
//const tagSystem = require('./utils/tagExecute');
//const link_protect_enabled = require('./utils/linkprotect');
const küfür = require ('./utils/küfür')
//const linkprotect = require("./utils/linkprotect");
const { banned_users } = require('./config.json');
const disbut = require('discord-buttons');
const chat = require("./utils/chat");
const commands = require("./utils/commands");
const dmchat = require('./utils/dmchat');
const logs = require("./utils/logs");
const otochat = require("./utils/otochat");
const { channel } = require("diagnostics_channel");
const newdb = require('./utils/newdb');
const autoRole = require("./utils/autoRole");
const tagExecute = require("./utils/tagExecute");
const command_guesses = require("./utils/commands_guesses");
disbut(client);



// Database
//const Tags = database()

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
const macCommands = fs.readdirSync('./commands/macCommands').filter(file => file.endsWith(".js"));

macCommands.forEach(file => {
    const command = require(`./commands/macCommands/${file}`)
    client.commands.set(command.name, command);
})

//Event Handlers
// client.once("ready", async () => {
//     client.guilds.cache.find(guild => guild.id === '898930219958824980')
//   .channels.cache.find(channel => channel.id === '939376490448052274')
//   .send('Bot Aktif <@406119184313876500>')

// })
// client.on("ready", () => {
//     setInterval(function() {
//   const embed = new Discord.MessageEmbed()
//   .setTitle(`Nelix Bot Canlı İstatistik (10sn de bir güncelleniyor)`)
//   .setColor("#f5bc67")
//   .setDescription(`
//   **Developer:** \`${client.users.cache.get("406119184313876500").tag}\`

//   **Bit**" \`${os.arch()}\`

//   **Ram Kullanımı** \`${((process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB")}\`

//   **CPU:** \`${os.cpus().map(i => `${i.model}`)[0]}\`
 
//   **Ping:** \`${client.ws.ping}\`
 
//   **Sunucu sayısı:** \`${client.guilds.cache.size}\`
 
//   **Kanal Sayısı:** \`${client.channels.cache.size}\`
 
//   **Kullanıcı Sayısı:** \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`
 
//   **Komut Sayısı:** \`${client.commands.size}\`
 
//   **Node.js Sürümü:** \`${process.version}\`

//   **Discord.js Sürümü:** \`${Discord.version}\`
//   `)
//   .setTimestamp()
//   client.channels.cache.get("954126827553706054").messages.fetch("959991494050209833")
//           .then(msg => { msg.edit(embed)
//           });
//   }, 1000 * 10);
// });

client.once("ready", async () => {

    
    client.user.setStatus('idle')
    console.log("Bot Aktifff Vuhuuu :)");      
    const durumlar = [
        ".help",
        `twitch.tv/atropin`,  //Todo: Oynuyor kısmı
    ]
    setInterval(function () {
        let durum = durumlar[Math.floor(Math.random() * durumlar.length)]
        client.user.setActivity(durum, { type: 'WATCHING' });   //Todo: oynuyor kısmı düzenleme(izliyor=WATCHING)-(Oynuyor=PLAYING)-(Dinliyor=LISTENING)
    }, 10000);

    // Utils
    playerJoinLeave(client, Embed);
    tagExecute(client);
    //linkprotect(client, Embed);
    autoRole(client);
    küfür(client, Embed);
    chat(client, Embed);
    dmchat(client, Embed);
    commands(client, Embed);
    logs(client, Embed);
    otochat(client, Embed);
    botJoin(client)
    newdb(client);
    
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
    if (db.fetch(`banned_üye_${message.author.id}`)) return;
    if (message.author.id == developer_id){}
    else{if(db.fetch('bakim')) return;}
    
    let prefix;
    if (db.fetch(`guildprefix_${message.guild.id}`)) prefix = db.fetch(`guildprefix_${message.guild.id}`, '')
    else prefix = '.'


    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLocaleLowerCase();

    const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!message.content.startsWith(prefix)) return;

    if(!command){
        command_guesses(client, commandName, prefix, message.channel)
        return
    }
    

    // Guild Control                                                                                      Todo: ↧ Dmde çalışmayan komutlara verilecek cevap ↧
    if(command.guildOnly && message.channel.type == "dm") return message.channel.send(Embed("", "Kardeşimsin bu komut dmde geçmiyo sadece sunucularda kullanabilirsin", "ff7d7d"));  //Todo: Dmde çalışmayan komutlara verilecek cevap

    // Permission Control
    if (message.author.id == developer_id){
        if(command.permission && !message.member.hasPermission('SEND_MESSAGES')) return;
    }
    else{if(command.permission && !message.member.hasPermission(command.permission)) return message.channel.send(Embed("", "Bu Komutu Kullanmak İçin Gereken Yetkiye Sahip Değilsin", "error"));}
    
    // Developer Only Commands
    if(command.developerOnly && !developer_id.includes(message.author.id)) return message.channel.send(Embed("", "Bu Komutu Sadece Botun Geliştiricisi Kullanabilir", "error"));
   
    // Gold/Vip Üyeler
    if(command.goldOnly && !db.fetch(`goldüye_${message.author.id}`)) return message.channel.send(Embed("", "Kullanmaya Çalıştığın Komut Premium Üye Komutudur!", "error"));
    
    //Premium guild only
    if(db.fetch(`goldüye_${message.author.id}`)){}else{if(command.premiumOnly && !db.fetch(`premiumguild_${message.guild.id}`)) return message.channel.send(Embed("", "Kullanmaya Çalıştığın Komut Premium Sunucu Komutudur!", "error"))} 

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
        command.execute(message, args, Embed, Discord);  //burda client yok komutlarada ki execute kısmına client yazına hata veriyordu buraya client eklenecek ve hata veren komutlarda tekrar denenecek
    }
    catch (e) {
        console.error(e)
        message.channel.send(Embed("Bir Hata Oluştu \<a:error:886605697033314414>", "", "ff0000"));
    }

})

client.login(token);