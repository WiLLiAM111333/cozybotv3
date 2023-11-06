import { Awaitable, GuildMember } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'guildMemberRemove'> {
  public constructor() {
    super('guildMemberRemove');
  }

  public callback(client: CozyClient, member: GuildMember): Awaitable<void> {
    client.logger.handleGuildMemberRemove(member);
  }
}

