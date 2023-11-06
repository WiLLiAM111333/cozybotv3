import { Stream } from "stream";
import { LogEmbed } from "./LogEmbed";
import {
  APIAttachment,
  Attachment,
  AttachmentBuilder,
  AttachmentPayload,
  BufferResolvable,
  JSONEncodable,
} from "discord.js";

export interface IDiscordLoggerLogOptions {
  pingModRole?: boolean;
  content?: string;
  embeds: Array<LogEmbed>;
  files?: Array<
    BufferResolvable
      | Stream
      | JSONEncodable<APIAttachment>
      | Attachment
      | AttachmentBuilder
      | AttachmentPayload
  >;
}
