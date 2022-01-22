import { PyBotCmd } from "../commands/Commands";

export async function PyBot(botName: string, token: string, guildID: string, botID: string) {
    PyBotCmd(botName, token, guildID, botID)
}