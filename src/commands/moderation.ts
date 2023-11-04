// TODO

import { Command } from "../../lib/command/Command";
import { ChatInputCommandInteraction, PermissionsBitField } from "discord.js";

export default class extends Command {
  public constructor() {
    super();

    this
      .setName('moderation')
      .setDescription('Command to setup selfroles')
      .setDMPermission(false)
      .setDefaultMemberPermissions(PermissionsBitField.Flags.BanMembers)
      .addSubcommandGroup(group => group
        .setName('mod-application')
        .setDescription('Subcommand group to view and manage mod applicationns')
        .addSubcommand(subCommand => subCommand
          .setName('view')
          .setDescription('Views a given mod application')
          .addMentionableOption(option => option
            .setName('member')
            .setDescription('The member whose mod application you wish to view')
            .setRequired(true)  
          )
        )
        .addSubcommand(subCommand => subCommand
          .setName('approve')
          .setDescription('Approve a given members mod application')
          .addMentionableOption(option => option
            .setName('member')
            .setDescription('The member whose mod application you wish to approve')
            .setRequired(true)
          )  
        )
        .addSubcommand(subCommand => subCommand
          .setName('disapprove')
          .setDescription('Disapprove a given members mod application')  
          .addMentionableOption(option => option
            .setName('member')
            .setDescription('The member whose mod application you wish to disapprove')
            .setRequired(true)
          )
        )
      )
      .addSubcommand(subCommand => subCommand
        .setName('ban')
        .setDescription('Bans a member')
        .addMentionableOption(option => option
          .setName('member')
          .setDescription('The member you wish to ban')
          .setRequired(true)
        )
        .addStringOption(option => option
          .setName('reason')
          .setDescription('The reason for banning the member')
          .setRequired(false) 
        )
      )
      .addSubcommand(subCommand => subCommand
        .setName('unban')
        .setDescription('Unbans a member')
        .addMentionableOption(option => option
          .setName('member')
          .setDescription('The member you wish to unban')
          .setRequired(true)
        )
        .addStringOption(option => option
          .setName('reason')
          .setDescription('The reason for unbanning the member')
          .setRequired(false) 
        )
      )
      .addSubcommand(subCommand => subCommand
        .setName('kick')
        .setDescription('Kicks a member')
        .addMentionableOption(option => option
          .setName('member')
          .setDescription('The member you wish to kick')
          .setRequired(true)
        )
        .addStringOption(option => option
          .setName('reason')
          .setDescription('The reason for kicking the member')
          .setRequired(false) 
        )
      )
      .addSubcommand(subCommand => subCommand
        .setName('mute')
        .setDescription('Mutes a member using Discords timeout feature')
        .addMentionableOption(option => option
          .setName('member')
          .setDescription('The member you wish to mute')
          .setRequired(true)
        )
        .addStringOption(option => option
          .setName('reason')
          .setDescription('The reason for muting the member')
          .setRequired(false) 
        )
      )
      .addSubcommand(subCommand => subCommand
        .setName('unmute')
        .setDescription('Unmutes a member')
        .addMentionableOption(option => option
          .setName('member')
          .setDescription('The member you wish to unmute')
          .setRequired(true)
        )
        .addStringOption(option => option
          .setName('reason')
          .setDescription('The reason for unmuting the member')
          .setRequired(false) 
        )
      )
      .addSubcommand(subCommand => subCommand
        .setName('warn')
        .setDescription('Warns a member')
        .addMentionableOption(option => option
          .setName('member')
          .setDescription('The member you wish to warn')
          .setRequired(true)
        )
        .addStringOption(option => option
          .setName('reason')
          .setDescription('The reason for warning the member')
          .setRequired(false) 
        )
      )
  }
  
  public run(interaction: ChatInputCommandInteraction) {

  }
}

// TODO