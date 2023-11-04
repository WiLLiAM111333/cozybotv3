import { CozyClient } from "../CozyClient";
import { join } from 'path';
import { readdir } from 'fs/promises';
import { Event } from "./Event";
import { ClientEvents } from "discord.js";

export const loadEvents = async (client: CozyClient): Promise<void> => {
  try {
    const eventPath = join(__dirname, '..', '..', 'src', 'events');
    const files = await readdir(eventPath);
    
    for(const file of files) {
      const eventFile = join(eventPath, file);

      const { default: EventClass } = await import(eventFile);
      const event: Event<keyof ClientEvents> = new EventClass();

      client.on(event.name, event.callback.bind(null, client));
    }
  } catch (err) {
    client.emit('error', err);
  }
}
