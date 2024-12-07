import TelegramBot from "node-telegram-bot-api";
import { bot } from "..";
import AppDataSource from "../../ormConfig";
import { User } from "../../database/models/User";

const startCommand = async (msg: TelegramBot.Message) => {
  try {
    const chatId = (msg.from?.id || msg.chat.id).toString();
    const username = msg.from?.username
      ? `${msg.from?.first_name} ${msg.from?.last_name}`
      : msg.from?.username;

    const userRepo = AppDataSource.getRepository(User);
    let user = await userRepo.findOne({ where: { chatId } });

    if (!user) {
      user = userRepo.create({
        chatId,
        username: username,
      });

      await userRepo.save(user);
    }

    bot.sendMessage(chatId, `Привет! Это стартовое сообщение ${user?.username}`);
  } catch (error) {
    console.error(error);
  }
};

export default startCommand;
