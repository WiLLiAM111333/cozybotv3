import { Client, ClientOptions } from 'discord.js';
import { registerCommands } from './command/SlashCommandHandlerFunctions';
import { loadEvents } from './event/loadEvents';
import { DiscordLogger } from './logger/DiscordLogger';

export class CozyClient extends Client {
  public prefix: string; // TODO: Swap to dynamic prefix
  public logger: DiscordLogger;
  
  public constructor(options: ClientOptions) {
    super(options);

    this.prefix = ';'
    this.logger = new DiscordLogger();
  }

  public async start(token?: string): Promise<void> {
    try {
      await this.login(token);
      
      await loadEvents(this);
      // await registerCommands();
    } catch (err) {
      throw err;
    }
  }
}