import { Awaitable, NonThreadGuildBasedChannel } from "discord.js";
import { CozyClient } from "../../lib/CozyClient";
import { Event } from "../../lib/event/Event";

export default class extends Event<'channelDelete'> {
  public constructor() {
    super('channelDelete');
  }

  public callback(client: CozyClient, channel: NonThreadGuildBasedChannel): Awaitable<void> {
    if(channel.isDMBased()) return;

    client.logger.handleChannelDelete(channel);
  }
}

