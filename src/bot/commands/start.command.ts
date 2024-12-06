import TelegramBot from "node-telegram-bot-api";
import { bot } from "..";

const startCommand = (msg:TelegramBot.Message) => {
    try {
        console.log(msg)
        const chatId = msg.from?.id;

        if(!chatId){
            throw Error(`Chat-id is ${chatId}`)
        }

        bot.sendMessage(chatId, "Привет! Это стартовое сообщение");
    } catch (error) {
        console.error(error);
    }
};

export default startCommand;
