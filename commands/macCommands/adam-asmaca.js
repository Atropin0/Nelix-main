const Discord = require('discord.js')

const GameCord = require('gamecord-fork').djs

const db = require('croxydb')

const client = new Discord.Client();

module.exports = {
    name: "adam-asmaca",
    cooldown: 2,
    guildOnly: true,
    async execute(message, args,){
      
        let { stripIndents } = require('common-tags');
        let kelimeler = ["kedi", 'yedim', 'top', 'atatürk', 'reddit'];
                try {//Vortex.
                    let cevap = kelimeler[Math.floor(Math.random() * kelimeler.length)].toLowerCase();
                    let point = 0;
                    let displayText = null;
                    let tahmin = false;
                    let confirmation = [];
                    let yanlış = [];
                    let display = new Array(cevap.length).fill("_");
                    while (cevap.length !== confirmation.length && point < 6) {
                        await message.channel.send(stripIndents`
                                      ${displayText === null ? "**Nelix Adam Asmaca! Test komutu olduğu için şu anlık sadece **" : displayText ? "**Doğru Harf!**" : "**Yanlış Harf!**"}
                                           **Kelime:**    \`${display.join(" ")}\`
                                      **Yanlış Harfler:** ${yanlış.join(", ") || "Yok"}
                                      \`\`\`
                                      _________
                                      |    |
                                      |    ${point > 0 ? "😵" : ""}
                                      |  ${point > 2 ? "┌" : " "}${point > 1 ? "()" : ""}${point > 3 ? "┐" : ""}
                                      |   ${point > 4 ? "/" : ""} ${point > 5 ? "\\" : ""}
                                      |
                                      \`\`\`
                                  `);
                        let filter = (res) => {
                            let choice = res.content.toLowerCase();
                            return res.author.id === message.author.id && !confirmation.includes(choice) && !yanlış.includes(choice);
                        };
                        let guess = await message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 300000
                        });
                        if (!guess.size) {
                            await message.channel.send("Zamanın doldu!");
                            break;
                        }
                        let choice = guess.first().content.toLowerCase();
                        if (choice === "pas") break;
                        if (choice.length > 1 && choice === cevap) {
                            tahmin = true;
                            break;
                        } else if (cevap.includes(choice)) {
                            displayText = true;
                            for (let i = 0; i < cevap.length; i++) {
                                if (cevap.charAt(i) !== choice) continue;
                                confirmation.push(cevap.charAt(i));
                                display[i] = cevap.charAt(i);
                            }
                        } else {
                            displayText = false;
                            if (choice.length === 1) yanlış.push(choice);
                            point++;
                        }
                    }
                    if (cevap.length === confirmation.length || tahmin) return message.channel.send(`**Tebrikler kelimeyi buldun:** \`${cevap}\``);
                    return message.channel.send(`Maalesef bilemedin, kelime: \`${cevap}\``);
                } catch (err) {//Vortex.
                    console.log(err);
                    return message.reply(`Olamaz, Bir Hata Verdi!`);
                }
      

    }

}

// \n\u200b
// \u200B