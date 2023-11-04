// TODO

import { Command } from "../../lib/command/Command";
import { ChatInputCommandInteraction, PermissionsBitField } from "discord.js";

export default class extends Command {
  public constructor() {
    super();

    this
      .setName('selfrole')
      .setDescription('Command to setup selfroles')
      .setDMPermission(false)
      .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
  }
  
  public run(interaction: ChatInputCommandInteraction) {

  }
}

// TODO