import { ButtonInteraction, ComponentType, InteractionType, ModalSubmitInteraction } from "discord.js";
import { join } from 'node:path';
import { InteractionHandlerFunction } from "./InteractionHandlerFunction";

export class InteractionHandler {
  public constructor() {}

  private getInteractionDirname(interaction: ModalSubmitInteraction | ButtonInteraction): MappedInteraction {
    const { type } = interaction;

    if(type === InteractionType.MessageComponent) {
      const { componentType } = interaction;

      if(componentType === ComponentType.Button) {
        return 'buttons';
      }
    } 
    
    if(type === InteractionType.ModalSubmit) {
      return 'modals';
    }
  }

  public async handleInteractionCreate(interaction: ModalSubmitInteraction | ButtonInteraction): Promise<void> {
    try {
      const handlerFN = await this.getInteractionHandler(interaction);

      if(handlerFN) {
        handlerFN(interaction);
      }
    } catch (err) {
      throw err;
    }
  }

  public async getInteractionHandler(interaction: ModalSubmitInteraction | ButtonInteraction): Promise<InteractionHandlerFunction> {
    const path = join(
      __dirname, 
      '..', 
      '..', 
      'src', 
      'interactions', 
      this.getInteractionDirname(interaction),
      `${interaction.customId}.js`
    );
    
    return (await import(path)).default as InteractionHandlerFunction;
  }
}