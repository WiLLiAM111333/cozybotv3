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

  export const TENOR_REGEX = /https?:\/\/(www\.)?tenor\.com\/view\/(\w+-)+\d+/
  export const URL_REGEX = /https?:\/\/(\w+\.)*\w+((\/|\.)([\w\?\&=\-_%@:\+#\$'\*,;~]+))*/;
  export const MEDIA_SUFFIX_REGEX = new RegExp(`(?!${URL_REGEX.source}\\.)(${discordSupportedMedias.join('|')})$`)

}