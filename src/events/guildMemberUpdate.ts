import { Awaitable, GuildMember } from "discord.js";
import { CozyClient } from "../../lib/CozyClient";
import { Event } from "../../lib/event/Event";

export default class extends Event<'guildMemberUpdate'> {
  public constructor() {
    super('guildMemberUpdate');
  }

  public override callback(client: CozyClient, oldMember: GuildMember, newMember: GuildMember): Awaitable<void> {
    client.logger.handleGuildMemberUpdate(oldMember, newMember);
  }
}