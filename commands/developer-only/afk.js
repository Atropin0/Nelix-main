const Discord = require("discord.js");
const db = require("croxydb")

module.exports = {
  name: "afk",
  cooldown: 2,
  execute(message, args){

      const codemarefiuser = db.fetch(`kisiid_${message.author.id}_${message.guild.id}`);
      const codemarefisebep = args[0];

      // Eğer Sebep Girilmez İse
      if(!args[0]) {
          // Let Tanımları
          let kisi = message.guild.members.cache.get(message.author.id);
          let kisiisim = kisi.displayName;

          // Json formatına yazılacak kodlarımız
          db.set(`cmfsebep_${message.author.id}_${message.guild.id}`, 'Sebep Yok');
          db.set(`kisiid_${message.author.id}_${message.guild.id}`,message.author.id);
          db.set(`kisiisim_${message.author.id}_${message.guild.id}`, kisiisim);
          let sebep = db.fetch(`cmfsebep_${message.author.id}_${message.guild.id}`);

          // Bilgilendirme Mesajı Atalım
          const afk = new Discord.MessageEmbed()
          .setDescription(`${message.author} Başarılı şekilde **${sebep}** Sebebiyle 'AFK' moduna geçtiniz.`)
          .setColor('#00ff00')
          .setFooter('Nelix Bot') //KadirFi |\_/|
          message.channel.send(afk)

          // Afk Olunca İsim Değiştirsin 
          message.member.setNickname(`[AFK] ` + kisiisim);
      }

      // Eğer Sebep Girerse
      if(args[0]) {
          // Let Tanımları
          let cmfsebep = args.join(' ');
          let kisi = message.guild.members.cache.get(message.author.id);
          let kisiisim = kisi.displayName;
      
          // Json formatına yazılacak kodlarımız
          db.set(`cmfsebep_${message.author.id}_${message.guild.id}`, cmfsebep);
          db.set(`kisiid_${message.author.id}_${message.guild.id}`,message.author.id);
          db.set(`kisiisim_${message.author.id}_${message.guild.id}`, kisiisim);
          let sebep = db.fetch(`cmfsebep_${message.author.id}_${message.guild.id}`);

          // Bilgilendirme Mesajı Atalım
          const afk = new Discord.MessageEmbed()
          .setDescription(`${message.author} Başarılı şekilde **${sebep}** Sebeiyle 'AFK' moduna geçtiniz.`)
          .setColor('#00ff00')
          .setFooter('Nelix Bot') //KadirFi |\_/|
          message.channel.send(afk)

          // Afk Olunca İsim Değiştirsin 
          message.member.setNickname(`[AFK] ` + kisiisim);
      }


}}