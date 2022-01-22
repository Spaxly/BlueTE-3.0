import prompts from 'prompts';

export async function botNameValue() {
    const botResp = await prompts({
        type: 'text',
        name: 'botName',
        message: 'Enter Bot Name'
    });
    return botResp.botName;
}

export async function TokenValue() {
    const tokenResp = await prompts({
        type: 'password',
        name: 'token',
        message: 'Enter Token'
    });
    return tokenResp.token;
}

export async function GuildIDValue() {
    const guildIDResp = await prompts({
        type: 'text',
        name: 'guildID',
        message: 'Enter GuildID'
    });
    return guildIDResp.guildID;
}

export async function BotIDValue() {
    const botIDResp = await prompts({
        type: 'text',
        name: 'botID',
        message: 'Enter BotID'
    });
    return botIDResp.botID;
}

export async function SelectionValue() {
    const SelectionResp = await prompts({
        type: 'select',
        name: 'value',
        message: 'Select',
        choices: [
          { title: 'JavaScript', description: 'Generate a base bot in JS' },
          { title: 'TypeScript', description: 'Generate a base bot in TS' },
          { title: 'Python', description: 'Generate a base bot in Python' }
        ],
        initial: 1
      })

    return SelectionResp.value;
}