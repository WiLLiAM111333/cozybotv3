import { Awaitable, Role } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'roleUpdate'> {
  public constructor() {
    super('roleUpdate');
  }

  public callback(client: CozyClient, oldRole: Role, newRole: Role): Awaitable<void> {
    client.logger.handleRoleUpdate(oldRole, newRole);
  }
}

