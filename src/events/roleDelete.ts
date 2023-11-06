import { Awaitable, Role } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'roleDelete'> {
  public constructor() {
    super('roleDelete');
  }

  public callback(client: CozyClient, role: Role): Awaitable<void> {
    client.logger.handleRoleDelete(role);
  }
}

