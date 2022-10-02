const Discord = require('discord.js');
const bot = new Discord.Client();
const cp = require('child_process');
const { developer_id} = require('../../config.json');

module.exports = {
    name: "yeniden-başlat",
    cooldown: 2,
    guildOnly: true,
    async execute(message, args,){
      
        var embed2 = new Discord.MessageEmbed()   
        .setTitle('Merhaba, ' + message.author.username)
        .setDescription('Bu Komutu Kullanabilmek İçin Benim Yöneticim Olmanız Gerekiyor,Aksi Taktirde Kullanılmaz!') 
        .setColor('RED') 
    
  
    if(message.author.id != developer_id) return message.channel.send(embed2)
       
    //
    var embed = new Discord.MessageEmbed()   
        .setTitle(`Merhaba, ${message.author.username}`)
        .setDescription('Beni yeniden başlatmak için lütfen aşağıdaki emojiye tıklarmısınız.')
        .setColor('RANDOM')
  message.channel.send(embed).then(async function (sentEmbed) {
              const emojiArray = ["✅"];
              const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
              await sentEmbed.react(emojiArray[0]).catch(function () { });
              var reactions = sentEmbed.createReactionCollector(filter, {
                  time: 30000
              });
  reactions.on("end", () =>  message.author.send("Yeniden Başlatma İşlemini iptal ettim! "))
      reactions.on("collect", async function (reaction) {
                  if (reaction.emoji.name === "✅") {
    try {
      message.delete().then(mr => sentEmbed.delete()).then(wb => { 
   message.channel.send(`BOT: Bot yeniden başlatılıyor...`);
   const child = cp.spawn('node', ['app.js'], { detached: true })
   child.unref()
   process.exit()
      })
    } catch (err) {
    //
      message.channel.send(`**Hata:** \n\`\`\`js\n${err}\n\`\`\``);
    
  };
  
          }
      })
  })

    }

}

// \n\u200b
// \u200B