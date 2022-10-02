const Discord = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "covid",
    cooldown: 2,
    guildOnly: true,
    aliases: ["dn"],
    async execute(message, args){

          if (!args.length) {
            axios
              .get("https://corona.lmao.ninja/v2/all")
              .then(response => {
                const ege = new Discord.MessageEmbed()
                  .setColor("BLUE")
                  .setTitle("Dünya Geneli COVID-19 Bilgileri")
                  .setDescription(
                    "Tanı konulan vakalar, ölümler ve dünya çapında gelişmeler \n Ülkeler hakkında bilgi almak için " +
                      ` \`covid turkey\` `
                  )
                  .addField(`Tanı Konulan Hasta Sayısı`, response.data.cases)
                  .addField(`Toplam Ölüm`, response.data.deaths)
                  .addField(`Toplam İyileşen`, response.data.recovered)
                  .setTimestamp()
                  .setFooter("Nelix Bot");
        
                message.channel.send(ege);
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            axios
              .get(`https://corona.lmao.ninja/v2/countries/${args[0]}`)
              .then(response => {
                const ege = new Discord.MessageEmbed()
                  .setColor("BLUE")
                  .setTitle(`${args[0]} - COVID19 Bilgileri`)
                  .addField(`Ülke`, response.data.country)
                  .addField(`Tanı Konulan Hasta`, response.data.cases, true)
                  .addField(`Bugünkü Vaka`, response.data.todayCases, true)
                  .addField(`Toplam Ölüm`, response.data.deaths, true)
                  .addField(`Bugünkü Ölüm`, response.data.todayDeaths, true)
                  .addField(`Toplam İyileşen Hasta`, response.data.recovered, true)
                  .addField(`Aktif Vaka`, response.data.active, true)
                  .addField(`Toplam Kritik Vaka`, response.data.critical, true)
                  .addField(`Toplam Test`, response.data.tests, true)
                  .setTimestamp()
                  .setFooter( "Nelix Bot")
                  .setThumbnail(response.data.countryInfo.flag);
                message.channel.send(ege);
              })
              .catch(error => {
                message.channel.send(
                  ":x: Hata \n Lütfen ülke girerken global olarak giriniz. Örnek: Turkey veya turkey şeklinde girebilirsiniz."
                );
              });
          }
        
        

       }
              
      
    }

//message.guild.channels.cache.filter(u => {
// u.delete()
// })