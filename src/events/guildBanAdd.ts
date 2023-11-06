import { Awaitable, GuildBan } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'guildBanAdd'> {
  public constructor() {
    super('guildBanAdd');
  }

  public callback(client: CozyClient, ban: GuildBan): Awaitable<void> {
    client.logger.handleGuildBanAdd(ban);
  }
}

