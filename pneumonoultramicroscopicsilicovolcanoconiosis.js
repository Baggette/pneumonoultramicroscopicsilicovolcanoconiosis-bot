const { Client, Intents, Message} = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()
const pneumonoultramicroscopicsilicovolcanoconiosis = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

pneumonoultramicroscopicsilicovolcanoconiosis.on('ready', () => {
    console.log('pneumonoultramicroscopicsilicovolcanoconiosis is online')
})

pneumonoultramicroscopicsilicovolcanoconiosis.on("messageCreate", (message) => {
    if          (message.content === 
        "pneumonoultramicroscopicsilicovolcanoconiosis"){
    message.channel.send(
        "pneumonoultramicroscopicsilicovolcanoconiosis")
    }
    })

    pneumonoultramicroscopicsilicovolcanoconiosis.login(process.env.TOKEN)