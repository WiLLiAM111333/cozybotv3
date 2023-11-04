import { Awaitable } from "discord.js";
import { CozyClient } from "../../lib/CozyClient";
import { Event } from "../../lib/event/Event";

export default class extends Event<'ready'> {
  public constructor() {
    super('ready');
  }

  public override callback(client: CozyClient): Awaitable<void> {
    console.log(`Logged in as ${client.user.tag}`);
  }
}