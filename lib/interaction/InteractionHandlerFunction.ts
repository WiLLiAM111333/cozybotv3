import { Awaitable, Interaction } from "discord.js";

export type InteractionHandlerFunction = (interaction: Interaction) => Awaitable<unknown>