'use server';

import { ConfigServices } from "@/services/config";
import TelegramBot from 'node-telegram-bot-api';

export default function SenderTelegram( req ){
    const data =  req.body;     
    const name = data.name;
    const phone = data.tel;
    const comments = data.comments;
    const [TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID] = ConfigServices.getENV();
    const text = `
      Новая заявка с сайта:\n 
      Имя: ${name} \n
      Телефон: ${phone} \n
      Комментарий: ${comments}
    `;

    const Bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
    Bot.sendMessage(TELEGRAM_CHAT_ID, text);
    return res.status(200).json({ok: true, message: "Заявка успешно отправлена"});
}