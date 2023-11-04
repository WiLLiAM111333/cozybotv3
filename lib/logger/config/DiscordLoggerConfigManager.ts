import { DiscordLoggerConfig } from '../../../db/models/DiscordLoggerConfig';
import { IDiscordLoggerConfig } from "./IDiscordLoggerConfig";
import { Snowflake } from "discord.js";

export class DiscordLoggerConfigManager {
  public async create({ guildID, logChannelID, modRoleID }: Partial<IDiscordLoggerConfig>): Promise<void> {
    try {
      const cfg = new DiscordLoggerConfig({ guildID, logChannelID, modRoleID });

      await cfg.save();
    } catch (err: unknown) {
      this.handleError(err);
    }
  }

  public async update(data: Partial<IDiscordLoggerConfig>): Promise<void> {
    try {
      const { guildID } = data;

      const old = await DiscordLoggerConfig.findOne({ guildID });
      const obj = { guildID }

      for(const key in old) {
        const oldValue = old[key];
        const newValue = data[key];

        if(newValue && newValue !== oldValue) {
          //! Do not re-assign oldValue as it does not change the object.
          obj[key] = newValue;
        }
      }

      await DiscordLoggerConfig.updateOne(obj);
    } catch (err: unknown) {
      this.handleError(err);
    }
  }

  public async has(guildID: Snowflake): Promise<boolean> {
    try {
      return !!(await DiscordLoggerConfig.findOne({ guildID }))
    } catch (err: unknown) {
      this.handleError(err);
    }
  }

  public async get(guildID: Snowflake): Promise<IDiscordLoggerConfig> {
    try {
      return await DiscordLoggerConfig.findOne({ guildID });
    } catch (err: unknown) {
      this.handleError(err);
    }
  }

  public handleError(err: Error | unknown): never { // TODO: HANDLE ERROR
    throw err;
  }
}
