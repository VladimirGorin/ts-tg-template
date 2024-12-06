import TelegramBot from "node-telegram-bot-api";
import startCommand from "./start.command";

export interface ICommand {
    command: RegExp;
    function: (message:TelegramBot.Message) => void;
}

const commandsList: ICommand[] = [
    {
        command: /\/start/,
        function: startCommand,
    },
];

export default commandsList;
