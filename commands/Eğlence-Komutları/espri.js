const Discord = require('discord.js');

module.exports = {
    name: "espri",
    cooldown: 5,
    guildOnly: true,
    execute(message, args, Embed){

        message.channel.send(':thinking: Hemen Yazıyorum... :stuck_out_tongue_winking_eye:').then(message => {
            const espriler = [' **- İnsanların seni ezmesine izin verme; Ehliyet al, sen onları ez...', '- Adamın biri güneşte yanmış, ay da düz.',
            '- Ben Yedigün içiyorum sen Onbeşgün iç.',
            '- Sinemada on dakika ara dedi, aradım aradım açmadı.',
            '- Röntgen Filmi çektirdik, yakında sinemalarda.',
            '- Adamın Biri Notebook Almış, DELLenmiş.',
            '- Geçen gün taksi çevirdim hala dönüyor.',
            '- Ben hikâye yazarım Ebru Destan.',
            '- Geçen gün geçmiş günlerimi aradım ama meşguldü.',
            '- Tebrikler kazandınız, şimdi tencere oldunuz!**',
            '- Adamın biri kızmış istemeye gelmişler.',
            '- Ayda 5 milyon kazanmak ister misin? Evet.  O zaman Ay’a git.',
            '- Funda Arar dediler ama hala daha aramadı.',
            '- Adamın kafası atmış bacakları eşek.',
            '- Uzun lafın kısası : U.L.',
            '- Yağmur yağmış, kar peynir!',
            '- Sakla samanı, inekler aç kalsın.',
            '- Baraj dendi mi, akan sular durur.',
            '- Dünya dönermiş ay da köfte…',
            '- Son gülen en geç anlayandır.',
            '- Bu erikson, başka erik yok.',
            '- Seven unutmaz oğlum, eight unutur.',
            '- Sen kamyonu al, Leonardo da vinci.',
            '- Adamın biri gülmüş, bahçeye dikmişler.'];
               const espri = espriler[Math.floor(Math.random() * espriler.length)];
                    setTimeout(() => {
                        message.edit(`${espri}`)
                    }, 1000);
          })


    }
}