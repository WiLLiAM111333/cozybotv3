import { CommandInteraction } from "discord.js";
import { Command } from "../../lib/command/Command";

export default class extends Command {
  public constructor() {
    super();

    this
      .setName('help')
      .setDescription('Comon now it helps you... hopefully')
  }

  public run(interaction: CommandInteraction) {
    
  }
}