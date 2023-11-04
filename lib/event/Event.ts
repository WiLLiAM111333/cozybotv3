import { Awaitable, ClientEvents } from 'discord.js';
import { CozyClient } from '../CozyClient';

export abstract class Event<T extends keyof ClientEvents> {
  public name: T;
  public abstract callback(client: CozyClient, ...args: ClientEvents[T]): Awaitable<void>;

  public constructor(name: T) {
    this.name = name;
  }
}
