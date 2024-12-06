import TelegramBot from "node-telegram-bot-api";

export interface IHandler {
    handler: string;
    function: (message:TelegramBot.Message) => void;
}

const handlersList: IHandler[] = [];

export default handlersList;
