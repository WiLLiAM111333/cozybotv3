import { CozyClient } from '../lib/CozyClient';
import { Constants } from '../util/Constants';
import { Util } from '../util/Util';

const { DISCORDJS_TOKEN, DISCORDJS_DEVELOPMENT_TOKEN } = Constants;

const client = new CozyClient({
  intents: [
    'Guilds',
    'GuildMembers',
    'GuildBans',
    'GuildEmojisAndStickers',
    'GuildIntegrations',
    'GuildWebhooks',
    'GuildInvites',
    'GuildMessages',
    'GuildIntegrations',
    'MessageContent'
  ]
});

if(Util.isProduction()) {
  client.start(DISCORDJS_TOKEN);
} else {
  client.start(DISCORDJS_DEVELOPMENT_TOKEN);
  // console.log('logged in')
}