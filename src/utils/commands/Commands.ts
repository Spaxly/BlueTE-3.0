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
    MainFile
} from '../functions/Logger';

import { ClientFileGen } from '../../templates/javascript/Client';
import { MainFileGen } from "../../templates/javascript";

export async function JSBotCmd(botName: string) {
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
}