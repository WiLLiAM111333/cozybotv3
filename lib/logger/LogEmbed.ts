import { ColorResolvable, EmbedBuilder, EmbedData, APIEmbed } from 'discord.js';

/**
 * @description Handles the colorization of the embeds being sent out of the class `DiscordLogger`
 */
export class LogEmbed extends EmbedBuilder {
  /**
   * @public
   * @type {TDiscordLoggerLevel}
   */
  public level: TDiscordLoggerLevel;
  /**
   * @param {TDiscordLoggerLevel} level
   * @param {EmbedData | APIEmbed} [data={}]
   */
  constructor(level?: TDiscordLoggerLevel, data?: EmbedData | APIEmbed) {
    super(data);

    this.level = level;
    
    if(level) {
      this.setColor(this.colors[level]);
    }

    this.setTimestamp(new Date())
  }

  private get colors(): Array<ColorResolvable> {
    return [
      '#00a35a',
      '#ffce5c',
      '#ff0000',
      '#00af9c'
    ];
  }

  public setCustomLevel(level: LogEmbedExtendedLevels): this {
    this.setColor(this.colors[level])
    return this;
  }
}
