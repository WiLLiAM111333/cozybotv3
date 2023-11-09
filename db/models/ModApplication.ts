import { Schema, model } from "mongoose";

export const ModApplication = model('discordlogger_configs', new Schema({
  guildID: {
    type: String,
    required: true
  }
}));
