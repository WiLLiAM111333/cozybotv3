import { Awaitable, Sticker } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'stickerDelete'> {
  public constructor() {
    super('stickerDelete');
  }

  public callback(client: CozyClient, sticker: Sticker): Awaitable<void> {
    client.logger.handleStickerDelete(sticker);
  }
}
