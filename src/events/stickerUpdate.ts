import { Awaitable, Sticker } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'stickerUpdate'> {
  public constructor() {
    super('stickerUpdate');
  }

  public callback(client: CozyClient, oldSticker: Sticker, newSticker: Sticker): Awaitable<void> {
    client.logger.handleStickerUpdate(oldSticker, newSticker);
  }
}
