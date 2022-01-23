import { TSBotCmd } from "../commands/Commands";

export async function TSBot(botName: string, token: string, guildID: string, botID: string) {
    TSBotCmd(botName, token, guildID, botID)
}