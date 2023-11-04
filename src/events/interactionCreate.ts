import { Interaction, CacheType, InteractionType, ChatInputCommandInteraction } from "discord.js";
import { join } from 'node:path'
import { CozyClient } from "../../lib/CozyClient";
import { Event } from "../../lib/event/Event";
import { Command } from "../../lib/command/Command";

export default class extends Event<'interactionCreate'> {
  public constructor() {
    super('interactionCreate');
  }

  public override async callback(client: CozyClient, interaction: Interaction<CacheType>): Promise<void> {
    switch(interaction.type) {
      case InteractionType.ApplicationCommand:
        const commandModule: Command = new (await import(join(__dirname, '..', 'commands', `${interaction.commandName}`))).default;
  
        commandModule.run(interaction as ChatInputCommandInteraction);
      break;
    }
  }
}