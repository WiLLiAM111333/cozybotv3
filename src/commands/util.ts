import { CommandInteraction } from "discord.js";
import { Command } from "../../lib/command/Command";

export default class extends Command {
  public constructor() {
    super();

    // TODO: Rename and change description
    this
      .setName('util')
      .setDescription('Utility commands')
      .setDMPermission(false)
      .addSubcommand(subCommand => subCommand
        .setName('avatar')
        .setDescription('Command for viewing your avatar in a larger size')
      )
      .addSubcommand(subCommand => subCommand
        .setName('big-emote')
        .setDescription('Command for viewing a given emote in its full uploaded size')
        .addStringOption(option => option
          .setName('emote')
          .setDescription('The emote you wish to view')
          .setRequired(true)  
        )
      )
      .addSubcommand(subCommand => subCommand
        .setName('icon')
        .setDescription('Command for viewing the server icon')  
      )
      .addSubcommand(subCommand => subCommand
        .setName('banner')
        .setDescription('Command for viewing the server banner')  
      )
      .addSubcommand(subCommand => subCommand
        .setName('why-create')
        .setDescription('The server owner\'s explanation for why the server was created')  
      )
  }

  public run(interaction: CommandInteraction) {
    
  }
}