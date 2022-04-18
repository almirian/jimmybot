const Discord = require("Discord.js")

const TOKEN = 'OTY1MzgzMzA1MjY2NjE0MzUy.YlyZQw.qXxfexXCkkxjhvaymhAClQrhhCU'

const client = new Discord.Client({
    intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "n.",
    owners: ["214005540911579138"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)

client.loadEvents(bot, false)

module.exports = bot    


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("shut up smelly")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "help"){
        message.reply("why should i help you stfu")
    }
})

client.login(TOKEN)