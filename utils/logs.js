const Discord = require('discord.js');

module.exports = (client, message, Embed) => {
//     const csl = client.channels.cache.get("946928847604051988")
// client.on("voiceStateUpdate", async (oldState, newState) => {

//     if(!oldState.member.user.bot){
        
//         if(!oldState.channel && newState.channel){//discord.gg/turkiye
//             csl.send(Embed("", `\`${newState.member.user.tag}\` İsimli Üye \`${oldState.guild.name}\` Sunucusunda \`${newState.channel.name}\` İsimli Sesli Odaya Giriş Yaptı!`, "yeşil"))
//         }
        
//         if(oldState.channel && !newState.channel){
//             csl.send(Embed("", `\`${oldState.member.user.tag}\` İsimli Üye \`${oldState.guild.name}\` Sunucusunda \`${oldState.channel.name}\` İsimli Odadan Çıkış Yaptı!`, "error"))
//         }
        
//     //     if(oldState.channel && newState.channel){//by: Ege'#0001
//     //         csl.send(Embed("", `\`${oldState.member.user.tag}\` İsimli Üye \`${oldState.guild.name}\` Sunucusunda \`${oldState.channel.name}\` İsimli Sesli Kanaldan \`${newState.channel.name}\` İsimli Sesli Kanala Geçiş Yaptı!`, "info"))
//     //     }
        
//     //     if(oldState.channel == newState.channel){//by: Ege'#0001
//     //         csl.send(Embed("", `\`${oldState.member.user.tag}\` İsimli Üye \`${oldState.guild.name}\` Sunucusunda \`${oldState.channel.name}\` İsimli Sesli Kanaldan \`Ekranını Paylaşıyor\``, "info"))
//     //     }
//     }
//     })

//     client.on('voiceStateUpdate', (oldState,newState) => {
//         if(oldState.selfMute === true && newState.selfMute === false)
//         csl.send(Embed("", `\`${oldState.member.user.tag}\` İsimli Üye \`${oldState.guild.name}\` Sunucusunda \`${oldState.channel.name}\` İsimli Odada \`Susturmasını Açtı\``, "#a1ddf7"))
//         if(oldState.selfMute === false && newState.selfMute === true)
//         csl.send(Embed("", `\`${oldState.member.user.tag}\` İsimli Üye \`${oldState.guild.name}\` Sunucusunda \`${oldState.channel.name}\` İsimli Odada \`Kendini Susturdu\``, "#908ff2"))
//         if(oldState.selfDeaf === true && newState.selfDeaf === false)
//         csl.send(Embed("", `\`${oldState.member.user.tag}\` İsimli Üye \`${oldState.guild.name}\` Sunucusunda \`${oldState.channel.name}\` İsimli Odada \`Kulaklık Açtı\``, "#f7a1f2"))
//         if(oldState.selfDeaf === false && newState.selfDeaf === true)
//         csl.send(Embed("", `\`${oldState.member.user.tag}\` İsimli Üye \`${oldState.guild.name}\` Sunucusunda \`${oldState.channel.name}\` İsimli Odada \`Kulaklık Kapattı\``, "#de7aa5"))
//         if(oldState.streaming === false && newState.streaming === true)
//         csl.send(Embed("", `\`${oldState.member.user.tag}\` İsimli Üye \`${oldState.guild.name}\` Sunucusunda \`${oldState.channel.name}\` İsimli Odada \`Ekranını Paylaşıyor\``, "#bd5772"))
//         if(oldState.streaming === true && newState.streaming === false)
//         csl.send(Embed("", `\`${oldState.member.user.tag}\` İsimli Üye \`${oldState.guild.name}\` Sunucusunda \`${oldState.channel.name}\` İsimli Odada \`Ekranını Kapattı\``, "#bd5772"))
//         if(oldState.selfVideo === false && newState.selfVideo === true)
//         csl.send(Embed("", `\`${oldState.member.user.tag}\` İsimli Üye \`${oldState.guild.name}\` Sunucusunda \`${oldState.channel.name}\` İsimli Odada \`Kamera Açtı\``, "#bd5772"))
//         if(oldState.selfVideo === true && newState.selfVideo === false)
//         csl.send(Embed("", `\`${oldState.member.user.tag}\` İsimli Üye \`${oldState.guild.name}\` Sunucusunda \`${oldState.channel.name}\` İsimli Odada \`Kamerasını Kapattı\``, "#bd5772"))
//     });

}
