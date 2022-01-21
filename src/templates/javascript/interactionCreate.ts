export var InteractionCreateEvent = 
`const { client } = require("../utils/client");

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction) {
        if (!interaction.isCommand()) return;

	    const command = client.commands.get(interaction.commandName);

	    if (!command) return;

	    try {
		    await command.execute(interaction);
            console.log(interaction, 'was executed')
	    } catch (error) {
			console.error(error);
		    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	    }
    }
}

`