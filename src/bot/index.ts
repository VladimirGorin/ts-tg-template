import TelegramBot from "node-telegram-bot-api";
import commandsList from "./commands";
import { setupCommands, setupHandlers } from "./utils";
import handlersList from "./handlers";

const token = process.env.BOT_TOKEN;

if (!token) {
  throw Error("Token not provide");
}

export const bot = new TelegramBot(token, { polling: true });

bot
  .getMe()
  .then(() => {
    console.log("Bot connected");
    const setup = () => {
      setupCommands(commandsList);
      setupHandlers(handlersList);
    };

    setup();
  })
  .catch((error) => {
    console.error("Bot connect error:", error.message);
  });
