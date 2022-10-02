const { vip_id } = require('../../config.json')

module.exports = {
    name: "dcm",
    cooldown: 5,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){

        message.channel.send(':blue_circle:Discord Kuralları\n\n- Argo, küfür abartmadan kullanabilirsiniz!\n- Sunucuda reklam yapmak  yasaktır! (Özelde dahil.)\n- +18 içeriklerin paylaşımı yasaktır!\n- Ses ve metin kanallarını amacı dışında kullanmak yasaktır!\n\n:purple_circle:Twitch Kuralları\n\n- Chatte küfür, argo abartmadan konuşabilirsiniz!\n- Chatte reklam yapmak yasaktır!\n- +18 içeriklerin paylaşımı yasaktır!\n- Modlara karşı saygılı olmak zorunludur!\n- Chatte kavga etmek kesinlikle yasaktır!\n\nTwitch chatinde veya sunucumuzda olan herkes bunu okumuş sayılmaktadır. @everyone @here')
    }
}