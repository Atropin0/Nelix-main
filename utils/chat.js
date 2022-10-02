const db = require('croxydb')
const Discord = require('discord.js');
const { developer_id, vip_id, banned_users} = require('../config.json');


module.exports = (client, Embed, message) => {
    client.on("message", async message => {
        if (db.fetch(`banned_üye_${message.author.id}`)) return;
        if(message.channel.type == "dm") return;
        if (message.author.bot || message.webhookID) return;
        if (db.fetch(`banned_üye_${message.author.id}`)) return;
     
        const chatdata = db.fetch(`sohbetdata_${message.guild.id}`, '')


    if(message.content.toLowerCase() == "sa") {
        if (message.author.id == developer_id){
            message.lineReply('as malropin')
        }
        else{
        if(chatdata == 'acik'){
            if(db.fetch(`premiumguild_${message.guild.id}`)){
                if (message.author.id == "784154250838016010"){
                    const mesajlar = ['Oyyyy Mert abiimmm as abi', 'as'];
                    const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
                    message.lineReply(mesaj)}
                    else{
            const mesajlar = ['as', 'as canim', 'as askm'];
           const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
           message.lineReply(mesaj)}}
        else{
            message.channel.send("as");
        }}}
    }
    
    if(message.content.toLowerCase() == "den"){
        if(chatdata == 'acik'){
           message.channel.send('chat daha açık')
        }else{
            message.channel.send('chat data kapalıııııııı')
        }
    }
    if(message.content.toLowerCase() == "sj"){
        if(chatdata == 'acik'){
            if(db.fetch(`premiumguild_${message.guild.id}`)){
            message.lineReply(Embed("31", "", "RANDOM"));}
        else{
            message.channel.send("31");
        }}
    }

    if(message.content.toLowerCase() == "naber"){
        if (message.author.id == developer_id){
            const mesajlar = ['Ğ'];
            const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
            message.lineReply(mesaj);
        }
        else{
        if(chatdata == 'acik'){
            if(db.fetch(`premiumguild_${message.guild.id}`)){
                const mesajlar = ['İyi Abi Senden', 'sanane', 'Kötü'];
                const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
                message.lineReply(mesaj);}
        else{
            message.channel.send("sanane");}
        }}
    }
    if(message.content.toLowerCase() == "naber"){
        if (chatdata == 'açık'){
            const mesajlar = ['Ğ'];
            const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
            message.lineReply(mesaj);
        }
        else{}
    }

    if(message.content.toLowerCase() == "31"){
        if (message.author.id == developer_id){
            message.channel.send(Embed("sj", "", "RANDOM"))
        }
        else{
        
        if(chatdata == 'acik'){
            if(db.fetch(`premiumguild_${message.guild.id}`)){
                const mesajlar = ['KANKA SEN FAZLA KOMİKSİN AMA YA', 'yine 31 şakası', '31 mi sj der susarım ben', 'B-Biri 31 mi dedi LKJDFHBGKLJHSDKFGHJKLŞDFHJGKSDFHGKJLSDFGKJDFKGLJ'];
                const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
                message.channel.send(Embed("sj", "", "RANDOM"))}
        else{
            message.lineReply("ulan komik şey seni");
        }}}
    }

    if(message.content.toLowerCase() == "napim"){
        if(chatdata == 'acik'){
        message.channel.send("Domal").then(msg =>
            msg.react('😋'))}
    }
    
    if(message.content.toLowerCase() == "ğ"){
        if(chatdata == 'acik'){
        message.channel.send("Ğ")}
    }

    if(message.content.toLowerCase() == "nasılsın"){
        if(chatdata == 'acik'){
            if(db.fetch(`premiumguild_${message.guild.id}`)){
                const mesajlar = ['İyidir Canım Sen Nasılsın', 'Çalışıyoruz işte nasıl olsun', 'Sen?'];
                const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
                message.lineReply(mesaj)}
        else{
            message.channel.send("İyi canım senden");
        }}
    }
    
    if(message.content.toLowerCase() == "mark"){
        if(chatdata == 'acik'){
        message.lineReply("Selam")}
    }

    //bana özel komutlar

    if(message.content.toLowerCase() == "hg aşk"){
        if (message.author.id == developer_id){
            message.lineReply("hb canm")
        }else{}
        
    }

    
    if(message.content.toLowerCase() == "mal bot"){
        if (message.author.id == developer_id){
            const mesajlar = ['sensin o atrocum', 'nie öyle dedin ki şimdi', 'anan mal', ':('];
            const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
            message.lineReply(mesaj)
        }else{}
        
    }
    
    if(message.content.toLowerCase() == "sikerim seni"){
        if (message.author.id == developer_id){
            const mesajlar = ['Terbiyesiz', 'Annesi pis kadın', 'Ayb Ayb', 'he he aynen aynen'];
            const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
            message.lineReply(mesaj)
        }else{}
        
    }
    
    
    if(message.content.toLowerCase() == "enayi bot"){
        if (message.author.id == developer_id){
            let filter = m => m.author.id === message.author.id
            message.lineReply(`Bir daha enayi diyecek misin \`eet\`  \`hayır\``).then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 10000,
                    errors: ['time']
                })
                .then(message => {
                    message = message.first()
                    if (message.content == 'eet') {
                        const mesajlar = ['ARKADAŞLAR ATROPİN OROSPU ÇOCUDUR AÇIK VE NET SÖYLÜYORUM', 'Sikerim seni', 'Sensin o kardeşim sensin o', 'bida enayi dersen çalışmam'];
                        const mesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
                        message.lineReply(mesaj)
                    } else if (message.content == 'hayır') {
                        message.lineReply(`Böyle adam ol işte`)
                    } else {
                        
                    }
                })
                .catch(collected => {
                    message.lineReply('15 SANİYE İÇİNDE CEVAP VERMEN GEREKTİĞİNİ UNUTTUN ENAYİ ATRO');
                });
            })}else{}}

            if(message.content.toLowerCase() == "sensizlik yarim"){
                if (message.author.id == developer_id){
                    message.lineReply("YORDUUU BU BEDENİMİİİ")
                }else{}
                
            }
            
            if(message.content.toLowerCase() == "sen gittikten sonra"){
                if (message.author.id == developer_id){
                    message.lineReply("GÜLMEDİİM ESKİSİİ GİBİİ NEREDEN NASIL BAŞLASAM ANLATMAM PEK KOLAY OLMAYACAK")
                }else{}
                
            }
            
           
            
        })
    }