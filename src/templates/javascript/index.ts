export var MainFileGen =
`const { Collection } = require('discord.js');
const { client } = require('./utils/client');
const { TOKEN } = require('../config/config.json');

client.commands = new Collection();
client.events = new Collection();

['eventHandler', 'commandHandler'].forEach(handler => {
    require('./handlers/' + handler)(client);
});

client.login(TOKEN);`