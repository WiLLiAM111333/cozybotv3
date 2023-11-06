import { Message } from "discord.js";
import { MessageHelper } from "../messageHelper/MesageHelper";

export class OneWordManager {
  public constructor() {}

  public async handleMessageCreate(message: Message): Promise<unknown> {
    try {
      if(/\s+/.test(message.content)) {
        MessageHelper.deleteAfter(message, 2000);
        return MessageHelper.replyEphemeral(message, { content: 'haha you cant do that!' });
      }

      if(MessageHelper.hasAttachments(message)) {
        MessageHelper.deleteAfter(message, 2000);
        return MessageHelper.replyEphemeral(message, { content: 'haha you cant do that either!' });
      }

      if(MessageHelper.hasEmote(message)) {
        MessageHelper.deleteAfter(message, 2000);
        return MessageHelper.replyEphemeral(message, { content: 'haha a third thing you cant do!'});
      }
    } catch (err) {
      throw err;
    }
  }
}