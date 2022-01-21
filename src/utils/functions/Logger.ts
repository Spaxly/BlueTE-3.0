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
    console.log(logSymbols.success, 'Created main folder');
}