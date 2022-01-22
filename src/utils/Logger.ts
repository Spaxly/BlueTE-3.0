import logSymbols from "log-symbols";

export function Generating() {
    console.log(logSymbols.info, 'Generating...')
}

export function BaseFolder() {
    console.log(logSymbols.success, 'Created base folder');
}

export function SourceFolder() {
    console.log(logSymbols.success, 'Created source/main folder');
}

export function ConfigFolder() {
    console.log(logSymbols.success, 'Created config folder');
}

export function CommandsFolder() {
    console.log(logSymbols.success, 'Created commands folder');
}

export function UtilsFolder() {
    console.log(logSymbols.success, 'Created utils folder');
}

export function EventsFolder() {
    console.log(logSymbols.success, 'Created events folder');
}

export function HandlersFolder() {
    console.log(logSymbols.success, 'Created handlers folder');
}

export function ClientFile() {
    console.log(logSymbols.success, 'Created client file');
}

export function MainFile() {
    console.log(logSymbols.success, 'Created main file');
}

export function TestCommandFile() {
    console.log(logSymbols.success, 'Created test command file');
}

export function CommandHandlerFile() {
    console.log(logSymbols.success, 'Created command handler file');
}

export function EventHandlerFile() {
    console.log(logSymbols.success, 'Created event handler file');
}

export function InteractionCreateFile() {
    console.log(logSymbols.success, 'Created interactionCreate event file');
}

export function ReadyEventFile() {
    console.log(logSymbols.success, 'Created ready event file');
}

export function ConfigFile() {
    console.log(logSymbols.success, 'Created config file');
}

export function PkgInstall() {
    console.log(logSymbols.success, 'Installed dependencies!');
}

export function TSConfig() {
    console.log(logSymbols.success, 'Initialized TS Config file');
}

export function PkgJSONFile() {
    console.log(logSymbols.success, 'Initialized Package JSON file');
}

export function TSBuild() {
    console.log(logSymbols.success, 'Compiled TypeScript Code!');
}