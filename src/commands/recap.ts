import { CommandInteraction } from "discord.js";
import { Command } from "../../lib/command/Command";

export default class extends Command {
  public constructor() {
    super();

    this
      .setName('recap')
      .setDescription('Commands revolving around yearly recaps')
      .setDMPermission(false)
      .addSubcommand(subCommand => subCommand
        .setName('create')
        .setDescription('Command for creating a recap')
      )
      .addSubcommand(subCommand => subCommand
        .setName('update')
        .setDescription('Command for updating a recap')
      )
      .addSubcommand(subCommand => subCommand
        .setName('delete')
        .setDescription('Command for deleting a recap')
      )
  }

  public run(interaction: CommandInteraction) {
    
  }
}