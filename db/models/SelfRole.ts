import { Schema, model } from 'mongoose';

const SelfRoleSchema = new Schema({
  guildID: {
    type: String,
    required: true
  },
  roleID: {
    type: String,
    required: true
  },
  iconURL: {
    type: String,
    required: true
  },
  roleName: {
    type: String,
    required: true
  }
});

export const SelfRole = model('selfroles', SelfRoleSchema);