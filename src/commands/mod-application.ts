import { CommandInteraction } from "discord.js";
import { Command } from "../../lib/command/Command";

export default class extends Command {
  public constructor() {
    super();

    this
      .setName('mod-application')
      .setDescription('Command for sending a mod application')
      .setDMPermission(false)
  }

  public run(interaction: CommandInteraction) {
    
  }
}