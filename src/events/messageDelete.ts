import { Awaitable, Message } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'messageDelete'> {
  public constructor() {
    super('messageDelete');
  }

  public callback(client: CozyClient, message: Message): Awaitable<void> {
    if(message.channel.isDMBased()) return;
  }
}
