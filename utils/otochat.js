const db = require('croxydb')

module.exports = (client, Tags, Embed) => {

    client.on("message", async message => {
        if(message.channel.type == "dm") return;
        if (message.author.bot || message.webhookID) return;
        if (db.fetch(`banned_üye_${message.author.id}`)) return;
        const chatdata = db.fetch(`sohbetdata_${message.guild.id}`, '')
        if(chatdata == 'acik'){
            const günaydın = ["güno", "günaydın", "günaydı", 'günaydıı'];
            günaydın.some(word => {
                if(message.content.toLowerCase().includes(word)){
                const mesajlar = ['Günoo canımm', 'Günaydıınnn', `Günaydınn ${message.author.username}`,];
                const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
            return message.lineReply(mesaj);

                
            }});
            
            const ig = ["iyi geceler", "geceler", 'geceleer', 'geceleeer', 'geceeler', 'geceeleer'];
            ig.some(word => {
                if(message.content.toLowerCase().includes(word)){
                const mesajlar = ['İyi geceleerr cano', 'iyii geceleerrr', `İyi gecelerr ${message.author.username}`,];
                const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
            return message.lineReply(mesaj);

                
            }});
            
            const slm = ["selam", "slm", "selaam"];
            slm.some(word => {
                if(message.content.toLowerCase().includes(word)){
                const mesajlar = ['selam', `selaam ${message.author.username}`,];
                const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
            return message.lineReply(mesaj);
            

                
            }});
        }
    })

}