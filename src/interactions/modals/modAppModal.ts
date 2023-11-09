import { ModalSubmitInteraction } from "discord.js";

export default async (interaction: ModalSubmitInteraction): Promise<void> => {
  await interaction.reply({ content: 'Thank you for the application or something like that ', ephemeral: true })
}