import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export abstract class Command extends SlashCommandBuilder {
  public constructor() {
    super();
  }

  public abstract run(interaction: ChatInputCommandInteraction<CacheType>): Awaited<void>
}