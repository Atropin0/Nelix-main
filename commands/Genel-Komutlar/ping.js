module.exports = {
    name: "ping",
    aliases: ["p"],
    execute(message, args, Embed) {
        const discordPing = message.client.ws.ping;

        message.channel.send(Embed("Ping Hesaplanıyor...",)).then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(Embed("", `**Discord** Gecikmesi: \`${discordPing}\`\n**Bot** Gecikmesi: \`${ping}\``, "RANDOM"));

        })
    }
}