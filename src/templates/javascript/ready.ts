export var ReadyEventGen = 
`const { guildID } = require('../../config/config.json');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        client.user.setActivity('Online!', { type: 'WATCHING' }, 6000);
        console.log('>> Bot activated!');
        if (!client.application?.owner) await client.application?.fetch();
        const command = await client.guilds.cache.get(
            guildID
            )?.commands.fetch()
        console.log(command);
    }
}

`