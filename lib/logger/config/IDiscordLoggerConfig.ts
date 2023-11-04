import { Snowflake } from "discord.js";

export interface IDiscordLoggerConfig {
  guildID: Snowflake;
  logChannelID: Snowflake;
  modRoleID: Snowflake;
  ignoredChannelIDs: Array<Snowflake>;
  ghostPingDuration: number;
  botSpamChannelID: Snowflake;
  moderators: Array<Snowflake>;
}
