const db = require('croxydb')

module.exports = (client, Tags, Embed) => {

    client.on("message", async message => {
        if(message.channel.type == "dm") return;
        if (message.author.bot || message.webhookID) return;

       const ln_engelleme = db.fetch(`kf_engelleme_${message.guild.id}`, '')
        
        if(ln_engelleme == 'acik'){
            if(message.member.hasPermission("MANAGE_MESSAGES")){

            }
            else{
            const possibleLinks = [".com", ".tv", ".net", ".xyz", ".io", ".gg", "www.", "http", ".org", ".biz", ".party", ".rf.gd", ".az"];
            possibleLinks.some(word => {
                if(message.content.toLowerCase().includes(word)){
                    if(message.member.hasPermission("ADMINISTRATOR")){}
                    else{
                    message.delete();
                    return message.channel.send(Embed("Link Engelleme", `${message.author} Gönderdiğin Mesaj Link İçerdiği İçin Mesajın Silindi.`, "error"));

                }}
            });
        }
        }
    })

}