export namespace Constants {
  export const ENVIRONMENT = process.env.NODE_ENV;
  export const MONGODB_CONNECTION_URI = process.env.MONGODB_URI;

  export const {
    DISCORDJS_APPLICATION_ID,
    DISCORDJS_TOKEN,
    DISCORDJS_DEVELOPMENT_TOKEN,
    DISCORD_TEST_SERVER_ID
  } = process.env;

  export const discordSupportedMedias = [
    'jpg',
    'jpeg',
    'png',
    'webp',
    'mov',
    "webm",
    "gif",
    "svg"
  ]

  export const DISCORD_REGEX = {
    emote: /^<a?:(\w+):(\d+)>$/,
    emote_global: /<a?:(\w+):(\d+)>/g,
    channel_mention: /^<#(\d+)>$/,
    everyone_mention: /^(@(?:everyone|here))$/,
    role_mention: /^<@&(\d+)>$/,
    user_mention: /^<@!?(\d+)>$/,
    bold: /\*\*([\s\S]+?)\*\*/,
    codeblock: /\`\`\`(([a-z0-9-]+?)\n+)?\n*([^]+?)\n*\`\`\`/i,
    codestring: /`([\s\S]+?)`/, 
    italics: /_([\s\S]+?)_|\*([\s\S]+?)\*/,
    spoiler: /\|\|([\s\S]+?)\|\|/,
    strike: /~~([\s\S]+?)~~(?!_)/,
    underline: /__([\s\S]+?)__/,
    url: /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/,
    tag: /.*#\d{4}/,
    snowflake: /\d{10,30}/
  }

  export const TENOR_REGEX = /https?:\/\/(www\.)?tenor\.com\/view\/(\w+-)+\d+/
  export const URL_REGEX = /https?:\/\/(\w+\.)*\w+((\/|\.)([\w\?\&=\-_%@:\+#\$'\*,;~]+))*/;
  export const MEDIA_SUFFIX_REGEX = new RegExp(`(?!${URL_REGEX.source}\\.)(${discordSupportedMedias.join('|')})$`)
}