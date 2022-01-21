export var CommandHandlerGen = 
`const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { botID, guildID, TOKEN } = require('../../config/config.json');
const fs = require('fs');
const path = require('path');
module.exports = (client) => {
    const commands = [];
        const commandFiles = fs.readdirSync(path.join(__dirname, '../commands')).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require('../commands/ ' + file);
            commands.push(command.data.toJSON());
            client.commands.set(command.data.name, command)
        }

        const rest = new REST({ version: '9' }).setToken(TOKEN);

        (async () => {
	        try {
		        console.log('Started refreshing application (/) commands.');

		        await rest.put(
			        Routes.applicationGuildCommands(botID, guildID),
			        { body: commands },
		    );
		    console.log('Successfully reloaded application (/) commands.');
	    } catch (error) {
		    console.error(error);
	    }
    })();
	console.log(">> Loaded Command Handler!");
}`