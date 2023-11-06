import { Awaitable, GuildEmoji } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'emojiUpdate'> {
  public constructor() {
    super('emojiUpdate');
  }

  public callback(client: CozyClient, oldEmote: GuildEmoji, newEmote: GuildEmoji): Awaitable<void> {
    client.logger.handleEmojiUpdate(oldEmote, newEmote);
  }
}

