const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "tkm",
    cooldown: 5,
    guildOnly: true,
    async execute(message, args, Embed){
      
        message.channel.send('**Bir Şey Belirtmelisin! Doğru Kullanım : .tkm <taş, kağıt, makas>**').then(message => {
            let seçim = args[0]
             var makaslar = [':trophy: **__Kazandın__** \n **Senin** Seçtiğin : Makas \n **Botun** Seçtiği : Kağıt',':x: **__Kaybettin__** \n **Senin** Seçtiğin : Makas \n **Botun** Seçtiği : Taş',':crossed_swords: **__Berabere__** \n **Senin** Seçtiğin : Makas \n **Botun** Seçtiği : Makas'];
             var makass = makaslar[Math.floor(Math.random() * makaslar.length)];
             var kağıtlar = [':trophy: **__Kazandın__** \n **Senin** Seçtiğin : Kağıt \n **Botun** Seçtiği : Taş',':x: **__Kaybettin__** \n **Senin** Seçtiğin : Kağıt \n **Botun** Seçtiği : Makas',':crossed_swords: **__Berabere__** \n **Senin** Seçtiğin : Kağıt \n **Botun** Seçtiği : Kağıt'];
             var kağıtt = kağıtlar[Math.floor(Math.random() * makaslar.length)];
             var taşlar = [':trophy: **__Kazandın__** \n **Senin** Seçtiğin : Taş \n **Botun** Seçtiği : Makas',':x: **__Kaybettin__** \n **Senin** Seçtiğin : Taş \n **Botun** Seçtiği : Kağıt',':crossed_swords: **__Berabere__** \n **Senin** Seçtiğin : Taş \n **Botun** Seçtiği : Taş'];
             var taşş = taşlar[Math.floor(Math.random() * makaslar.length)];
            if (!args[0]) {
               return; }
            if (args[0] === "makas"){message.edit(makass)}
                 if (args[0] === "kağıt"){message.edit(kağıtt)}
                      if (args[0] === "taş"){message.edit(taşş)}
       
       
        });

    }
}