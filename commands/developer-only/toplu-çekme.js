const Discord = require("discord.js");

module.exports = {
    name: "tçek",
    aliases: ['tç'],
    cooldown: 2,
    execute(message, args, Embed,){      // dfsd sdf  s sdf
        
      if(!message.member.hasPermission('ADMINISTRATOR')) return;

      if(!args[0]) return message.channel.send('Bir hata oluştu: Üyelerin bulunduğu kanalın IDsini girmelisin.');
      if(!message.guild.channels.cache.get(`${args[0]}`)) return message.channel.send('Bir hata oluştu: '+args[0]+' isminde bir kanal bulamadım.');
      
      let çekilecek = message.guild.channels.cache.get(`${args[0]}`)
      interval = 100,// burayı ellemeyin. ok knk
      increment = 1;
      çekilecek.members.forEach(function(member)  {
      var runner = setTimeout(function() {
      member.voice.setChannel(message.member.voice.channelID);
      clearTimeout(runner);
      }, interval * increment);
      increment = increment +1;
      });

}
}