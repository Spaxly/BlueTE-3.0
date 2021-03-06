import { botNameValue, TokenValue, GuildIDValue, SelectionValue, BotIDValue } from "./Prompts";
import { BotJS } from "./functions/JSBot";
import { PyBot } from "./functions/PyBot";
import { TSBotCmd } from "./commands/Commands";

export async function TemplateGenerator() {
    const botResp = await botNameValue();
    //console.log(botResp);

    const tokenResp = await TokenValue();
    //console.log(tokenResp);

    const guildIDResp = await GuildIDValue();
    //console.log(guildIDResp);

    const botIDResp = await BotIDValue();

    const SelectionResp = await SelectionValue();
    if (SelectionResp === 0) {
        BotJS(botResp, tokenResp, guildIDResp, botIDResp)
        //console.log('JavaScript Works')
    }

    if (SelectionResp === 1) {
        TSBotCmd(botResp, tokenResp, guildIDResp, botIDResp)
        //console.log('TypeScript Works')
    }

    if (SelectionResp === 2) {
        PyBot(botResp, tokenResp, guildIDResp, botIDResp)
        //console.log('Python works')
    }
}