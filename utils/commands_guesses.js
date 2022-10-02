const Embed = require("./embed");

module.exports = (client , commandName, prefix, channel) => {

    const guesses = {};

    const commands = client.commands;

    for (const command of commands){
        guesses[command[0]] = 0;

        for (let i = 0; i < command[0].length; i++) {
            if (commandName[i] == command[0][i]) {
                guesses[command[0]] += 1;
            }
        }
    }

    const guesses_command = Object.entries(guesses).reduce((a, b) => b[1] > a[1] ? b : a, [, 0]);
    if(guesses_command[1] > 3){
        return channel.send(Embed("", `Bunu mu demek istediniz: **${prefix}${guesses_command[0]}**`, "info"))
    }
}