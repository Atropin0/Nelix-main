const db = require('croxydb')
const Embed = require('../utils/embed')

module.exports = (client, Tags) => {

    client.on("message", async message => {
        if(message.channel.type == "dm") return;
        if (message.author.bot || message.webhookID) return;

        const küfür = db.fetch(`küfür_${message.guild.id}`, '')
        
        if(küfür == 'acik'){

            const possibleLinks = ["amk", "ananısikeyim", "ananısikeyim.", "orospu çocu", "orospu", "orspu", "piç", "amcık", "sikim", "sikeyim", "orospuçocu", "oç", "annskm", "anskm.", "siktir", "amı", "skeyim", "skim"];
            possibleLinks.some(word => {
                if(message.content.toLowerCase().includes(word)){
                    if(message.member.hasPermission("ADMINISTRATOR")){}  
                    else{
                    message.delete();
                    return message.channel.send(Embed("Küfür Etmemelisin !", `${message.author} Küfür Ettiğin İçin Mesajın Silindi`, "error")).then(msg => msg.delete({timeout:15000}));
                }}
            });

        }
    })

}