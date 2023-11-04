import { Message, Awaitable } from "discord.js";
import { CozyClient } from "../../lib/CozyClient";
import { Event } from "../../lib/event/Event";

export default class extends Event<'messageCreate'> {
  public constructor() {
    super('messageCreate');
  }

  public override callback(client: CozyClient, message: Message<boolean>): Awaitable<void> {
    if(message.author.bot) return;
  }
}