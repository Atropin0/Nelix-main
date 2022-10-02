const db = require('croxydb')

module.exports = {
    name: "bakım",
    cooldown: 2,
    guildOnly: true,
    developerOnly: true,
    execute(message, args, Embed, Discord, Tags, tag){

        if(args[0] == "aç"){
            if(db.fetch('bakim')) return message.channel.send('bakım modu zaten açık')
            
            message.channel.send('Bakım Modu Açılı')
            db.set(`bakim`, 'acik')
    } 
    else if(args[0] == "kapat"){
        if(!db.fetch('bakim')) return message.channel.send('bakım modu zaten kapalı')
        db.delete(`bakim`)
        message.channel.send('Bakım Modu Kapatıldı')
    }else{
        if (db.fetch(`bakim`)){
            message.lineReply('Bakım modu açık')
        }else{
            message.lineReply('Bakım modu kapalı')
        }
    }

    
      

    }

}

// \n\u200b
// \u200B