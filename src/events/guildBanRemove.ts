import { Awaitable, GuildBan } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'guildBanRemove'> {
  public constructor() {
    super('guildBanRemove');
  }

  public callback(client: CozyClient, ban: GuildBan): Awaitable<void> {
    client.logger.handleGuildBanRemove(ban);
  }
}

