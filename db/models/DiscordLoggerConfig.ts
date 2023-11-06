import { Schema, model } from 'mongoose';

export const DiscordLoggerConfig = model('discordlogger_configs', new Schema({
  guildID: {
    type: String,
    required: true
  },
  logChannelIDs: {
    type: Array,
    required: false
  },
  modRoleID: {
    type: String,
    required: false
  },
  ignoredChannelIDs: {
    type: Array,
    required: false
  },
  ghostPingDuration: {
    type: Number,
    required: false
  },
  botSpamChannelID: {
    type: String,
    required: true
  },
  moderators: {
    type: Array,
    required: false
  }
}));
