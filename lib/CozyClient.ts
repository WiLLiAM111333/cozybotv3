import { Client, ClientOptions } from 'discord.js';
import { registerCommands } from './command/SlashCommandHandlerFunctions';
import { loadEvents } from './event/loadEvents';
import { DiscordLogger } from './logger/DiscordLogger';
import { InteractionHandler } from './interaction/InteractionHandler';

export class CozyClient extends Client {
  public interactionHandler: InteractionHandler;
  public logger: DiscordLogger;
  
  public constructor(options: ClientOptions) {
    super(options);

    this.interactionHandler = new InteractionHandler();
    this.logger = new DiscordLogger();
  }

  public async start(token?: string): Promise<void> {
    try {
      await this.login(token);
      
      await loadEvents(this);
      await registerCommands();
    } catch (err) {
      throw err;
    }
  }
}