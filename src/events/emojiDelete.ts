import { Awaitable, GuildEmoji } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'emojiDelete'> {
  public constructor() {
    super('emojiDelete');
  }

  public callback(client: CozyClient, emote: GuildEmoji): Awaitable<void> {
    client.logger.handleEmojiDelete(emote);
  }
}

