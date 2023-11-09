import { Interaction, CacheType, ChatInputCommandInteraction } from "discord.js";
import { join } from 'node:path'
import { CozyClient } from "../../lib/CozyClient";
import { Event } from "../../lib/event/Event";
import { Command } from "../../lib/command/Command";

export default class extends Event<'interactionCreate'> {
  public constructor() {  
    super('interactionCreate');
  }

  public override async callback(client: CozyClient, interaction: Interaction<CacheType>): Promise<void> {
    if(interaction.isCommand()) {
      const commandModule: Command = new (await import(join(__dirname, '..', 'commands', `${interaction.commandName}`))).default;
  
      return commandModule.run(interaction as ChatInputCommandInteraction);
    }

    if(interaction.isButton() || interaction.isModalSubmit()) {
      client.interactionHandler.handleInteractionCreate(interaction);
    }
  }
}