const { Client, Intents } = require("discord.js");

const bot = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
});

const login = function()
{
    try
    {
        bot.once("ready", () => {
            console.log("WHOMST HAVE SUMMON ME!");
        });
        bot.login(process.env.TOKEN);
    }
    catch (error)
    {
        console.log("I'm weak!");
        console.error(error);
    }
}

module.exports =
{
    bot,
    login,
}
