import { CommandInteraction } from "discord.js";
import { Command } from "../../lib/command/Command";

export default class extends Command {
  public constructor() {
    super();

    this.setName('dev')
    this.setDescription('test')
  }

  public run(interaction: CommandInteraction) {
    
  }
}