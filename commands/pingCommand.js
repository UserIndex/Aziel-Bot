const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDMPermission(false)
		.setDescription(`Check the bot's response time.`),
	async execute(interaction) {
        await interaction.reply(`
        🏓 Latency is ${Date.now() - interaction.createdTimestamp}ms.\n 
        API Latency is ${Math.round(interaction.client.ws.ping)}ms`);
	},
};





 