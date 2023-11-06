import { Awaitable, Role } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'roleCreate'> {
  public constructor() {
    super('roleCreate');
  }

  public callback(client: CozyClient, role: Role): Awaitable<void> {
    client.logger.handleRoleCreate(role);
  }
}

