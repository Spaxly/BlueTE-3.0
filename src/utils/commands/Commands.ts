import { exec } from "child_process";
import { randomNumber } from "../functions/randomNumber";
import { 
    Generating, 
    BaseFolder, 
    SourceFolder, 
    CommandsFolder, 
    UtilsFolder, 
    ConfigFolder,
    EventsFolder,
    HandlersFolder,
    ClientFile,
    MainFile,
    TestCommandFile,
    ReadyEventFile,
    InteractionCreateFile,
    CommandHandlerFile,
    EventHandlerFile,
    ConfigFile,
    PkgInstall,
    TSConfig,
    PkgJSONFile,
    TSBuild
} from '../Logger';

import { ClientFileGen } from '../../templates/javascript/Client';
import { MainFileGen } from "../../templates/javascript";
import { TestCommandGen } from "../../templates/javascript/TestCommand";
import { ReadyEventGen } from "../../templates/javascript/ready";
import { InteractionCreateEvent } from "../../templates/javascript/interactionCreate";
import { CommandHandlerGen } from "../../templates/javascript/commandHandler";
import { EventHandlerGen } from "../../templates/javascript/eventHandler";
import { PkgJSONGen } from "../../templates/javascript/packageJSON";
import { PyBotClient } from "../../templates/python/Bot";
import { PyTestCommand } from "../../templates/python/TestCommand";
import { TSIndex } from "../../templates/typescript/Index";
import { TSTestCommand } from "../../templates/typescript/TestCommand";
import { TSConfigFile } from "../../templates/typescript/TSConfig";
import { TSPkgJSON } from "../../templates/typescript/PkgJSON";

export async function JSBotCmd(botName: string, token: string, guildID: string, botID: string) {
    const replacedWhiteSpace = botName.replace(/\s/g, '');
    var i = randomNumber(1, 999);

    Generating()
    
    exec(`mkdir ~/${replacedWhiteSpace}-${i}`);
    BaseFolder()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}/src`);
    SourceFolder()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}/config`);
    ConfigFolder()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}/src/commands`);
    CommandsFolder()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}/src/events`);
    EventsFolder()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}/src/handlers`);
    HandlersFolder()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}/src/utils`);
    UtilsFolder()

    exec(`echo "${ClientFileGen}" > ~/${replacedWhiteSpace}-${i}/src/utils/client.ts`);
    ClientFile()

    exec(`echo "${MainFileGen}" > ~/${replacedWhiteSpace}-${i}/src/index.ts`);
    MainFile()

    exec(`echo "${TestCommandGen}" > ~/${replacedWhiteSpace}-${i}/src/commands/ping.js`);
    TestCommandFile()

    exec(`echo "${ReadyEventGen}" > ~/${replacedWhiteSpace}-${i}/src/events/ready.js`);
    ReadyEventFile()

    exec(`echo "${InteractionCreateEvent}" > ~/${replacedWhiteSpace}-${i}/src/events/interactionCreate.js`);
    InteractionCreateFile()

    exec(`echo "${CommandHandlerGen}" > ~/${replacedWhiteSpace}-${i}/src/handlers/commandHandler.js`);
    CommandHandlerFile()

    exec(`echo "${EventHandlerGen}" > ~/${replacedWhiteSpace}-${i}/src/handlers/eventHandler.js`);
    EventHandlerFile()

    exec(`echo '{
        "TOKEN": "${token}",
        "guildID": "${guildID}",
        "botID": "${botID}"
}' > ~/${replacedWhiteSpace}-${i}/config/config.json`);
    ConfigFile()

    exec(`echo '{"compilerOptions": {"target": "es2016","module": "commonjs","resolveJsonModule": true,"esModuleInterop": true,"forceConsistentCasingInFileNames": true,"strict": true,"skipLibCheck": true  }}' > ~/${replacedWhiteSpace}-${i}/tsconfig.json`);
    TSConfig()

    exec(`echo '${PkgJSONGen}' > ~/${replacedWhiteSpace}-${i}/package.json`);
    PkgJSONFile()

    exec(`cd ~/${replacedWhiteSpace}-${i} && npm install discord.js @discordjs/builders @discordjs/rest discord-api-types`);
    PkgInstall()

    exec(`cd ~/${replacedWhiteSpace}-${i}/ && tsc`);
    TSBuild()
}

export async function PyBotCmd(botName: string, token: string, guildID: string, botID: string) {
    const replacedWhiteSpace = botName.replace(/\s/g, '');
    var i = randomNumber(1, 999);

    Generating()
    
    exec(`mkdir ~/${replacedWhiteSpace}-${i}`);
    BaseFolder()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}/config`);
    ConfigFolder()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}/commands`);
    CommandsFolder()

    exec(`echo '${PyBotClient}' > ~/${replacedWhiteSpace}-${i}/bot.py`)
    MainFile()

    exec(`echo '${PyTestCommand}' > ~/${replacedWhiteSpace}-${i}/commands/testcommand.py`)
    TestCommandFile()

    exec(`echo 'TOKEN="${token}"\nGUILD_ID=${guildID}\nBOT_ID=${botID}' > ~/${replacedWhiteSpace}-${i}/config/config.py`)
    ConfigFile()

    exec(`pip install -U git+https://github.com/Pycord-Development/pycord`)
    PkgInstall()
}

export async function TSBotCmd(botName: string, token: string, guildID: string, botID: string) {
    const replacedWhiteSpace = botName.replace(/\s/g, '');
    var i = randomNumber(1, 999);

    Generating()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}`);
    BaseFolder()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}/src`);
    SourceFolder()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}/src/config`);
    ConfigFolder()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}/src/commands`);
    CommandsFolder()

    exec(`mkdir ~/${replacedWhiteSpace}-${i}/src/utils`);
    UtilsFolder()

    exec(`echo '{
        "TOKEN": "${token}",
        "guildID": "${guildID}",
        "botID": "${botID}"
}' > ~/${replacedWhiteSpace}-${i}/src/config/config.json`);
    ConfigFile()
        
    exec(`echo '${TSIndex}' > ~/${replacedWhiteSpace}-${i}/src/index.ts`);
    MainFile()

    exec(`echo '${TSTestCommand}' > ~/${replacedWhiteSpace}-${i}/src/commands/ping.ts`);
    TestCommandFile()

    exec(`echo '${TSConfigFile}' > ~/${replacedWhiteSpace}-${i}/tsconfig.json`);
    TSConfig()

    exec(`echo '${TSPkgJSON}' > ~/${replacedWhiteSpace}-${i}/package.json`);
    PkgJSONFile()

    exec(`cd ~/${replacedWhiteSpace}-${i} && npm install discordx reflect-metadata discord.js @discordx/importer`);
    exec(`cd ~/${replacedWhiteSpace}-${i} && npm install --save-dev @types/node typescript`);
    PkgInstall()
}