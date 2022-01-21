import { exec } from "child_process";
import { randomNumber } from "../functions/randomNumber";
import logSymbols from "log-symbols";

export async function BotJS(botName: string) {
    console.log(logSymbols.info, 'Generating a bot in JavaScript...\n');
    // remove whitespace as it creates issues in creating folders
    const replacedWhiteSpace = botName.replace(/\s/g, '');
    
    exec(`mkdir ~/${replacedWhiteSpace}-${randomNumber(1, 999)}`);
    console.log(logSymbols.success, "Bot folder created!");
}