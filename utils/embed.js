const Discord = require('discord.js');

module.exports = (title = "", description = "", color = "#f5bc67") => {
    const Embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(description)

    let newColor = "";
    if(color == "error") newColor = "#ff7d7d"
    else if (color == "info") newColor = "#f5bc67"
    else if (color == "yeşil") newColor = "GREEN"

    if(newColor == "") Embed.setColor(color)
    else Embed.setColor(newColor)

    return Embed
}