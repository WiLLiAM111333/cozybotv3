import { CozyClient } from './lib/CozyClient';

declare module "discord.js" {
  interface Message {
    client: CozyClient;
  }

  interface CommandInteraction {
    client: CozyClient;
  }

  interface GuildChannel {
    client: CozyClient;
  }

  interface GuildEmoji {
    client: CozyClient;
  }

  interface GuildBan {
    client: CozyClient;
  }

  interface Role {
    client: CozyClient;
  }

  interface Sticker {
    client: CozyClient;
  }

  interface GuildMember {
    client: CozyClient;
  }

  interface BaseGuild {
    client: CozyClient;
  }

  interface Guild {
    client: CozyClient;
  }
}