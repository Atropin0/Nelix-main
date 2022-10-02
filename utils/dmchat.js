const db = require('croxydb')

module.exports = (client, Tags) => {

    client.on("message", async (message) => {
        if (db.fetch(`banned_üye_${message.author.id}`)) return;
        if(message.channel.type != "dm") return;
        
        if(message.content.toLowerCase() == "sa"){
            
            message.channel.send('as kardeşim benim');
        }
        
        if(message.content.toLowerCase() == "iyi geceler"){
             
            const mesajlar = ['İyi Geceleer', `İYİİ GECEEELEERRRRR ${message.author}`];
               const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
               message.channel.send(mesaj);
        }
    
})

}