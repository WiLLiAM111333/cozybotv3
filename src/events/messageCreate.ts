import { Message, Awaitable } from "discord.js";
import { CozyClient } from "../../lib/CozyClient";
import { Event } from "../../lib/event/Event";
import { OneWordManager } from "../../lib/oneword/OneWordManager";
import { ActionRowBuilder, ModalBuilder, TextInputBuilder } from "@discordjs/builders";

export default class extends Event<'messageCreate'> {
  private oneWordManager: OneWordManager;

  public constructor() {
    super('messageCreate');

    this.oneWordManager = new OneWordManager()
  }

  public override callback(client: CozyClient, message: Message): Awaitable<void> {
    if(message.author.bot) return;

    // this.oneWordManager.handleMessageCreate(message);

    if(message.content === 'devtest') {

    }
  }
}
