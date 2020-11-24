const { stripIndents } = require('common-tags');
const Command = require('../base');

module.exports = class ListGroupsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'groups',
			aliases: ['list-groups', 'show-groups'],
			group: 'commands',
			memberName: 'groups',
			description: 'Lists all command groups.',
			details: 'Only administrators may use this command.',
			guarded: true,
			ownerOnly: true,
			hidden: true
		});
	}

	run(msg) {
		return msg.say(stripIndents`
			__All my groups__
			${this.client.registry.groups.map(grp =>
				`**${grp.name}:** ${grp.isEnabledIn(msg.guild) ? '✔ Enabled' : '❌ Disabled'}`
			).join('\n')}
		`);
	}
};
