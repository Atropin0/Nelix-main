const Discord = require("discord.js");
const client = new Discord.Client();
const instagram = require("user-instagram");


module.exports = {
    name: "instagram",
    aliases: ["i"],
    guildOnyl: true,
    cooldown: 2,
    execute(message, args, Embed, Tags, tag) {
      

  const kullanici = args.join(" ");
  if (!kullanici) return message.reply(`❌ Bir Kullanıcı İsmi Girmelisin!`);
  instagram("https://www.instagram.com/" + kullanici).then(data => {
    const biocuk = data.bio.length === 0 ? "Yok" : data.bio;
    const isimcik = data.fullName.length === 0 ? "Yok" : data.fullName;
    var gizlimi;
    var onaylimi;
    if (data.isPrivate === false) gizlimi = "Hayır";
    if (data.isPrivate === true) gizlimi = "Evet";
    if (data.isVerified === false) onaylimi = "Hayır";
    if (data.isVerified === true) onaylimi = "Evet";
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(`${data.avatarHD}`)
      .addField("🔱 Kullanıcı İsmi: ", `${kullanici}`)
      .addField("👦 Tam İsmi: ", isimcik)
      .addField("👥 Takipçi Sayısı: ", `${data.subscriberCount}`)
      .addField("🔃 Takip Ettiği Kişi Sayısı: ", `${data.subscribtions}`)
      .addField("🏰 Gönderi Sayısı: ", `${data.postCount}`)
      .addField("📑 Kullanıcı Biografisi: ", biocuk)
      .addField("🔐 ID: ", `${data.id}`)
  

      .addField("🎭 Gizli Profil Mi: ", `${gizlimi}`)
      .addField("💯 Onaylı Hesapmı: ", `${onaylimi}`)
      .addField("🌐 Hesabın Linki: ", `${data.profileLink}`)
       .addField("Profil Linki", `${data.avatar}`)
      .setFooter(`İnstagram Bilgi Sistemi`)
      .setTimestamp();

   if (message.channel.send(embed)){
     
   } else message.channel.send('Bir hata oluştı. Kullanıcı adını doğru giriniz.')
  })
    
    }
}


