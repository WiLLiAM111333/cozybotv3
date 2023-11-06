import { Awaitable, Sticker } from "discord.js";
import { CozyClient } from '../../lib/CozyClient';
import { Event } from "../../lib/event/Event";

export default class extends Event<'stickerCreate'> {
  public constructor() {
    super('stickerCreate');
  }

  public callback(client: CozyClient, sticker: Sticker): Awaitable<void> {
    client.logger.handleStickerCreate(sticker);
  }
}
