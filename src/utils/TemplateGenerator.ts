import { botNameValue, TokenValue, GuildIDValue, SelectionValue, BotIDValue } from "./Prompts";
import { BotJS } from "./functions/JSBot";

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
        //console.log('TypeScript Works')
    }

    if (SelectionResp === 2) {
        //console.log('Python works')
    }
}