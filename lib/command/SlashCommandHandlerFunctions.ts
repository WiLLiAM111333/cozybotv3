import { Constants } from '../../util/Constants';
import { readdir, lstat } from 'fs/promises';
import { join } from 'path';
import { Environment } from '../../util/Environment';
import { Command } from './Command';
import { 
  ChatInputCommandInteraction, 
  RESTPostAPIChatInputApplicationCommandsJSONBody, 
  REST, 
  Routes 
} from 'discord.js';

const { 
  DISCORDJS_TOKEN, 
  DISCORDJS_APPLICATION_ID, 
  DISCORDJS_DEVELOPMENT_TOKEN, 
  DISCORD_TEST_SERVER_ID, 
  ENVIRONMENT
} = Constants;

const basePath = join(__dirname, '..', '..', 'src', 'commands');

export const registerCommands = async (): Promise<void> => {
  try {
    const commands = await getCommands();

    if(ENVIRONMENT === Environment.DEVELOPMENT) {
      await new REST()
        .setToken(DISCORDJS_DEVELOPMENT_TOKEN)
        .put(
          Routes.applicationGuildCommands(DISCORDJS_APPLICATION_ID, DISCORD_TEST_SERVER_ID), {
            body: commands
          }
        );
    } else {
      await new REST()
        .setToken(DISCORDJS_TOKEN)
        .put(
          Routes.applicationCommands(DISCORDJS_APPLICATION_ID),{
            body: commands
          }
        );
    }
  } catch (err) {
    throw err;
  }
}

export const runCommand = async (interaction: ChatInputCommandInteraction): Promise<void> => {
  return (await getOneCommand(interaction.commandName)).run(interaction);
}

export const getOneCommand = async (name: string): Promise<Command> => {
  return new (await import(join(basePath, `${name}.js`))).default as Command
}

const getCommands = async (path: string = basePath, commands: Array<RESTPostAPIChatInputApplicationCommandsJSONBody> = []): Promise<Array<RESTPostAPIChatInputApplicationCommandsJSONBody>> => {
  try {
    for (const fsEntity of await readdir(path)) {
      const newPath = join(path, fsEntity);
      const stat = await lstat(newPath);

      if(stat.isDirectory()) {
        return getCommands(newPath, commands);
      }

      const commandModule: Command = new (await import(newPath)).default;

      if(commandModule.name === 'mod-application') {
        commands[commands.length] = commandModule.toJSON();
      }
    }

    return commands;
  } catch (err) {
    throw err;
  }
}