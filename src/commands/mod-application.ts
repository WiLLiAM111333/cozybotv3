import { CommandInteraction, TextInputStyle } from "discord.js";
import { Command } from "../../lib/command/Command";
import { ActionRowBuilder, ModalBuilder, TextInputBuilder } from "@discordjs/builders";

export default class extends Command {
  public constructor() {
    super();

    this
      .setName('mod-application')
      .setDescription('Command for sending a mod application')
      .setDMPermission(false)
  }

  public async run(interaction: CommandInteraction) {
    // TODO: Move to .env file and put it in util/Constants
    const MOD_APP_Q_DEFAULT_MIN_LENGTH = 100 
    const MOD_APP_Q_DEFAULT_MAX_LENGTH = 1500
    //

    const modAppQ1 = new TextInputBuilder()
      .setStyle(TextInputStyle.Short)
      .setCustomId('modAppModAppQ1')
      .setLabel('How old are you?')
      .setRequired(true)
      .setMinLength(2)
      .setMaxLength(2)

    const modAppQ2 = new TextInputBuilder()
      .setStyle(TextInputStyle.Paragraph)
      .setCustomId('mod-app-modAppQ2')
      .setLabel('Why you?')
      .setPlaceholder('Why should we pick you as one of our trusted moderators?')
      .setRequired(true)
      .setMinLength(MOD_APP_Q_DEFAULT_MIN_LENGTH)
      .setMaxLength(MOD_APP_Q_DEFAULT_MAX_LENGTH)

    const modAppQ3 = new TextInputBuilder()
      .setStyle(TextInputStyle.Paragraph)
      .setCustomId('mod-app-modAppQ3')
      .setLabel('Why do you want to be a moderator?')
      .setRequired(true)
      .setMinLength(MOD_APP_Q_DEFAULT_MIN_LENGTH)
      .setMaxLength(MOD_APP_Q_DEFAULT_MAX_LENGTH)

    const modAppQ4 = new TextInputBuilder()
      .setStyle(TextInputStyle.Paragraph)
      .setCustomId('mod-app-modAppQ4')
      .setLabel('Experience')
      .setPlaceholder('Do you have any prior experience moderating another Discord server? If so, which one(s)?')
      .setRequired(true)
      .setMinLength(MOD_APP_Q_DEFAULT_MIN_LENGTH)
      .setMaxLength(MOD_APP_Q_DEFAULT_MAX_LENGTH)

    const modAppQ5 = new TextInputBuilder()
      .setStyle(TextInputStyle.Paragraph)
      .setCustomId('mod-app-modAppQ7')
      .setLabel('Do you consider yourself mature?')
      .setRequired(true)
      .setMinLength(MOD_APP_Q_DEFAULT_MIN_LENGTH)
      .setMaxLength(MOD_APP_Q_DEFAULT_MAX_LENGTH)

    const rows = [
      new ActionRowBuilder<TextInputBuilder>().addComponents(modAppQ1),
      new ActionRowBuilder<TextInputBuilder>().addComponents(modAppQ2),
      new ActionRowBuilder<TextInputBuilder>().addComponents(modAppQ3),    
      new ActionRowBuilder<TextInputBuilder>().addComponents(modAppQ4),
      new ActionRowBuilder<TextInputBuilder>().addComponents(modAppQ5)
    ]
    
    const modal = new ModalBuilder()
      .setTitle('test')
      .setCustomId('modAppModal')
      .addComponents(...rows)

    await interaction.showModal(modal)
    // await interaction.reply({ content: 'Thank you for the application or something', ephemeral: true })
  }
}