import { Awaitable, NonThreadGuildBasedChannel } from "discord.js";
import { Event } from "../../lib/event/Event";
import { CozyClient } from '../../lib/CozyClient';

export default class extends Event<'channelCreate'> {
  public constructor() {
    super('channelCreate');
  }

  public callback(client: CozyClient, channel: NonThreadGuildBasedChannel): Awaitable<void> {
    if(channel.isDMBased()) return;

    client.logger.handleChannelCreate(channel);
  }
}
