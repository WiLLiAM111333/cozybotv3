import { APIEmbed, JSONEncodable, Message } from "discord.js";
import { Constants } from "../../util/Constants";

const { DISCORD_REGEX } = Constants;


export class MessageHelper {
  public constructor() {
    throw new ReferenceError('Can not instantiate static class MessageHelper')
  }

  public static deleteAfter(message: Message, ms: number = 1000) {
    setTimeout(() => message.delete(), ms).unref();
  }

  public static hasAttachments(message: Message): boolean {
    return !!message.attachments.size
  }

  public static hasEmote(message: Message): boolean {
    return DISCORD_REGEX.emote_global.test(message.content);
  }

  public static replyEphemeral(message: Message, { content, embeds }: { content?: string, embeds?: Array<APIEmbed | JSONEncodable<APIEmbed>> }): void {
    message.reply({ content, embeds, options: { ephemeral: true } })
  }
}