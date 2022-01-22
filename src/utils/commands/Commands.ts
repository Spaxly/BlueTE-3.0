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