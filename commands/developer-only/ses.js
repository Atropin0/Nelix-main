const Discord = require("discord.js");

module.exports = {
    name: "çek",
    aliases: ['ç'],
    cooldown: 2,
    execute(message, args, Embed,){      // dfsd sdf  s sdf
        
        if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.lineReply("Bu Komutu Kullanmaya Yetkin Yok!");
    
      if (!message.member.voice.channel)
        return message.lineReply("Bir Ses Kanalında Değilsin!");
      let csm = message.mentions.members.first();
      if (!csm)//discord.gg/türkiye
        return message.lineReply(
          "Yanına Kimin Gelmesini İstiyor İsen Onu Etiketlemen Gerek!"
        );
      if (!csm.voice.channel)
        return message.lineReply("Etiketlenen Kişi Bir Sesli Kanalda Değil!");
    
      csm.voice.setChannel(message.member.voice.channelID);
      message.lineReply("<@"+csm + "> İsimli Kişi Yanına Taşındı!");

}
}