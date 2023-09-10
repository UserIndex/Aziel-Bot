const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDMPermission(false)
		.setDescription('Get information about the bot commands.'),
	async execute(interaction) {
        await interaction.reply(
		"`/ping` - Check the bot's response time.\n"+
		"`/help` - Display a list of available commands and their descriptions.\n"+
		"`/meme` - Generate and display a meme from a meme API.\n"+
		"`/weather` - Fetch and display the weather information for a specified location.\n"+
		"`/kick` - Kick a user from the server.\n"+
		"`/ban` - Ban a user from the server.\n"
		);
	},
};
