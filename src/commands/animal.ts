import { CommandInteraction } from "discord.js";
import { Command } from "../../lib/command/Command";

export default class extends Command {
  public constructor() {
    super();

    this
      .setName('animal')
      .setDescription('Command for viewing beautiful pictures or videos of all your favourite animals')
      .setDMPermission(false)
      .addSubcommand(subCommand => subCommand
        .setName('axolotl')
        .setDescription('Command for viewing beautiful pictures of axolotls')
      )
      .addSubcommand(subCommand => subCommand
        .setName('bird')
        .setDescription('Command for viewing beautiful pictures of birds')
      )
      .addSubcommand(subCommand => subCommand
        .setName('cat')
        .setDescription('Command for viewing beautiful pictures of cats')
      )
      .addSubcommand(subCommand => subCommand
        .setName('dog')
        .setDescription('Command for viewing beautiful pictures or videos of dogs')
      )
      .addSubcommand(subCommand => subCommand
        .setName('fox')
        .setDescription('Command for viewing beautiful pictures of foxes')
      )
      .addSubcommand(subCommand => subCommand
        .setName('koala')
        .setDescription('Command for viewing beautiful pictures of koalas')
      )
      .addSubcommand(subCommand => subCommand
        .setName('panda')
        .setDescription('Command for viewing beautiful pictures of pandas')
      )
  }

  public run(interaction: CommandInteraction) {
    
  }
}