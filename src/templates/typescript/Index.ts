export var TSIndex = 
`import "reflect-metadata";
import { TOKEN, botID, guildID } from "./config/config.json";
import { Client } from "discordx"; 
import { Intents, Interaction, Message } from "discord.js";
import { importx } from "@discordx/importer";

const client = new Client({
    botId: botID,
    botGuilds: [guildID],
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ],
    silent: false,
});
    
client.once("ready", async () => {
    await client.guilds.fetch();
    await client.initApplicationCommands();
    await client.initApplicationPermissions();
    console.log(">> Bot Activated!");
});

client.on("interactionCreate", (interaction: Interaction) => {
    client.executeInteraction(interaction);
});

client.on("messageCreate", (message: Message) => {
    client.executeCommand(message);
});

async function run() {
    await importx(__dirname + "/{events,commands}/**/*.{ts,js}");
    client.login(TOKEN);
}

run();`