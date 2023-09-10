require("dotenv").config();

const { data : dataHelp ,execute : executeHelpCommand} = require("../commands/helpCommand.js");
const { data : dataPing ,execute : executePingCommand} = require("../commands/pingCommand.js");                           
const { data : dataMeme ,execute : executeMemeCommand} = require("../commands/memeCommand.js");                           

const {
  Client,
  GatewayIntentBits,
} = require("../node_modules/discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildVoiceStates,
 ],
});

client.on("ready", () => {
    //Creating application.commands -> [ /help ] 
  
 
    const now = new Date();
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = now.toLocaleString("ro-RO", options);
    console.clear();
    console.log(`${formattedDate} ${client.user.username} is online ✅`);

    client.user.setActivity("with Commands");
    // client.application.commands.delete('1127611524488380447')
    // .then(console.log("Command deleted successfully."))
    // .catch(console.error);
    // client.application.commands.delete('1127664143567179836')
    // .then(console.log("Command deleted successfully."))
    // .catch(console.error);
    client.application.commands.create(dataHelp.toJSON())
    .then(console.log("Command created successfully."))
    .catch(console.error);

    client.application.commands.create(dataPing.toJSON())
    .then(console.log("Command created successfully."))
    .catch(console.error);

    client.application.commands.create(dataMeme.toJSON())
    .then(console.log("Command created successfully."))
    .catch(console.error);
});


client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === "help") {
      await executeHelpCommand(interaction);
    }else if (interaction.commandName === "ping"){
      await executePingCommand(interaction);
    } else if (interaction.commandName === "meme"){
      await executeMemeCommand(interaction);
    }

    
  });
  

client.login("MTEyNjEwODc5MTkzNTYxMDkzMQ.Gs59hI.-xndRmADSHpqTRetknBWWqfiss_ik5yWvAYCt4");