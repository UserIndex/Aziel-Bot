const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDMPermission(false)
        .addStringOption(option =>
            option.setName('type')
              .setDescription('Type of meme.')
              .setRequired(true))
		.setDescription(`Generate and display a meme from a meme API.`),
	async execute(interaction) {
        let data = await interaction.options.getString('type');
        const responseType = data.split(' ').join('+');
        console.log(responseType);
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=Fs6pmVvI0Zw44UZJcuphxvJQM4zysTff&tag=${responseType}&rating=pg-13`);
        const dataAPI = await response.json();
        interaction.reply(dataAPI.data.url);

	},
};


