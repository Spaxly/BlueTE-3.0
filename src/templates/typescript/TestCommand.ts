export var TSTestCommand = 
`import "reflect-metadata";
import { Discord, Guild, Slash } from "discordx";
import { CommandInteraction } from "discord.js"; 
import { guildID } from "../config/config.json";

@Discord()
export abstract class AppDiscord {
    @Guild(guildID)
    @Slash("ping")
    ping(interaction: CommandInteraction) {
        interaction.reply("Pong!");
    }
}`