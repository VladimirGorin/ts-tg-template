import { ICommand } from "./commands"
import { IHandler } from "./handlers"

import { bot } from "."

export const setupHandlers = (handlers:IHandler[]) => {
    handlers.forEach(handler => {
        bot.on(handler.handler, handler.function)
    })
}

export const setupCommands = (commands:ICommand[]) => {
    commands.forEach(command => {
        bot.onText(command.command, command.function)
    })
}
