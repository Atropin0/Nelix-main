// const token = require('../Yetkili-Komutları/')

module.exports = {
    name: "reload",
    developerOnly: true,
    aliases: ['r'],
    execute(message, args, Embed, Discord, Tags, tag) {

        if (!args.length) return message.channel.send(Embed("", "Lütfen Bir Komut Adı Giriniz", "info"));

        const commandName = args[0];
        const command = message.client.commands.get(commandName) ||
            message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return message.channel.send(Embed("", `\`${commandName}\` Adında Bir Komut Bulunamadı \<a:error:886605697033314414>`,"error"));

        // delete require.cache[require.resolve(`./${command.name}.js`)];
        
        try {
            delete require.cache[require.resolve(`../Yetkili-Komutları/${command.name}.js`)];   // bu komutta try catch kısmına eklencek
            const newCommand = require(`../Yetkili-Komutları/${command.name}.js`);
            message.client.commands.set(command.name, newCommand);
            message.channel.send(Embed("" ,`\`${command.name}\` Adlı Komut Başarıyla Yenilendi`, "yeşil"));
        }
        catch(e){
            message.channel.send(Embed("", `\`${command.name}\` Adlı Komut Yenilenirken Bir Hata Oluştu!`, "error"));
            console.error(e);
        }
        
        try {
            delete require.cache[require.resolve(`../Vip-Komutları/${command.name}.js`)];   // bu komutta try catch kısmına eklencek
            const newCommand = require(`../Vip-Komutları/${command.name}.js`);
            message.client.commands.set(command.name, newCommand);
            message.channel.send(Embed("" ,`\`${command.name}\` Adlı Komut Başarıyla Yenilendi`, "yeşil"));
        }
        catch(e){
            message.channel.send(Embed("", `\`${command.name}\` Adlı Komut Yenilenirken Bir Hata Oluştu!`, "error"));
            console.error(e);
        }
        
    }
}


//  else if li bir sistemle denenecek