import { Awaitable, NonThreadGuildBasedChannel } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'channelUpdate'> {
  public constructor() {
    super('channelUpdate');
  }

  public callback(client: CozyClient, oldChannel: NonThreadGuildBasedChannel, newChannel: NonThreadGuildBasedChannel): Awaitable<void> {
    if(oldChannel.isDMBased()) return;

    client.logger.handleChannelUpdate(oldChannel, newChannel);
  }
}
